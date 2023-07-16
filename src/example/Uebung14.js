require('use-strict')
const path = require('path')
const { ElektroKernel, PlanemetrieKernel, Glasplatte } = require(path.resolve(
  'include/system'
))

const { readMaterialParameter } = require(path.resolve(
  'src/js/readMaterialParameter.js'
))

const dbJson = require(path.resolve('controllers/dbJson.js'))

/** TODO: Das Ergebnis stimmt mit der Vorlage nicht überein ? */
function Uebung14 (input) {
  const jsonfile = path.resolve('src/json/example/uebung14.json')

  const Kennzeichnung = dbJson.readJSONFile(
    path.resolve('src/json/kennzeichnung.json')
  )

  const Parameter = input
  const Visual = {}

  const P1 = new Glasplatte(Kennzeichnung, Parameter, Visual)
  P1.Parameter.ρgl = readMaterialParameter(input.Material, 'ρ')

  const PK = new PlanemetrieKernel()
  const EK = new ElektroKernel()

  PK.parameter({ g: P1.Parameter.l, h: P1.Parameter.b })
  P1.Parameter.Ap = PK.RAgh()

  EK.parameter({ ρ: P1.Parameter.ρgl, l: P1.Parameter.d, A: P1.Parameter.Ap })
  P1.Parameter.R = EK.RρlA()

  dbJson.writeJSONItem(jsonfile, P1)
}

// let input = {
//   Material: 'Glas',
//   l: '0.8 m',
//   b: '1.25 m',
//   d: '1 mm'
// }
// Uebung14(input)

exports.func = Uebung14
