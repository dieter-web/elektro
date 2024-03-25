require("use-strict")

/**
 * @description
 * Wie groß ist die Temperaturkonstante δ0 für Gold-Chrom
 * @author Dieter Krause
 * @date 03/07/2023
 * @param {*} input
 */
async function Aufgabe16(input) {
  const path = require("path")
  const dbJson = require(path.resolve("controllers/dbJson.js"))

  const { makeDirectory, readKonstante } = require(path.resolve("src/js/utility.js"))

  const { Elektro } = require(path.resolve("src/mathjs/Kernel.js"))
  const { Leiterwerkstoff } = require(path.resolve("src/components/Werkstoff.js"))

  const data = "src/json/example/Aufgabe16"

  makeDirectory(data).then(function () {
    const Leiter = new Leiterwerkstoff(input)

    Leiter.Kennzeichnung = {
      Art: "Leiterwerkstoff",
      Zählnummer: 1,
    }

    const Ek = new Elektro()

    Ek.parameter({
      α20: Leiter.fα20(Leiter.Eigenschaften.Material).toString(),
      δ20: "20celsius",
      Material: Leiter.Eigenschaften.Material,
    })

    Leiter.Berechnung.δ0 = Ek.δM()

    dbJson.writeJSONItem(path.resolve(`${data}/data.json`), Leiter)
  }),
    function () {
      console.error(`${data}`)
    }
}
// let input = {
//   Material: "GoldChrom",
// };
// Aufgabe16(input);
exports.func = Aufgabe16
