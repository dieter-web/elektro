require("use-strict");

/**
 * @description
 * An einer Magnetspule aus Kupferdraht liegt eine konstante Spannung.
 * Nach mehrstündigem Betrieb  hat sich die Temperatur der Spule
 * von 12°C auf 60°C erhöht.
 * Um wieviel Prozent ändert sich durch die Erwärmung der Strom der
 * Spule ?
 * @author Dieter Krause
 * @date 26/07/2023
 * @param {*} input
 */
async function Uebung18(input) {
  const path = require("path");
  const { makeDirectory } = require(path.resolve("src/js/makeDirectory.js"));
  const dbJson = require(path.resolve("controllers/dbJson"));

  const { Elektro, Magnetspule } = require(path.resolve("include/system"));

  const { readMaterialParameter } = require(path.resolve(
    "src/js/readMaterialParameter.js"
  ));

  const { readKonstante } = require(path.resolve("src/js/readKonstante.js"));

  const L1 = new Magnetspule({
    Material: "Kupfer",
    δ1: "12 celsius",
    δ2: "60 celsius",
  });

  const EK = new Elektro();

  const datadir = "src/json/example/Uebung16";
  makeDirectory(datadir).then(
    function () {
      L1.Kennzeichnung.Art = "L";
      L1.Kennzeichnung.Zählnummer = "1";

      L1.Parameter.ρM = readMaterialParameter(
        L1.Parameter.Material,
        "ρ"
      ).toString();
      L1.Parameter.α20 = readMaterialParameter(
        L1.Parameter.Material,
        "α20"
      ).toString();

      L1.Parameter.δ20 = readKonstante("Vergleichstemperatur").toString();

      EK.parameter({
        δ1: L1.Parameter.δ1,
        δ2: L1.Parameter.δ2,
        δ20: L1.Parameter.δ20,
        α20: L1.Parameter.α20,
      });

      L1.Parameter.pI = EK.Rpδ1δ2().toString();

      dbJson.writeJSONItem(path.resolve(`${datadir}/data.json`), L1);
    },
    function () {
      console.error(`${datadir}`);
    }
  );
}
// let input = {
//   Material: 'Kupfer',
//   δ1: '12 celsius',
//   δ2: '60 celsius'
// }
// Uebung18(input)
exports.func = Uebung18;
