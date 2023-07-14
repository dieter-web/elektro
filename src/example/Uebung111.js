require('use-strict')
const path = require('path')
const dbJson = require(path.resolve('controllers/dbJson.js'))

const {
  ElektroKernel,
  ArithmetikKernel,
  Reihenschaltung,
  Widerstand
} = require(path.resolve('include/system.js'))

function Uebung111 (input) {
  const jsonfile = path.resolve('src/json/example/uebung111.json')

  const R1 = new Widerstand(
    { Art: 'R', Zaehlnummer: 1 },
    { value: input.R1 },
    {}
  )
  const R2 = new Widerstand(
    { Art: 'R', Zaehlnummer: 2 },
    { value: input.R2 },
    {}
  )
  const R3 = new Widerstand(
    { Art: 'R', Zaehlnummer: 3 },
    { value: input.R3 },
    {}
  )

  // Reihenschaltung

  const Kennzeichnung = dbJson.readJSONFile(
    path.resolve('src/json/kennzeichnung.json')
  )

  let Parameter = {
    Objecte: [R1, R2, R3],
    Φc: '0 V',
    I: '2 A'
  }

  const RS1 = new Reihenschaltung(Kennzeichnung, Parameter, {})

  const EK = new ElektroKernel()
  const AK = new ArithmetikKernel()

  RS1.Parameter.Objecte.map(R => {
    EK.parameter({ R: R.Parameter.value, I: input.I })
    RS1.Stack.push(EK.ΦRI())
  })

  AK.parameter({ a: RS1.Stack.items[0], b: RS1.Stack.items[1] })
  let tmp = AK.add()

  AK.parameter({ a: tmp, b: input.Φc })
  RS1.Stack.push(AK.sub())

  AK.parameter({ a: RS1.Stack.items[0], b: input.Φc })
  RS1.Stack.push(AK.sub())

  AK.parameter({ a: input.Φc, b: RS1.Stack.items[2] })
  RS1.Stack.push(AK.sub())

  let erg = {
    Object: RS1,
    Ergebnis: {
      Φa: RS1.Stack.items[3],
      Φb: RS1.Stack.items[1],
      Φd: RS1.Stack.items[5]
    }
  }
  dbJson.writeJSONItem(jsonfile, erg)
}
// let input = {
//   R1: '5.2 ohm',
//   R2: '6.9 ohm',
//   R3: '3.4 ohm',
//   Φc: '0 V',
//   I: '2 A'
// }
// Uebung111(input)
exports.func = Uebung111
