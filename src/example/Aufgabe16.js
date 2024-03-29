require("use-strict");

/**
 * @description
 * Wie groß ist die Temperaturkonstante δ0 für Gold-Chrom
 * @author Dieter Krause
 * @date 03/07/2023
 * @param {*} input
 */
async function Aufgabe16(input) {
  const path = require("path");
  const dbJson = require(path.resolve("controllers/dbJson.js"));

  const { makeDirectory } = require(path.resolve("src/js/makeDirectory.js"));
  const { readKonstante } = require(path.resolve("src/js/readKonstante.js"));

  const { Elektro } = require(path.resolve("src/Kernel/Elektro.js"));
  const { Leiterwerkstoff } = require(path.resolve("src/components/Werkstoff.js"));

  const data = "src/json/example/Aufgabe16";

  makeDirectory(data).then(function () {
    const GoCh = new Leiterwerkstoff(input);
    const Ek = new Elektro();

    // GoCh.Kennzeichnung.Art = "M";
    // GoCh.Kennzeichnung.Zählnummer = "1";

    Ek.parameter({
      α20: GoCh.fα20(input.Material).toString(),
      δ20: "20celsius",
      Material: input.Material,
    });

    GoCh.Berechnung = {};
    GoCh.Berechnung["δ0"] = Ek.δM();

    dbJson.writeJSONItem(path.resolve(`${data}/data.json`), GoCh);
  }),
    function () {
      console.error(`${data}`);
    };
}
// let input = {
//   Material: "GoldChrom",
// };
// Aufgabe16(input);
exports.func = Aufgabe16;
