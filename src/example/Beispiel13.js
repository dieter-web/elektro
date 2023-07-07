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

  const ρbl = readMaterialParameter(input.Material, 'ρ')

  // const ρbl = dbJson.readJSONFile(path.resolve('src/json/Tafel11.json'))[
  //   'Blei' // input.Material
  // ].ρ[0]

  // const ρbl = dbJson.readJSONFile(path.resolve('src/json/Tafel11.json'))[
  //   'Blei' // input.Material
  // ]['ρ'][0]

  const RK = new RohrleitungstechnikKernel()
  const PK = new PlanemetrieKernel()

  const Kennzeichnung = dbJson.readJSONFile(
    path.resolve('src/json/kennzeichnung.json')
  )

  const Parameter = input

  let PtRohr = new Bleirohr(Kennzeichnung, Parameter, {})

  PK.parameter({ d: PtRohr.Parameter.d, D: PtRohr.Parameter.D })
  let Ar = PK.KRADd()

  RK.parameter({ ρ: ρbl, A: Ar, G: PtRohr.Parameter.G })
  let l = RK.lAρG()

  let erg = {
    Object: PtRohr,
    Parameter: {
      ρ: ρbl,
      Ar: Ar
    },
    Ergebnis: {
      l: l
    }
  }
  dbJson.writeJSONItem(jsonfile, erg)
}

// let input = {
//   Material: 'Blei',
//   G: '1285 S',
//   d: '2.5 cm',
//   D: '3.0 cm'
// }
// Beispiel13(input)
exports.func = Beispiel13
