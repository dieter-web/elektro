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
  const dbJson = require(path.resolve("controllers/dbJson.js"));
  const { makeDirectory, readMaterialParameter, readKonstante } = require(path.resolve("src/js/utility.js"));

  const { Elektro, Planemetrie } = require(path.resolve("src/mathjs/Kernel.js"));

  const { Leitung } = require(path.resolve("src/components/Betriebsmittel.js"));

  const datadir = "src/json/example/Aufgabe15";

  makeDirectory(datadir).then(
    function () {
      const W1 = new Leitung({ Material: input.Material, d: input.d, l: input.l });
      const PK = new Planemetrie();
      const EK = new Elektro();

      W1.Kennzeichnung = {
        Art: "W",
        Zählnummer: "1",
      };

      W1.Parameter.ρm = readMaterialParameter(W1.Eigenschaften.Material, "ρ");
      W1.Parameter.α20 = readMaterialParameter(W1.Eigenschaften.Material, "α20");
      W1.Parameter.δ20 = readKonstante("Vergleichstemperatur");
      W1.Parameter.δ2 = input.δ2;

      PK.parameter({ d: W1.Eigenschaften.d });
      W1.Berechnung["A"] = PK.KAd();

      EK.parameter({
        l: W1.Eigenschaften.l,
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
