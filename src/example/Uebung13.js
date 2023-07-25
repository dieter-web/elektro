require('use-strict')
const path = require('path')
const dbJson = require(path.resolve('controllers/dbJson'))

const { ElektroKernel, Gleichstrommesser } = require(path.resolve(
  'include/system'
))

/**
 * @description
 * Ein Strommesser hat einen Widerstand von 2.5 ohm.
 * Bei Endausschlag liegt an seinen Klemmen eine
 * Spannung von 0.625 V.
 * Wie groß ist der Meßbereich ?
 * @author Dieter Krause
 * @date 25/07/2023
 * @param {*} input
 */
function Uebung13 (input) {
  const jsonfile = path.resolve('src/json/example/uebung13.json')

  const Kennzeichnung = dbJson.readJSONFile(
    path.resolve('src/json/kennzeichnung.json')
  )

  const Parameter = input
}
let input = {
  R: '2.5 ohm',
  U: '0.625 V'
}
Uebung13(input)
// exports.func = Uebung13
