require('use-strict')
const path = require('path')

const { ElektroKernel, Widerstand } = require(path.resolve('include/system'))
const dbJson = require(path.resolve('controllers/dbJson.js'))

/**
 * @description
 * Wie groß ist die Spannung, die an einem Widerstand liegt, dessen Leitwert 3*E-2 S beträgt und
 * der von einem Strom der Stärke 600 mA durchflossen wird?
 * @author Dieter Krause
 * @date 09/05/2023
 * @param {*} input
 */
function Aufgabe11 (input) {
  const Kennzeichnung = dbJson.readJSONFile(
    path.resolve('src/json/kennzeichnung.json')
  )
  const Parameter = input
  const Visual = {}

  // Speicherort für data
  const jsonfile = path.resolve('src/json/example/aufgabe11.json')

  const R1 = new Widerstand(Kennzeichnung, Parameter, Visual)

  const EK = new ElektroKernel()

  EK.parameter({ G: R1.Parameter.G, I: R1.Parameter.I })
  let U12 = EK.UIG().toString()

  let erg = {
    Object: R1,
    Ergebnis: {
      U: U12
    }
  }
  dbJson.writeJSONItem(jsonfile, erg)
}
// let input = {
//   G: '3E-2 S',
//   I: '600 mA'
// }
// Aufgabe11(input)
exports.func = Aufgabe11
