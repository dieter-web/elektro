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
  const path = require("path");
  const { makeDirectory } = require(path.resolve("src/js/makeDirectory.js"));
  const dbJson = require(path.resolve("controllers/dbJson"));

  const { Elektro, Planemetrie, Aluminiumdraht } = require(path.resolve(
    "include/system"
  ));

  const { readMaterialParameter } = require(path.resolve(
    "src/js/readMaterialParameter.js"
  ));
  const { readKonstante } = require(path.resolve("src/js/readKonstante.js"));
  const PK = new Planemetrie();
  const EK = new Elektro();
  const W1 = new Aluminiumdraht(input);

  const datadir = "src/json/example/Beispiel16";

  makeDirectory(datadir).then(
    function () {
      W1.Kennzeichnung.Art = "W";
      W1.Kennzeichnung.Zählnummer = "1";

      W1.Parameter.ρM = readMaterialParameter(
        W1.Parameter.Material,
        "ρ"
      ).toString();

      W1.Parameter.α20 = readMaterialParameter(
        W1.Parameter.Material,
        "α20"
      ).toString();

      W1.Parameter.δ20 = readKonstante("Vergleichstemperatur").toString();

      PK.parameter({ d: W1.Parameter.d });
      W1.Berechnung.Ad = PK.KAd().to("mm^2");

      EK.parameter({
        ρ: W1.Parameter.ρM,
        l: W1.Parameter.l,
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
//   Material: "Aluminium",
//   l: "300 m",
//   d: "0.2 mm",
//   δ1: "20 celsius",
//   δ2: "75 celsius",
//   δ3: "-8 celsius",
// };
// Beispiel16(input);
exports.func = Beispiel16;
