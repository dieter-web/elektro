require("use-strict");
const path = require("path");

const dbJson = require(path.resolve("controllers/dbJson"));

const { ElektroKernel, PlanemetrieKernel, Draht } = require(path.resolve(
  "include/system"
));

const { readMaterialParameter } = require(path.resolve(
  "src/js/readMaterialParameter.js"
));

const { readKonstante } = require(path.resolve("src/js/readKonstante.js"));

/**
 * @description
 * Welche Widerstandswerte hat ein Aluminiumdraht von 300 m Länge und 0.2 mm Durchmesser
 * bei 20°C, bei 75°C und bei -8°C?
 * @author Dieter Krause
 * @date 24/07/2023
 * @param {*} input
 */
function Beispiel16(input) {
  const jsonfile = path.resolve("src/json/example/beispiel16.json");

  let W1 = new Draht(input);

  W1.Parameter.ρM = readMaterialParameter(
    W1.Parameter.Material,
    "ρ"
  ).toString();

  W1.Parameter.α20 = readMaterialParameter(
    W1.Parameter.Material,
    "α20"
  ).toString();

  W1.Parameter.δ20 = readKonstante("Vergleichstemperatur").toString();

  const PK = new PlanemetrieKernel();
  const EK = new ElektroKernel();

  PK.parameter({ d: W1.Parameter.d });
  W1.Parameter.Ad = PK.KAd().toString();

  EK.parameter({ ρ: W1.Parameter.ρM, l: W1.Parameter.l, A: W1.Parameter.Ad });
  W1.Parameter.R20 = EK.RρlA().toString();

  EK.parameter({
    R20: W1.Parameter.R20,
    α20: W1.Parameter.α20,
    δ20: W1.Parameter.δ20,
    δ2: W1.Parameter.δ1,
  });
  W1.Parameter.Rδ1 = EK.Rδ().toString();
  EK.parameter({
    R20: W1.Parameter.R20,
    α20: W1.Parameter.α20,
    δ20: W1.Parameter.δ20,
    δ2: W1.Parameter.δ2,
  });
  W1.Parameter.Rδ2 = EK.Rδ().toString();
  EK.parameter({
    R20: W1.Parameter.R20,
    α20: W1.Parameter.α20,
    δ20: W1.Parameter.δ20,
    δ2: W1.Parameter.δ3,
  });
  W1.Parameter.Rδ3 = EK.Rδ().toString();

  dbJson.writeJSONItem(jsonfile, W1);
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
