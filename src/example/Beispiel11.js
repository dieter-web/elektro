require('use-strict')
const path = require('path')

const { ElektroKernel, Widerstand, Stack } = require(path.resolve(
  'include/system'
))

const dbJson = require(path.resolve('controllers/dbJson.js'))

/**
 * @function Beispiel11
 * @description
 * An den Klemmen der vier Widerstände R1...R4 liegt eine Spannung von U = 60V
 * R1 = 2.5Mohm, R2=80kohm,R3= 500 ohm und R4 = 75 ohm.
 * Wie groß sind die Ströme durch diese Widerstände und welche Leitwertgrößen besitzen sie?
 * @author Dieter Krause
 * @date 29/04/2023
 * @param {*} input
 * @returns {*}
 */
function Beispiel11 (input) {
  const jsonfile = path.resolve('src/json/example/beispiel11.json')

  const IStack = new Stack()
  const GStack = new Stack()

  // let Rl = input.R.split(',')

  let R1 = new Widerstand({}, { R: input.R1, U: input.U }, {})
  let R2 = new Widerstand({}, { R: input.R2, U: input.U }, {})
  let R3 = new Widerstand({}, { R: input.R3, U: input.U }, {})
  let R4 = new Widerstand({}, { R: input.R4, U: input.U }, {})

  let RBEA = [R1, R2, R3, R4]

  const EK = new ElektroKernel()
  RBEA.map((R, i) => {
    EK.parameter({ U: R.Parameter.U, R: RBEA[i].Parameter.R })
    IStack.push(EK.IUR())
    let I = IStack.items[i]
    EK.parameter({ I: I, U: R.Parameter.U })
    GStack.push(EK.GIU())
  })

  // mathobject umwandeln in stringobject
  let IStackString = IStack.items.map(d => {
    return d.toString()
  })
  let GStackString = GStack.items.map(d => {
    return d.toString()
  })

  let erg = {
    Object: RBEA, // Array von Objekten
    Ergebnis: {
      I: IStackString,
      G: GStackString
    }
  }
  dbJson.writeJSONItem(jsonfile, erg)
}

let input = {
  R1: '2.5 Mohm',
  R2: '80 kohm',
  R3: '500 ohm',
  R4: '75 ohm',
  U: '60 V'
}
Beispiel11(input)
// exports.func = Beispiel11
