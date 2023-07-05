const path = require('path')
const {
  dbJson,
  ElektroKernel,
  PlanemetrieKernel,
  BEGlasplatte
} = require(path.resolve('include/system'))

function Uebung14 (input) {
  const jsonfile = path.resolve('src/json/example/uebung14.json')

  const ρgl_min = dbJson.readJSONFile(path.resolve('src/json/Tafel11.json'))[
    'Glas' // input.Material
  ].ρ[0]

  const ρgl_max = dbJson.readJSONFile(path.resolve('src/json/Tafel11.json'))[
    'Glas' // input.Material
  ].ρ[1]

  // TODO Hier sollte eine Eingabemöglichkeit geschaffen werden! Überarbeiten !!

  const Kennzeichnung = {
    '=': {
      Anlage: {
        1: '00',
        2: '00',
        3: '00',
        Trennzeichen: '-',
        4: '00',
        5: '00'
      }
    },
    '+': {
      Ort: {
        Aufstellungsort: {
          1: '00',
          2: '00',
          3: '00',
          4: '00',
          5: '00'
        },
        Trennzeichen: '-',
        Einbauort: {
          6: '00',
          7: '00',
          8: '00',
          9: '00'
        }
      }
    },
    Art: 'A',
    Zaehlnummer: 1,
    Funktion: 'A',
    ':': {
      Anschluss: {
        1: '00',
        2: '00'
      }
    }
  }

  const P1 = new BEGlasplatte(
    Kennzeichnung,
    {
      Material: input.Material,
      l: input.l,
      b: input.b,
      d: input.d
    },
    {}
  )

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
  return erg
}

let input = {
  Material: 'Glas',
  l: '0.8m',
  b: '1.25m',
  d: '1 mm'
}
console.log(Uebung14(input))

// exports.func = Uebung14
