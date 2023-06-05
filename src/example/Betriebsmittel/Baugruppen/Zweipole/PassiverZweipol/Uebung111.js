const path = require('path')
const {
  dbJson,
  ElektroKernel,
  ArithmetikKernel,
  Reihenschaltung,
  BEWiderstand
} = require(path.resolve('include/system'))

function Uebung111 (input) {
  const jsonfile = path.resolve('src/json/example/beispiel111.json')
}
let input = {
  R: ['5.2 ohm', '6.9 ohm', '3.4 ohm'],
  Φc: '0 V',
  I: '2 A'
}
console.log(Uebung111(input))
// exports.func = Uebung111
