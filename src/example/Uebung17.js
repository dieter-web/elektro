require("use-strict");

/**
 * @description
 * Die Primärwicklung eines Transformators aus Kupferdraht hat bei 20°C einen Gleichstomwiderstand von 560 ohm.
 * Nach dreistündigen Betrieb beträgt der Widerstand 604 ohm. Wie hoch ist dann die Temperatur der Wicklung?
 * @author Dieter Krause
 * @date 17/01/2024
 * @param {*} input
 */
async function Uebung17(input) {
  const path = require("path");

  const dbJson = require(path.resolve("controllers/dbJson"));
  const { makeDirectory } = require(path.resolve("src/js/makeDirectory.js"));
  const { readMaterialParameter } = require(path.resolve(
    "src/js/readMaterialParameter.js"
  ));

  const { Elektro, Transformator } = require(path.resolve("include/system"));
  const { readKonstante } = require(path.resolve("src/js/readKonstante.js"));
  const T1 = new Transformator(input);
  const EK = new Elektro();
  const datadir = "src/json/example/Uebung17";

  makeDirectory(datadir).then(
    function () {
      T1.Kennzeichnung.Art = "T";
      T1.Kennzeichnung.Zählnummer = "1";

      T1.Parameter.ρM = readMaterialParameter(T1.Parameter.Material, "ρ");
      T1.Parameter.δ0M = readMaterialParameter(T1.Parameter.Material, "δ0");
      T1.Parameter.δ20 = readKonstante("Vergleichstemperatur");

      EK.parameter({
        Rδ2: T1.Parameter.R2,
        R: T1.Parameter.R1,
        δ0: T1.Parameter.δ0M,
        δ1: T1.Parameter.δ20,
      });
      T1.Berechnung.δ2 = EK.δ2();

      dbJson.writeJSONItem(path.resolve(`${datadir}/data.json`), T1);
    },
    function () {
      console.error(`${datadir}`);
    }
  );
}
// let input = {
//   Material: "Kupfer",
//   R1: "560 ohm",
//   R2: "604 ohm",
// };
// Uebung17(input);
exports.func = Uebung17;
