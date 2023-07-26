require('use-strict')
const path = require('path')
const dbJson = require(path.resolve('controllers/dbJson'))

const {
  ArithmetikKernel,
  PlanemetrieKernel,
  ElektroKernel,
  Spannungsmesser
} = require(path.resolve('include/system'))

const { readMaterialParameter } = require(path.resolve(
  'src/js/readMaterialParameter.js'
))

/**
 * @description
 * Ein Drehspulspannungsmesser hat einen Meßbereich von 300 mV.
 * Das rechteckige Spulenrähmchen der Drehspule hat die Seitenlängen 2 cm und 1 cmm
 * und ist mit 200 Windungen Kupferdraht von 0.03 mm  Durchmesser einlagig bewickelt.
 * Wie groß ist der Strom, der durch das Meßgerät bei Endausschlag fließt ?
 * @author Dieter Krause
 * @date 25/07/2023
 * @param {*} input
 */
function Uebung15 (input) {
  const jsonfile = path.resolve('src/json/example/uebung15.json')

  const Kennzeichnung = dbJson.readJSONFile(
    path.resolve('src/json/kennzeichnung.json')
  )

  const Parameter = input

  const P1 = new Spannungsmesser(Kennzeichnung, Parameter, {})
  P1.Parameter.ρM = readMaterialParameter(P1.Parameter.Material, 'ρ').toString()

  const PK = new PlanemetrieKernel()
  const AK = new ArithmetikKernel()
  const EK = new ElektroKernel()

  PK.parameter({ g: P1.Parameter.l, h: P1.Parameter.b })
  P1.Parameter.Ur = PK.RUgh().toString()

  PK.parameter({ d: P1.Parameter.d })
  P1.Parameter.Ad = PK.KAd().toString()

  AK.parameter({ a: P1.Parameter.Ur, b: P1.Parameter.N })
  P1.Parameter.ld = AK.mul().toString()

  EK.parameter({
    ρ: P1.Parameter.ρM,
    l: P1.Parameter.ld,
    A: P1.Parameter.Ad,
    U: P1.Parameter.Ug
  })
  P1.Parameter.Ie = EK.IρAlU().toString()

  dbJson.writeJSONItem(jsonfile, P1)
}
let input = {
  Material: 'Kupfer',
  Ug: '300 mV',
  l: '2 cm',
  b: '1 cm',
  N: 200,
  d: '0.03 mm'
}
Uebung15(input)
// exports.func = Uebung15
