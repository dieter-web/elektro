require('use-strict')
const path = require('path')
const dbJson = require(path.resolve('controllers/dbJson.js'))

const {
  ElektroKernel,
  ArithmetikKernel,
  PlanemetrieKernel,
  Spulenkoerper,
  Draht,
  Spule
} = require(path.resolve('include/system'))

/**
 * @description
 *  Auf einem Spulenkörper mit einer mittleren Windungslänge lm = 4.35 cm sind 680
 * Windungen Aluminiumdraht von  0.4 mm Durchmesser gewickelt. Wie groß ist der
 * Leitwert der Spule ?
 *
 * @author Dieter Krause
 * @date 20/07/2023
 * @param {*} input
 */
function Aufgabe13 (input) {
  const jsonfile = path.resolve('src/json/example/aufgabe13.json')
  const Kennzeichnung = dbJson.readJSONFile(
    path.resolve('src/json/kennzeichnung.json')
  )
  const { readMaterialParameter } = require(path.resolve(
    'src/js/readMaterialParameter.js'
  ))

  const ρal = readMaterialParameter(input.Material, 'ρ')

  const AK = new ArithmetikKernel()
  const PK = new PlanemetrieKernel()
  const EK = new ElektroKernel()

  let Parameter = {
    lm: input.lm
  }
  let Visual = {}
  const SK1 = new Spulenkoerper(Kennzeichnung, Parameter, Visual)

  Parameter = {
    Material: input.Material,
    d: input.d
  }
  Visual = {}
  const W1 = new Draht(Kennzeichnung, Parameter, Visual)

  Parameter = {
    N: input.N
  }
  Visual = {}
  const SP1 = new Spule(Kennzeichnung, Parameter, Visual)
  SP1.Parameter.SK1 = SK1
  SP1.Parameter.W1 = W1

  AK.parameter({ a: SP1.Parameter.SK1.Parameter.lm, b: SP1.Parameter.N })
  W1.Parameter.lg = AK.mul().toString()

  PK.parameter({ d: SP1.Parameter.W1.Parameter.d })
  W1.Parameter.Al = PK.KAd().toString()

  EK.parameter({
    l: SP1.Parameter.W1.Parameter.lg,
    A: SP1.Parameter.W1.Parameter.Al,
    ρ: ρal
  })
  SP1.Parameter.G = EK.GAρl().toString()

  dbJson.writeJSONItem(jsonfile, SP1)
}
// let input = {
//   Material: 'Aluminium',
//   lm: '4.35 cm',
//   N: 680,
//   d: '0.4 mm'
// }
// Aufgabe13(input)
exports.func = Aufgabe13
