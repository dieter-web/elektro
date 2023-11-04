require("use-strict");
const path = require("path");
const dbJson = require(path.resolve("controllers/dbJson"));

const {
  ArithmetikKernel,
  PlanemetrieKernel,
  ElektroKernel,
  Kabel,
} = require(path.resolve("include/system"));

const { readMaterialParameter } = require(path.resolve(
  "src/js/readMaterialParameter.js"
));

/**
 * @description
 * Ein Bleimantelkabel hat einen Außendurchmesser von 42 mm.
 * Der Bleimantel ist 4 mm dick. Der Widerstand des Bleimantel
 * zwischen den Kabelenden beträgt 80 mohm.
 * Wie lang ist das Kabel ?
 * @author Dieter Krause
 * @date 26/07/2023
 * @param {*} input
 */
function Uebung16(input) {
  const jsonfile = path.resolve("src/json/example/uebung16.json");

  const W1 = new Kabel({
    Material: "Blei",
    D: "42 mm",
    d: "4 mm",
    R: "80 mohm",
    x: 50,
    y: 50,
  });

  W1.Kennzeichnung.Art = "W";
  W1.Kennzeichnung.Zählnummer = "1";

  W1.Parameter.ρM = readMaterialParameter(
    W1.Parameter.Material,
    "ρ"
  ).toString();

  const AK = new ArithmetikKernel();
  const PK = new PlanemetrieKernel();
  const EK = new ElektroKernel();

  AK.parameter({ a: W1.Parameter.d, b: 2 });
  W1.Parameter.d2 = AK.mul().toString();

  AK.parameter({ a: W1.Parameter.D, b: W1.Parameter.d2 });
  W1.Parameter.di = AK.sub().toString();

  PK.parameter({ D: W1.Parameter.D, d: W1.Parameter.di });
  W1.Parameter.A = PK.KRADd().toString();

  EK.parameter({ ρ: W1.Parameter.ρM, A: W1.Parameter.A, R: W1.Parameter.R });
  W1.Parameter.lbm = EK.lρra().toString();

  dbJson.writeJSONItem(jsonfile, W1);
}
// let input = {
//   Material: 'Blei',
//   D: '42 mm',
//   d: '4 mm',
//   R: '80 mohm'
// }
// Uebung16(input)
exports.func = uebung16;
