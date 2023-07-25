require('use-strict')
const path = require('path')
const dbJson = require(path.resolve('controllers/dbJson'))

const { ElektroKernel, ArithmetikKernel, Freileitung } = require(path.resolve(
  'include/system'
))

const { readMaterialParameter } = require(path.resolve(
  'src/js/readMaterialParameter.js'
))

function Uebung11 (input) {
  const jsonfile = path.resolve('src/json/example/uebung11.json')

  const Kennzeichnung = dbJson.readJSONFile(
    path.resolve('src/json/kennzeichnung.json')
  )

  const Parameter = input

  let W1 = new Freileitung(Kennzeichnung, Parameter, {})
  W1.Parameter.ρM = readMaterialParameter(W1.Parameter.Material, 'ρ').toString()

  const AK = new ArithmetikKernel()
  const EK = new ElektroKernel()

  AK.parameter({ a: W1.Parameter.l, b: W1.Parameter.n })
  W1.Parameter.lges = AK.mul().toString()

  EK.parameter({ ρ: W1.Parameter.ρM, A: W1.Parameter.A, l: W1.Parameter.lges })

  W1.Parameter.Rfl = EK.RρlA().toString()

  dbJson.writeJSONItem(jsonfile, W1)
}
// let input = {
//   Material: 'Aluminium',
//   A: '25 mm^2',
//   l: '17 km',
//   n: '2'
// }
// Uebung11(input)
exports.func = Uebung11
