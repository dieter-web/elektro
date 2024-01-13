require("use-strict");

/**TODO: Das Ergebnis stimmt nicht überein ? */
/**
 * @description
 *  Es ist der Widerstand des Wolframdrahts einer Glühlampe bei 20°C und bei 2250°C
 * (Betriebstemperatur der Lampe) zu bestimmen. Der Draht hat einen Durchmesser von
 * 0.0245 mm und ist 36.5 cm lang.
 * @author Dieter Krause
 * @date 28/07/2023
 * @param {*} input
 */
async function Beispiel17(input) {
  const path = require("path");
  const {
    makeDirectory
  } = require(path.resolve("src/js/makeDirectory.js"));
  const dbJson = require(path.resolve("controllers/dbJson"));
  const {
    Planemetrie,
    Elektro,
    Gluehlampe
  } = require(path.resolve("include/system"));
  const {
    readMaterialParameter
  } = require(path.resolve("src/js/readMaterialParameter.js"));
  const {
    readKonstante
  } = require(path.resolve("src/js/readKonstante.js"));
  const PK = new Planemetrie();
  const EK = new Elektro();
  const E1 = new Gluehlampe(input);
  const datadir = "src/json/example/Beispiel17";
  makeDirectory(datadir).then(function () {
    E1.Kennzeichnung.Art = "E";
    E1.Kennzeichnung.Zählnummer = "1";
    E1.Parameter.ρM = readMaterialParameter(E1.Parameter.Material, "ρ").toString();
    E1.Parameter.α20 = readMaterialParameter(E1.Parameter.Material, "α20").toString();
    E1.Parameter.δ20 = readKonstante("Vergleichstemperatur").toString();
    PK.parameter({
      l: E1.Parameter.l,
      d: E1.Parameter.d
    });
    E1.Berechnung.Awd = PK.KAd().to("mm^2");
    EK.parameter({
      ρ: E1.Parameter.ρM,
      l: E1.Parameter.l,
      A: E1.Berechnung.Awd.toString()
    });
    E1.Berechnung.R20 = EK.RρlA().to("ohm");
    EK.parameter({
      α20: E1.Parameter.α20,
      δ2: E1.Parameter.δ2,
      δ20: E1.Parameter.δ20,
      R20: E1.Berechnung.R20.toString()
    });
    E1.Berechnung.Rδ = EK.Rδ();
    dbJson.writeJSONItem(path.resolve(`${datadir}/data.json`), E1);
  }, function () {
    console.error(`${datadir}`);
  });
}
// let input = {
//   Material: 'Wolfram',
//   l: '36.5 cm',
//   d: '0.0245 mm',
//   δ2: '2250 celsius'
// }
// Beispiel17(input)
exports.func = Beispiel17;