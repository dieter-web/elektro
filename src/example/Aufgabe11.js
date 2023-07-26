require('use-strict')
const path = require('path')
const dbJson = require(path.resolve('controllers/dbJson.js'))

const { ElektroKernel, Widerstand } = require(path.resolve('include/system'))

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

  // Widerstand
  const Kennzeichnung = dbJson.readJSONFile(
    path.resolve('src/json/kennzeichnung.json')
  )

  const Parameter = input
  const R1 = new Widerstand(Kennzeichnung, Parameter, {})

  const EK = new ElektroKernel()

  EK.parameter({ G: R1.Parameter.G, I: R1.Parameter.I })
  R1.Parameter.U12 = EK.UIG().toString()

  dbJson.writeJSONItem(jsonfile, R1)
}
let input = {
  G: '3E-2 S',
  I: '600 mA'
}
Aufgabe11(input)
// exports.func = Aufgabe11
