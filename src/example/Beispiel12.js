require('use-strict')
const path = require('path')

const { ElektroKernel, PlanemetrieKernel, Draht } = require(path.resolve(
  'include/system'
))

const dbJson = require(path.resolve('controllers/dbJson.js'))

const { Draht } = require(path.resolve(
  'src/components/Betriebsmittel/Uebertragungswege/Draht/Draht.js'
))

/**
 * @description
 * Wie groß ist der spezifische Widerstand eines 3 km langen Drahtes
 * mit 0.9 mm Durchmesser, der
 * einen Widerstand von 84.5 Ohm hat ?
 * @author Dieter Krause
 * @date 23/06/2023
 * @param {*} input
 * @returns {*}
 */
function Beispiel12 (input) {
  // Speicherort für Daten
  const jsonfile = path.resolve('src/json/example/beispiel12.json')

  // JSON Vorlage Kennzeichnung
  const Kennzeichnung = dbJson.readJSONFile(
    path.resolve('src/json/kennzeichnung.json')
  )

  const Parameter = input
  const Visual = {
    opacity: 0.25,
    x: 50,
    y: 50,
    height: 5,
    width: 600
  }
  const W1 = new Draht(Kennzeichnung, Parameter, Visual)

  const PK = new PlanemetrieKernel()
  const EK = new ElektroKernel()

  PK.parameter({ d: input.d })
  let A = PK.KAd()

  EK.parameter({ l: input.l, R: input.R, A: A })
  let ρ = EK.ρRAl()

  let erg = {
    Object: W1,
    Ergebnis: {
      ρ: ρ //unit( ρ ).to( 'ohm (mm^2 / m)' )
    }
  }
  dbJson.writeJSONItem(jsonfile, erg)
}
// let input = {
//   l: '3 km',
//   d: '0.9 mm',
//   R: '84.5 ohm'
// }
// Beispiel12(input)
exports.func = Beispiel12
