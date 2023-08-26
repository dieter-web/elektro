require('use-strict')
const path = require('path')
const dbJson = require(path.resolve('controllers/dbJson.js'))

const {
  ElektroKernel,
  ArithmetikKernel,
  Reihenschaltung,
  Widerstand,
  Klemme
} = require(path.resolve('include/system.js'))

/**
 * @description
 * Die Widerstände der Schaltung nach Bild 1.27--> doc/drawio haben folgende Werte: R1 = 5,2 ohm, R2 = 6,9
 * ohm, R3 = 3,4 ohm. Der Strom
 * I ist 2A groß Das Potential Φc des Punktes C ist gleich Null, Wie groß sind die Potentiale an den Punkten
 * A, B, D ?
 * @author Dieter Krause
 * @date 01/08/2023
 * @param {*} input
 */
function Uebung111 (input) {
  const jsonfile = path.resolve('src/json/example/uebung111.json')

  // Reihenschaltung
  // Hier müssen die Widerstände verbunden werden.
  // Es entstehen Verbindungspunkte !

  const Kennzeichnung = dbJson.readJSONFile(
    path.resolve('src/json/kennzeichnung.json')
  )

  const Parameter = input

  const RS1 = new Reihenschaltung(Kennzeichnung, Parameter, {})

  RS1.Schaltung = {
    Klemme: {
      A: (A = new Klemme({}, {}, {})),
      B: (B = new Klemme({}, {}, {})),
      C: (C = new Klemme({}, {}, {})),
      D: (D = new Klemme({}, {}, {}))
    }, // Verbindungspunkte
    bm: {
      // Betriebsmittel
      R1: (R1 = new Widerstand(
        { Art: 'R', Zaehlnummer: 1 },
        {
          value: input.R1
        },
        {}
      )),
      R2: (R2 = new Widerstand(
        { Art: 'R', Zaehlnummer: 2 },
        {
          value: input.R2
        },
        {}
      )),
      R3: (R3 = new Widerstand(
        { Art: 'R', Zaehlnummer: 3 },
        {
          value: input.R3
        },
        {}
      ))
    }
  }

  RS1.Schaltung.Klemme.C.Parameter.Φ = input.Φc

  const EK = new ElektroKernel()
  const AK = new ArithmetikKernel()

  AK.parameter({
    a: RS1.Schaltung.bm.R1.Parameter.value,
    b: RS1.Schaltung.bm.R2.Parameter.value
  })
  let R1R2 = AK.add()

  EK.parameter({ R: R1R2, I: RS1.Parameter.I })

  RS1.Schaltung.Klemme.A.Parameter.Φ = EK.ΦRI().toString()

  EK.parameter({
    R: RS1.Schaltung.bm.R2.Parameter.value,
    I: RS1.Parameter.I
  })
  RS1.Schaltung.Klemme.B.Parameter.Φ = EK.ΦRI().toString()

  EK.parameter({
    R: RS1.Schaltung.bm.R3.Parameter.value,
    I: RS1.Parameter.I
  })
  RS1.Schaltung.Klemme.D.Parameter.Φ = EK.ΦRI()

  AK.parameter({ a: RS1.Schaltung.Klemme.D.Parameter.Φ, b: -1 }) // liegt auf der anderen Seite vom Bezugspotential
  RS1.Schaltung.Klemme.D.Parameter.Φ = AK.mul().toString()

  dbJson.writeJSONItem(jsonfile, RS1)
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
