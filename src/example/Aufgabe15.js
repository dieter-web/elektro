require("use-strict");

/**
 * @description
 * Welchen Widerstand hat eine 0.9mm dicke und 3km lange Kupferleitung von rundem Querschnitt,
 * die im Erdreich verlegt ist ? Die Umgebungstemperatur beträgt -2°C . (Erder)
 * @author Dieter Krause
 * @date 27/07/2023
 * @param {*} input
 */
async function Aufgabe15(input) {
  const path = require("path");
  const { makeDirectory } = require(path.resolve("src/js/makeDirectory.js"));
  const dbJson = require(path.resolve("controllers/dbJson.js"));

  const { readMaterialParameter } = require(path.resolve(
    "src/js/readMaterialParameter.js"
  ));

  const { readKonstante } = require(path.resolve("src/js/readKonstante.js"));

  const { Elektro, Planemetrie, Erder } = require(path.resolve(
    "include/system"
  ));

  const W1 = new Erder(input);
  const PK = new Planemetrie();
  const EK = new Elektro();

  const datadir = "src/json/example/Aufgabe15";

  makeDirectory(datadir).then(
    function () {
      W1.Kennzeichnung.Art = "W";
      W1.Kennzeichnung.Zählnummer = "1";

      W1.Parameter.ρm = readMaterialParameter(input.Material, "ρ").toString();
      W1.Parameter.α20 = readMaterialParameter(
        input.Material,
        "α20"
      ).toString();
      W1.Parameter.δ20 = readKonstante("Vergleichstemperatur").toString();

      PK.parameter({ d: W1.Parameter.d });
      W1.Berechnung["A"] = PK.KAd();

      EK.parameter({
        l: W1.Parameter.l,
        A: W1.Berechnung["A"].toString(),
        ρ: W1.Parameter.ρm,
      });

      EK.appendParameter("R20", EK.RρlA().toString());
      EK.appendParameter("α20", W1.Parameter.α20);
      EK.appendParameter("δ2", W1.Parameter.δ2);
      EK.appendParameter("δ20", W1.Parameter.δ20);

      W1.Berechnung["R2"] = EK.Rδ();

      dbJson.writeJSONItem(path.resolve(`${datadir}/data.json`), W1);
    },
    function () {
      console.error(`${datadir}`);
    }
  );
}
// let input = {
//   Material: "Kupfer",
//   d: "0.9 mm",
//   l: "3 km",
//   δ2: "-2 celsius",
// };
// Aufgabe15(input);
exports.func = Aufgabe15;
