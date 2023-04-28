require('use-strict')
const path = require('path')
const dbJson = require(path.resolve('controllers/dbJson'))

const { ElektroKernel } = require(path.resolve(
  'src/components/Elektrotechnik/gleichspannung/grundbegriffe/kernel.js'
))
const { BEWiderstand } = require(path.resolve(
  'src/components/Betriebsmittel/Widerstaende/BEWiderstand.js'
))
const { Stack } = require(path.resolve(
  'src/components/Datenverarbeitung/dynamischeDatenstrukturen/listen/stapel/stack.js'
))

function Beispiel11 (input) {
  const jsonfile = path.resolve('src/json/example/beispiel11.json')
  const IStack = new Stack()
  const GStack = new Stack()

  let R = input.R.split(',')
  
  let R1 = new BEWiderstand({}, { Wert: R[0] }, {})
  let R2 = new BEWiderstand({}, { Wert: R[1] }, {})
  let R3 = new BEWiderstand({}, { Wert: R[2] }, {})
  let R4 = new BEWiderstand({}, { Wert: R[3] }, {})
  let RBEA = [R1, R2, R3, R4]

  const EK = new ElektroKernel()
  RBEA.map((R, i) => {
    EK.parameter({ U: input.U, R: RBEA[i].Parameter.Wert })
    IStack.push(EK.IUR())
  })

  IStack.items.map(I => {
    EK.parameter({ U: input.U, I: I })
    GStack.push(EK.GIU())
  })

  let erg = {
    Betriebsmittel: {
      Widerstand: RBEA
    },
    Parameter: {
      U: input.U
    },
    Ergebnis: {
      I: IStack,
      G: GStack
    }
  }

  dbJson.writeJSONItem(jsonfile, erg)
  return erg
}

// let input = {
//     "R": "2.5 Mohm, 80 kohm, 500 ohm, 75 ohm",
//     "U": "60 V"
// }
// console.log(Beispiel11(input))
exports.func = Beispiel11
