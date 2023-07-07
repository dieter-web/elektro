require('use-strict')
const path = require('path')
const { ElektroKernel, PlanemetrieKernel, BEGlasplatte } = require(path.resolve(
  'include/system'
))

const dbJson = require(path.resolve('controllers/dbJson.js'))

function Uebung14 (input) {
  const jsonfile = path.resolve('src/json/example/uebung14.json')

  const ρgl_min = dbJson.readJSONFile(path.resolve('src/json/Tafel11.json'))[
    'Glas' // input.Material
  ].ρ[0]

  const ρgl_max = dbJson.readJSONFile(path.resolve('src/json/Tafel11.json'))[
    'Glas' // input.Material
  ].ρ[1]

  const Kennzeichnung = dbJson.readJSONFile(
    path.resolve('src/json/kennzeichnung.json')
  )

  const Parameter = input
  const Visual = {}

  const P1 = new BEGlasplatte(Kennzeichnung, Parameter, Visual)

  const PK = new PlanemetrieKernel()
  const EK = new ElektroKernel()

  PK.parameter({ g: P1.Parameter.l, h: P1.Parameter.b })
  let Ap = PK.RAgh()

  EK.parameter({ ρ: ρgl_min, l: P1.Parameter.d, A: Ap })
  let Rmin = EK.RρlA()
  EK.parameter({ ρ: ρgl_max, l: P1.Parameter.l, A: Ap })
  let Rmax = EK.RρlA()

  let erg = {
    Object: P1,
    Ergebnis: {
      Rmin: Rmin,
      Rmax: Rmax
    }
  }
  dbJson.writeJSONItem(jsonfile, erg)
}

let input = {
  Material: 'Glas',
  l: '0.8m',
  b: '1.25m',
  d: '1 mm'
}
Uebung14(input)

// exports.func = Uebung14
