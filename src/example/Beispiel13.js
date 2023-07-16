require('use-strict')
const path = require('path')
const {
  RohrleitungstechnikKernel,
  Bleirohr,
  PlanemetrieKernel
} = require(path.resolve('include/system'))

const dbJson = require(path.resolve('controllers/dbJson.js'))

/**
 * @function Beispiel13
 *
 * Wie lang ist ein Bleirohr, das einen Leitwert von 1285 S hat ?
 * Der Innendurchmesser di beträgt 2.5cm und der Außendurchmesser da 3cm.
 *
 * @param {math.Unit} G - Leitwert
 * @param {math.Unit} di - Rohrinnendurchmesser
 * @param {math.Unit} da - Rohraußendurchmesser
 *  Material = 'Blei', G = "1285 S", d = "2.5 cm", D = "3.0 cm"
 */
function Beispiel13 (input) {
  const jsonfile = path.resolve('src/json/example/beispiel13.json')

  const { readMaterialParameter } = require(path.resolve(
    'src/js/readMaterialParameter.js'
  ))

  const RK = new RohrleitungstechnikKernel()
  const PK = new PlanemetrieKernel()

  const Kennzeichnung = dbJson.readJSONFile(
    path.resolve('src/json/kennzeichnung.json')
  )

  const Parameter = input
  let PtRohr = new Bleirohr(Kennzeichnung, Parameter, {})
  PtRohr.Parameter.ρ = readMaterialParameter(input.Material, 'ρ')

  PK.parameter({ d: PtRohr.Parameter.d, D: PtRohr.Parameter.D })
  PtRohr.Parameter.Ar = PK.KRADd()

  RK.parameter({
    ρ: PtRohr.Parameter.ρ,
    A: PtRohr.Parameter.Ar,
    G: PtRohr.Parameter.G
  })
  PtRhor.Parameter.l = RK.lAρG()

  // let erg = {
  //   Object: PtRohr,
  //   Ergebnis: {
  //     l: l
  //   }
  // }
  dbJson.writeJSONItem(jsonfile, PtRohr)
}

// let input = {
//   Material: 'Blei',
//   G: '1285 S',
//   d: '2.5 cm',
//   D: '3.0 cm'
// }
// Beispiel13(input)
exports.func = Beispiel13
