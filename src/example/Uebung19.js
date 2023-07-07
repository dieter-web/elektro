require('use-strict')
const path = require('path')

const { ElektroKernel } = require(path.resolve('include/system'))
const dbJson = require(path.resolve('controllers/dbJson.js'))

/**
 * @function Uebung19
 *
 * Ein temperaturabhängiger Widerstand hat bei 20°C einen Gleichstromwiderstand
 * von 40 kohm. Wie groß ist der Temperaturkoeffizient, wenn bei 25.5°C der
 * Widerstand 41 kohm beträgt.
 */
function Uebung19 (input) {
  const jsonfile = path.resolve('src/json/example/uebung19.json')
  const δ20 = dbJson.readJSONFile(path.resolve('src/json/konstanten.json'))
    .konstanten.Vergleichstemperatur.wert

  const EK = new ElektroKernel()
  EK.parameter({ R20: input.R20, Rδ2: input.Rδ2, δ2: input.δ2, δ20: δ20 })
  let Rα20 = EK.α20()

  let erg = {
    Object: {
      Thermistor: input.R20
    },
    Parameter: {
      R20: input.R20,
      Rδ2: input.Rδ2,
      δ2: input.δ2,
      δ20: input.δ20
    },
    Ergebnis: {
      α20: Rα20
    }
  }
  dbJson.writeJSONItem(jsonfile, erg)
}
// const input = {
//   R20: '40 kohm',
//   Rδ2: '41 kohm',
//   δ2: '25.5 celsius'
// }
// Uebung19(input)
exports.func = Uebung19
