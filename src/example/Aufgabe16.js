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

  const { ElektroKernel, Leiterwerkstoff } = require(path.resolve(
    "include/system"
  ));

  const GoCh = new Leiterwerkstoff(input);
  const Ek = new ElektroKernel();

  const data = "src/json/example/Aufgabe16";

  makeDirectory(data).then(function () {
    GoCh.Kennzeichnung.Art = "M";
    GoCh.Kennzeichnung.Zählnummer = "1";

    Ek.parameter({
      α20: GoCh.fα20(input.Material),
      δ20: "20celsius",
      Material: input.Material,
    });

    GoCh.Parameter.theta0 = Ek.δM().toString();
    // GoCh.Parameter.erg = Ek.δM().toString();

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
