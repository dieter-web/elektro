require("use-strict")

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
async function Uebung111(input) {
  const path = require("path")
  const { makeDirectory } = require(path.resolve("src/js/utility.js"))
  const dbJson = require(path.resolve("controllers/dbJson.js"))

  const { Elektro, Arithmetik } = require(path.resolve("src/mathjs/Kernel.js"))

  const { Reihenschaltung } = require(path.resolve("src/components/Betriebsmittel.js"))
  const { Klemme } = require(path.resolve("src/components/Betriebsmittel.js"))
  const { Widerstand } = require(path.resolve("src/components/Betriebsmittel.js"))

  const RS1 = new Reihenschaltung(
    {
      R1: input.R1,
      R2: input.R2,
      R3: input.R3,
  })
  const EK = new Elektro()
  const AK = new Arithmetik()
  const datadir = "src/json/example/Uebung111"

  makeDirectory(datadir).then(
    function () {
      
      RS1.Kennzeichnung = {
        Art: "RS",
        Zählnummer: 1,
      }

      RS1.Schaltung = {
        Klemme: {
          A: new Klemme({ ID: "A" }),
          B: new Klemme({ ID: "B" }),
          C: new Klemme({ ID: "C" }),
          D: new Klemme({ ID: "D" }),
        }, // Verbindungspunkte
        bm: {
          // Betriebsmittel
          R1: new Widerstand({value: input.R1 }),
          R2: new Widerstand({value: input.R2 }),
          R3: new Widerstand({value: input.R3 }),
        },
      }

      RS1.Schaltung.bm.R1.Kennzeichnung = {
        Art: "R",
        Zählnummer: 1
      }
      RS1.Schaltung.bm.R2.Kennzeichnung = {
        Art: "R",
        Zählnummer: 2
      }
      RS1.Schaltung.bm.R3.Kennzeichnung = {
        Art: "R",
        Zählnummer: 3
      }

      RS1.Parameter.I = input.I;

      RS1.Schaltung.Klemme.C.Parameter.Φ = input.Φc

      AK.parameter({
        a: RS1.Schaltung.bm.R1.Eigenschaften.value,
        b: RS1.Schaltung.bm.R2.Eigenschaften.value,
      })
      RS1.Berechnung.R1R2 = AK.add()

      EK.parameter({ R: RS1.Berechnung.R1R2.toString(), I: RS1.Parameter.I })

      RS1.Berechnung.AΦ = EK.ΦRI()

      EK.parameter({
        R: RS1.Schaltung.bm.R2.Eigenschaften.value,
        I: RS1.Parameter.I,
      })
      RS1.Berechnung.BΦ = EK.ΦRI()

      EK.parameter({
        R: RS1.Schaltung.bm.R3.Eigenschaften.value,
        I: RS1.Parameter.I,
      })
      RS1.Berechnung.DΦ = EK.ΦRI()

      AK.parameter({ a: RS1.Berechnung.DΦ.toString(), b: -1 }) // liegt auf der anderen Seite vom Bezugspotential
      RS1.Berechnung.DΦ = AK.mul()

      dbJson.writeJSONItem(path.resolve(`${datadir}/data.json`), RS1)
    },
    function () {
      console.error(`${datadir}`)
    }
  )
}
// let input = {
//   R1: "5.2 ohm",
//   R2: "6.9 ohm",
//   R3: "3.4 ohm",
//   Φc: "0 V",
//   I: "2 A",
// };
// Uebung111(input);
exports.func = Uebung111
