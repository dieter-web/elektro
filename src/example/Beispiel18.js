require("use-strict");

/**
 * @description
 * Der ohmische Widerstand einer Spule, die aus Kupferdraht gewickelt
 * ist, beträgt bei  12°C 45 Ohm.
 * Nach einer längeren Betriebsdauer ist der Spulenwiderstand um 28%
 * seines  Anfangswerts gestiegen. Wie groß ist die Betriebstemperatur ?
 * @author Dieter Krause
 * @date 25/07/2023
 * @param {*} input
 */
async function Beispiel18(input) {
  const path = require("path");
  const { makeDirectory } = require(path.resolve("src/js/makeDirectory.js"));
  const dbJson = require(path.resolve("controllers/dbJson"));

  const { Elektro, Arithmetik, MehrlagigeSpule } = require(path.resolve(
    "include/system"
  ));

  const { readMaterialParameter } = require(path.resolve(
    "src/js/readMaterialParameter.js"
  ));

  const L1 = new MehrlagigeSpule(input);

  const EK = new Elektro();
  const AK = new Arithmetik();

  const datadir = "src/json/example/Beispiel18";

  makeDirectory(datadir).then(
    function () {
      L1.Kennzeichnung.Art = "L";
      L1.Kennzeichnung.Zählnummer = "1";

      L1.Parameter.ρM = readMaterialParameter(input.Material, "ρ").toString();

      L1.Parameter.δ0M = readMaterialParameter(
        L1.Parameter.Material,
        "δ0"
      ).toString();

      AK.parameter({ G: L1.Parameter.R, p: L1.Parameter.p });
      L1.Berechnung.Prozentwert = AK.Prozentwert();

      AK.parameter({
        a: L1.Parameter.R,
        b: L1.Berechnung.Prozentwert.toString(),
      });
      L1.Berechnung.R2 = AK.add();

      EK.parameter({
        δ0: L1.Parameter.δ0M,
        R: L1.Parameter.R,
        Rδ2: L1.Parameter.R2,
        δ1: L1.Parameter.δ,
      });

      L1.Parameter.erg = EK.δ2().toString();

      dbJson.writeJSONItem(path.resolve(`${datadir}/data.json`), L1);
    },
    function () {
      console.error(`${datadir}`);
    }
  );
}
// let input = {
//   Material: "Kupfer",
//   δ: "12 celsius",
//   R: "45 ohm",
//   p: 28,
// };
// Beispiel18(input);
exports.func = Beispiel18;
