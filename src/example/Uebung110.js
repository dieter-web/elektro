require("use-strict")

/**
 * @description
 * An die Kupferadern eines zweiadrigen, zwischen den Orten A und B im Erdreich verlegten Kabels
 * wird in A eine Spannung von 24 V angelegt. Am Ort B werden die Adern kurzgeschlossen.
 *  Die Stromdichte ist bei einer Temperatur von 20°C 50 mA/mm² groß. Wie lang ist das Kabel ?
 *
 * Bei einer späteren Messung am gleichen Kabel ist infolge Temperaturänderung die Stromdichte
 * um 10% gestiegen.
 * Welche Temperatur hat das Kabel bei dieser Messung ?
 * @author Dieter Krause
 * @date 26/07/2023
 * @param {*} input
 */

async function Uebung110(input) {
  const path = require("path")
  const dbJson = require(path.resolve("controllers/dbJson.js"))
  const { makeDirectory, readMaterialParameter, readKonstante } = require(path.resolve("src/js/utility.js"))

  const { Elektro, Arithmetik } = require(path.resolve("src/mathjs/Kernel.js"))
  const { Kabel } = require(path.resolve("src/components/Betriebsmittel.js"))

  const W1 = new Kabel({
    typ: "Erdkabel",
    Material: input.Material,
    n: input.n,
  })
  const AK = new Arithmetik()
  const EK = new Elektro()
  const datadir = "src/json/example/Uebung110"

  makeDirectory(datadir).then(
    function () {
      W1.Kennzeichnung = {
        Art: "W",
        Zählnummer: 1,
      }

      W1.Parameter = {
        κM: readMaterialParameter(W1.Eigenschaften.Material, "κ"),
        α20M: readMaterialParameter(W1.Eigenschaften.Material, "α20"),
        δ20: readKonstante("Vergleichstemperatur"),
        U: input.U,
        S: input.S,
        p: input.p,
      }

      EK.parameter({
        U: W1.Parameter.U,
        κ: W1.Parameter.κM,
        S: W1.Parameter.S,
      })
      W1.Berechnung.ld = EK.lκus().to("km")

      AK.parameter({ a: W1.Berechnung.ld.toString(), b: W1.Eigenschaften.n })
      W1.Berechnung.lk = AK.div()

      // Berechnung der Stromdichte S2
      AK.parameter({ G: W1.Parameter.S, p: W1.Parameter.p })
      W1.Berechnung.S2 = AK.Prozentwert()

      AK.parameter({ G: W1.Parameter.S, p: W1.Berechnung.S2.toString() })
      W1.Berechnung.S1 = AK.Grundwertp()

      EK.parameter({
        U: W1.Parameter.U,
        S: W1.Berechnung.S1.toString(),
        l: W1.Berechnung.ld.toString(),
      })
      W1.Berechnung.κ1M = EK.κlsu().to("S* m/mm^2")

      EK.parameter({
        α20: W1.Parameter.α20M,
        κ: W1.Parameter.κM,
        κ1: W1.Berechnung.κ1M.toString(),
      })
      W1.Berechnung.Δδ = EK.Δδκ()

      AK.parameter({ a: W1.Parameter.δ20, b: W1.Berechnung.Δδ.toString() })
      W1.Berechnung.δ2 = AK.add()

      dbJson.writeJSONItem(path.resolve(`${datadir}/data.json`), W1)
    },
    function () {
      console.error(`${datadir}`)
    }
  )
}
// let input = {
//   Material: 'Kupfer',

//   n: 2,
//   U: '24 V',
//   S: '50 mA/mm^2',
//   p: 10 // Prozentsatz
// }
// Uebung110(input)
exports.func = Uebung110
