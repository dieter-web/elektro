require('use-strict')
const path = require('path')
const dbJson = require(path.resolve('controllers/dbJson'))

const { ElektroKernel } = require(path.resolve(
  'src/components/Elektrotechnik/gleichspannung/grundbegriffe/kernel.js'
))

/**
 * @description
 * Wie groß ist die Spannung, die an einem Widerstand liegt, dessen Leitwert 3*E-2 S beträgt und
 * der von einem Strom der Stärke 600 mA durchflossen wird?
 * @author Dieter Krause
 * @date 09/05/2023
 * @param {*} input
 */
function Aufgabe11 (input) {
  const jsonfile = path.resolve('src/json/example/aufgabe11.json')
  const EK = new ElektroKernel()

  EK.parameter({ G: input.G, I: input.I })
  let U12 = EK.UIG().toString()

  let erg = {
    Parameter: {
      G: input.G,
      I: input.I
    },
    Ergebnis: {
      U: U12
    }
  }
  dbJson.writeJSONItem(jsonfile, erg)
  return erg
}
// let input = {
//   G: '3E-2 S',
//   I: '600 mA'
// }

// console.log(Aufgabe11(input))
exports.func = Aufgabe11
