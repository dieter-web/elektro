require('use-strict')
const path = require('path')
const dbJson = require(path.resolve('controllers/dbJson'))

const { ElektroKernel } = require(path.resolve(
  'src/components/Elektrotechnik/gleichspannung/grundbegriffe/kernel.js'
))

/**
 * @description
 * Wie groß ist die Temperaturkonstante δ0 für Gold-Chrom

 * @author Dieter Krause
 * @date 02/05/2023
 * @param {*} input
 */
function Aufgabe16 (input) {
  const α20 = dbJson.readJSONFile(path.resolve('src/json/Tafel11.json'))[
    input.Material
  ].α20[0]
  const δ20 = dbJson.readJSONFile(path.resolve('src/json/konstanten.json'))
    .konstanten.Vergleichstemperatur.wert

  const Ek = new ElektroKernel()
  const jsonfile = path.resolve('src/json/example/aufgabe16.json')

  Ek.parameter({
    α20: α20,
    δ20: δ20
  })

  let theta0 = Ek.δM()

  let erg = {
    Legierung: {
      Material: input.Material
    },
    Parameter: {
      Konstanteα20: α20,
      Konstanteδ20: δ20
    },
    Ergebnis: {
      Temperaturkonstante: theta0
    }
  }

  dbJson.writeJSONItem(jsonfile, erg)
  return erg
}
let input = {
  Material: 'GoldChrom'
}
// console.log(Aufgabe16(input))
exports.func = Aufgabe16
