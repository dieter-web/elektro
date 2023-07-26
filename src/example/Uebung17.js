require('use-strict')
const path = require('path')
const dbJson = require(path.resolve('controllers/dbJson'))

const { ElektroKernel, Transformator } = require(path.resolve('include/system'))

const { readMaterialParameter } = require(path.resolve(
  'src/js/readMaterialParameter.js'
))

const { readKonstante } = require(path.resolve('src/js/readKonstante.js'))

function Uebung17 (input) {
  const jsonfile = path.resolve('src/json/example/uebung17.json')

  const Kennzeichnung = dbJson.readJSONFile(
    path.resolve('src/json/kennzeichnung.json')
  )

  const Parameter = input

  const T1 = new Transformator(Kennzeichnung, Parameter, {})

  T1.Parameter.ρM = readMaterialParameter(T1.Parameter.Material, 'ρ').toString()
  T1.Parameter.δ0M = readMaterialParameter(
    T1.Parameter.Material,
    'δ0'
  ).toString()
  T1.Parameter.δ20 = readKonstante('Vergleichstemperatur').toString()

  const EK = new ElektroKernel()

  EK.parameter({
    Rδ2: T1.Parameter.R2,
    R: T1.Parameter.R1,
    δ0: T1.Parameter.δ0M,
    δ1: T1.Parameter.δ20
  })
  T1.Parameter.δ2 = EK.δ2().toString()

  dbJson.writeJSONItem(jsonfile.T1)
}
// let input = {
//   Material: 'Kupfer',
//   R1: '560 ohm',
//   R2: '604 ohm'
// }
// Uebung17(input)
exports.func = Uebung17
