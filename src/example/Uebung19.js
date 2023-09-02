require("use-strict");
const path = require("path");
const dbJson = require(path.resolve("controllers/dbJson.js"));
const { ElektroKernel, Kaltleiter } = require(path.resolve("include/system"));

const { readKonstante } = require(path.resolve("src/js/readKonstante.js"));
/**
 * @function Uebung19
 *
 * Ein temperaturabhängiger Widerstand hat bei 20°C einen Gleichstromwiderstand
 * von 40 kohm. Wie groß ist der Temperaturkoeffizient, wenn bei 25.5°C der
 * Widerstand 41 kohm beträgt.
 */
function Uebung19(input) {
  const jsonfile = path.resolve("src/json/example/uebung19.json");

  // const δ20 = dbJson.readJSONFile(path.resolve('src/json/konstanten.json'))
  //   .konstanten.Vergleichstemperatur.wert
  const Kennzeichnung = dbJson.readJSONFile(
    path.resolve("src/json/kennzeichnung.json")
  );

  const Parameter = input;
  let R1 = new Kaltleiter(Kennzeichnung, Parameter, {});
  R1.Parameter.δ20 = readKonstante("Vergleichstemperatur").toString();

  const EK = new ElektroKernel();
  EK.parameter({
    R20: R1.Parameter.R20,
    Rδ2: R1.Parameter.Rδ2,
    δ2: R1.Parameter.δ2,
    δ20: R1.Parameter.δ20,
  });
  R1.Parameter.Rα20 = EK.α20().toString();

  dbJson.writeJSONItem(jsonfile, R1);
}
// const input = {
//   R20: '40 kohm',
//   Rδ2: '41 kohm',
//   δ2: '25.5 celsius'
// }
// Uebung19(input)
exports.func = Uebung19;
