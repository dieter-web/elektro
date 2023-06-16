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

  const R1 = new BEWiderstand({}, { Wert: input.R[0] }, {})
  const R2 = new BEWiderstand({}, { Wert: input.R[1] }, {})
  const R3 = new BEWiderstand({}, { Wert: input.R[2] }, {})

  let Parameter = {
    R: [R1, R2, R3]
  }
  const RS1 = new Reihenschaltung({}, Parameter, {})

  const EK = new ElektroKernel()
  const AK = new ArithmetikKernel()

  let a = [] // [Φab, Φbc, Φcd]

  RS1.Parameter.R.map(R => {
    EK.parameter({ R: R.Parameter.Wert, I: input.I })
    a.push(EK.ΦRI())
  })

  AK.parameter({ a: a[0], b: a[1] })
  let tmp = AK.add()

  AK.parameter({ a: tmp, b: input.Φc })
  let Φa = AK.sub()

  AK.parameter({ a: a[0], b: input.Φc })
  let Φb = AK.sub()

  AK.parameter({ a: input.Φc, b: a[2] })
  let Φd = AK.sub()

  let erg = {
    Betriebsmittel: {
      Reihenschaltung: RS1
    },
    Parameter: {
      R: input.R,
      I: input.I,
      Φc: input.Φc
    },
    Ergebnis: {
      Φa: Φa,
      Φb: Φb,
      Φd: Φd
    }
  }
  dbJson.writeJSONItem(jsonfile, erg)
  return erg
}
// let input = {
//   R: ['5.2 ohm', '6.9 ohm', '3.4 ohm'],
//   Φc: '0 V',
//   I: '2 A'
// }
// console.log(Uebung111(input))
exports.func = Uebung111
