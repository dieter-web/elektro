require('use-strict')
const path = require('path')

const { dbJson, ElektroKernel, PlanemetrieKernel } = require(path.resolve(
  'include/system'
))

const { Draht } = require(path.resolve(
  'src/components/Betriebsmittel/Uebertragungswege/Draht/Draht.js'
))

/**
 * @function Beispiel12
 *
 * Wie groß ist der spezifische Widerstand eines 3 km langen Drahtes
 * mit 0.9 mm Durchmesser, der
 * einen Widerstand von 84.5 Ohm hat ?
 *
 * @param {string} l - Drahtlänge
 * @param {string} d - Durchmesser
 * @param {string} R - Widerstand
 * @returns {math.Unit} ρ - spezifischer Widerstand
 *  l = "3 km", d = "0.9 mm", R = "84.5 ohm"
 */
function Beispiel12 (input) {
  // Speicherort für Daten
  const jsonfile = path.resolve('src/json/example/beispiel12.json')

  // JSON Vorlage Kennzeichnung
  const Kennzeichnung = dbJson.readJSONFile(
    path.resolve('src/json/kennzeichnung.json')
  )

  const Parameter = input

  // TODO:  Hier wird das Aussehen des W1 bestimmt
  // Die Koordinaten sind hier vieleicht noch zu früh
  // z.B. Schutzleiter, Außenleiter, Nulleiter  ...
  const Visual = {
    // vis: 'vW', // Funktionsname zum Zeichnen des Betriebsmittel
    // id: 'W1',  ist Kennzeichnung
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
    Betriebsmittel: W1,
    Parameter: {
      l: input.l,
      d: input.d,
      R: input.R
    },
    Ergebnis: {
      ρ: ρ //unit( ρ ).to( 'ohm (mm^2 / m)' )
    }
  }

  dbJson.writeJSONItem(jsonfile, erg)
  return erg
}
let input = {
  l: '3 km',
  d: '0.9 mm',
  R: '84.5 ohm'
}
console.log(Beispiel12(input))
// exports.func = Beispiel12
