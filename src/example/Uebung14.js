require('use-strict')
const path = require('path')
const { ElektroKernel, PlanemetrieKernel, BEGlasplatte } = require(path.resolve(
  'include/system'
))

const { readMaterialParameter } = require(path.resolve(
  'src/js/readMaterialParameter.js'
))

const dbJson = require(path.resolve('controllers/dbJson.js'))

function Uebung14 (input) {
  const jsonfile = path.resolve('src/json/example/uebung14.json')

  // Beinhaltet immer den min und max Wert
  const ρgl = readMaterialParameter(input.Material, 'ρ')

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

  EK.parameter({ ρ: ρgl[0], l: P1.Parameter.d, A: Ap })
  let Rmin = EK.RρlA()
  EK.parameter({ ρ: ρgl[1], l: P1.Parameter.l, A: Ap })
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
