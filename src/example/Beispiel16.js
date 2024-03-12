require("use-strict");
/**
 * @description
 * Welche Widerstandswerte hat ein Aluminiumdraht von 300 m Länge und 0.2 mm Durchmesser
 * bei 20°C, bei 75°C und bei -8°C?
 * @author Dieter Krause
 * @date 24/07/2023
 * @param {*} input
 */
async function Beispiel16(input) {
  // Statischer Bereich
  const path = require("path");
  const dbJson = require(path.resolve("controllers/dbJson"));
  const { readMaterialParameter, readKonstante, makeDirectory } = require(path.resolve("src/js/utility.js"));
  const { Elektro, Planemetrie } = require(path.resolve("src/mathjs/Kernel.js"));
  const { Draht } = require(path.resolve("src/components/Betriebsmittel"));
  const datadir = "src/json/example/Beispiel16";
  const EK = new Elektro();
  const PK = new Planemetrie();
  const W1 = new Draht({ Material: input.Material, l: input.l, d: input.d });

  makeDirectory(datadir).then(
    // Dynamischer Bereich
    function () {
      // W1 ist das Objekt der Klasse Draht ... !!
      W1.Kennzeichnung = {
        Art: "W",
        Zählnummer: 1,
      };

      W1.Parameter = {
        ρM: readMaterialParameter(W1.Eigenschaften.Material, "ρ"), // ermittelte Parameter
        α20: readMaterialParameter(W1.Eigenschaften.Material, "α20"),
        δ20: readKonstante("Vergleichstemperatur"),
        δ1: input.δ1, // Parameter
        δ2: input.δ2,
        δ3: input.δ3,
      };

      PK.parameter({ d: W1.Eigenschaften.d });
      W1.Berechnung.Ad = PK.KAd().to("mm^2");

      EK.parameter({
        ρ: W1.Parameter.ρM,
        l: W1.Eigenschaften.l,
        A: W1.Berechnung.Ad.toString(),
      });
      W1.Berechnung.R20 = EK.RρlA().to("ohm");

      EK.parameter({
        α20: W1.Parameter.α20,
        δ20: W1.Parameter.δ20,
        δ2: W1.Parameter.δ1,
        R20: W1.Berechnung.R20.toString(),
      });
      W1.Berechnung.Rδ1 = EK.Rδ().to("ohm");

      EK.appendParameter("δ2", W1.Parameter.δ2);
      W1.Berechnung.Rδ2 = EK.Rδ().to("ohm");

      EK.appendParameter("δ2", W1.Parameter.δ3);
      W1.Berechnung.Rδ3 = EK.Rδ().to("ohm");

      dbJson.writeJSONItem(path.resolve(`${datadir}/data.json`), W1);
    },
    function () {
      console.error(`${datadir}`);
    }
  );
}
// let input = {
//   Material: "Aluminium", // Eigenschaften
//   l: "300 m",
//   d: "0.2 mm",
//   δ1: "20 celsius", // Parameter
//   δ2: "75 celsius",
//   δ3: "-8 celsius",
// };
// Beispiel16(input);
exports.func = Beispiel16;
