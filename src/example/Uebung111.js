require('use-strict')
const path = require('path')
const {
  ElektroKernel,
  ArithmetikKernel,
  Reihenschaltung,
  Widerstand
} = require(path.resolve('include/system.js'))

const dbJson = require(path.resolve('controllers/dbJson.js'))

function Uebung111 (input) {
  const jsonfile = path.resolve('src/json/example/uebung111.json')

  // Object ist Reihenschaltung von Widerstaenden

  const R1 = new Widerstand({}, { Wert: input.R[0], Name: 'R1' }, {})
  const R2 = new Widerstand({}, { Wert: input.R[1], Name: 'R2' }, {})
  const R3 = new Widerstand({}, { Wert: input.R[2], Name: 'R3' }, {})

  let Parameter = {
    Widerstaende: [R1, R2, R3]
  }

  const RS1 = new Reihenschaltung({}, Parameter, {})

  const EK = new ElektroKernel()
  const AK = new ArithmetikKernel()

  RS1.Parameter.Widerstaende.map(R => {
    EK.parameter({ R: R.Parameter.Wert, I: input.I })
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
      stack: RS1.Stack
    }
  }
  dbJson.writeJSONItem(jsonfile, erg)
}
// let input = {
//   R: ['5.2 ohm', '6.9 ohm', '3.4 ohm'],
//   Φc: '0 V',
//   I: '2 A'
// }
// Uebung111(input)
exports.func = Uebung111
