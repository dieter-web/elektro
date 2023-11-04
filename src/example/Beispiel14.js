require("use-strict");
const path = require("path");

const { ElektroKernel, ArithmetikKernel, Leitung } = require(path.resolve(
  "include/system"
));

const { readMaterialParameter } = require(path.resolve(
  "src/js/readMaterialParameter.js"
));

const dbJson = require(path.resolve("controllers/dbJson.js"));

/**
 * @function Beispiel14
 *
 * Eine zweiadrige Aluminiumleitung verbindet ein Gleichstromnetz von 230V Netzspannung mit einem
 * 800 m entfernt liegenden Verbraucher. Die Leitung wird mit einem Strom I = 11A belastet.
 * Wie groß muß der erforderliche Querschnitt sein, wenn der Spannungsverlust längs der Leitung
 * maximal 5% der Netzspannung betragen darf ?
 *
 * @param {string} Material - Material
 * @param {math.Unit} U - Netzspannung
 * @param {numeric} p - max. zulässiger prozendualer Spannungsabfall
 * @param {math.Unit} l - Länge der Leitung
 * @param {numeric} a - Anzahl der Adern der Leitung
 * @param {math.Unit} I - Stromstärke
 * @returns {string} A - Querschnitt der Leitung
 */
function Beispiel14(input) {
  const jsonfile = path.resolve("src/json/example/beispiel14.json");

  // const Kennzeichnung = dbJson.readJSONFile(
  //   path.resolve("src/json/Uebertragungswege/Leitungen/Bezeichnung.json")
  // );

  const W1 = new Leitung({
    // Parameter
    Material: input.Material,
    U: input.U,
    p: input.p,
    l: input.l,
    a: input.a,
    I: input.I,

    // grafische Position
    x: 50,
    y: 50,
  });

  W1.Parameter.ρal = readMaterialParameter(
    W1.Parameter.Material,
    "ρ"
  ).toString();

  const AK = new ArithmetikKernel();
  const EK = new ElektroKernel();

  AK.parameter({ G: W1.Parameter.U, p: W1.Parameter.p });
  W1.Parameter.prozentwert = AK.Prozentwert().toString();

  AK.parameter({ a: W1.Parameter.a, b: W1.Parameter.l });
  W1.Parameter.lg = AK.mul().toString();

  EK.parameter({
    ρ: W1.Parameter.ρal,
    l: W1.Parameter.lg,
    U: W1.Parameter.prozentwert,
    I: W1.Parameter.I,
  });
  W1.Parameter.A = EK.AρlUI().toString();

  dbJson.writeJSONItem(jsonfile, W1);
}
// let input = {
//   p: "5", //  ArithmetikKernel
//   a: "2",
//   Material: "Aluminium", // ElektroKernel
//   U: "230 V",
//   l: "800 m",
//   I: "11 A",
// };
// Beispiel14(input);
exports.func = Beispiel14;
