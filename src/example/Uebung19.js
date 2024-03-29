require("use-strict");

/**
 * @function Uebung19
 *
 * Ein temperaturabhängiger Widerstand hat bei 20°C einen Gleichstromwiderstand
 * von 40 kohm. Wie groß ist der Temperaturkoeffizient, wenn bei 25.5°C der
 * Widerstand 41 kohm beträgt.
 */
async function Uebung19(input) {
  const path = require("path");

  const dbJson = require(path.resolve("controllers/dbJson.js"));
  const { makeDirectory } = require(path.resolve("src/js/makeDirectory.js"));
  const { readKonstante } = require(path.resolve("src/js/readKonstante.js"));

  const { Elektro, Kaltleiter } = require(path.resolve("include/system"));
  const R1 = new Kaltleiter(input);
  const EK = new Elektro();
  const datadir = "src/json/example/Uebung19";

  makeDirectory(datadir).then(
    function () {
      R1.Kennzeichnung.Art = "R";
      R1.Kennzeichnung.Zählnummer = "20";

      R1.Parameter.δ20 = readKonstante("Vergleichstemperatur");

      EK.parameter({
        R20: R1.Parameter.R20,
        Rδ2: R1.Parameter.Rδ2,
        δ2: R1.Parameter.δ2,
        δ20: R1.Parameter.δ20,
      });

      R1.Berechnung.Rα20 = EK.α20();

      dbJson.writeJSONItem(path.resolve(`${datadir}/data.json`), R1);
    },
    function () {
      console.error(`${datadir}`);
    }
  );
}
// const input = {
//   R20: "40 kohm",
//   Rδ2: "41 kohm",
//   δ2: "25.5 celsius",
// };
// Uebung19(input);
exports.func = Uebung19;
