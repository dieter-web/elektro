require('use-strict')
const path = require('path')
const dbJson = require(path.resolve('controllers/dbJson.js'))

const {
  ElektroKernel,
  ArithmetikKernel,
  PlanemetrieKernel,
  EinlagigeSpule
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

  const AK = new ArithmetikKernel()
  const PK = new PlanemetrieKernel()
  const EK = new ElektroKernel()

  let Parameter = input

  const L1 = new EinlagigeSpule(Kennzeichnung, Parameter, {})
  L1.Parameter.ρM = readMaterialParameter(L1.Parameter.Material, 'ρ').toString()

  AK.parameter({ a: L1.Parameter.lm, b: L1.Parameter.N })
  L1.Parameter.lg = AK.mul().toString()

  PK.parameter({ d: L1.Parameter.d })
  L1.Parameter.Al = PK.KAd().toString()

  EK.parameter({
    l: L1.Parameter.lg,
    A: L1.Parameter.Al,
    ρ: L1.Parameter.ρM
  })

  L1.Parameter.G = EK.GAρl().toString()

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
