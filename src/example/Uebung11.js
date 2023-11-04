require("use-strict");
const path = require("path");
const dbJson = require(path.resolve("controllers/dbJson"));

const { ElektroKernel, ArithmetikKernel, Freileitung } = require(path.resolve(
  "include/system"
));

const { readMaterialParameter } = require(path.resolve(
  "src/js/readMaterialParameter.js"
));

/**
 * @description
 * Eine zweidrähtige Aluminiumfreileitung von 17 km Länge hat einen Querschnitt von 25 mm².
 * Wie groß ist der Widerstand?
 *
 * @author Dieter Krause
 * @date 29/07/2023
 * @param {*} input
 */
function Uebung11(input) {
  const jsonfile = path.resolve("src/json/example/uebung11.json");

  let W1 = new Freileitung({
    Material: "Aluminium",
    A: "25 mm^2",
    l: "17 km",
    n: "2",
  });

  W1.Kennzeichnung.Art = "W";
  W1.Kennzeichnung.Zählnummer = "1";

  W1.Parameter.ρM = readMaterialParameter(
    W1.Parameter.Material,
    "ρ"
  ).toString();

  const AK = new ArithmetikKernel();
  const EK = new ElektroKernel();

  AK.parameter({ a: W1.Parameter.l, b: W1.Parameter.n });
  W1.Parameter.lges = AK.mul().toString();

  EK.parameter({ ρ: W1.Parameter.ρM, A: W1.Parameter.A, l: W1.Parameter.lges });

  W1.Parameter.Rfl = EK.RρlA().toString();

  dbJson.writeJSONItem(jsonfile, W1);
}
// let input = {
//   Material: 'Aluminium',
//   A: '25 mm^2',
//   l: '17 km',
//   n: '2'
// }
// Uebung11(input)
exports.func = Uebung11;
