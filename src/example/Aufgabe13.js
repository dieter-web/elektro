require("use-strict");
const path = require("path");
const dbJson = require(path.resolve("controllers/dbJson.js"));

const {
  ElektroKernel,
  ArithmetikKernel,
  PlanemetrieKernel,
  MehrlagigeSpule,
} = require(path.resolve("include/system"));

/**
 * @description
 *  Auf einem Spulenkörper mit einer mittleren Windungslänge lm = 4.35 cm sind 680
 * Windungen Aluminiumdraht von  0.4 mm Durchmesser gewickelt. Wie groß ist der
 * Leitwert der Spule ?
 *
 * @author Dieter Krause
 * @date 20/07/2023
 * @param {*} input
 */
function Aufgabe13(input) {
  const jsonfile = path.resolve("src/json/example/aufgabe13.json");

  const { readMaterialParameter } = require(path.resolve(
    "src/js/readMaterialParameter.js"
  ));

  const L1 = new MehrlagigeSpule(input);

  // Ergänzung Kennzeichnung
  L1.Kennzeichnung.Art = "L";
  L1.Kennzeichnung.Zählnummer = "1";

  // Ergänzung Visualisierung
  //TODO: falsche Element gewählt, sollte Spule sein und nicht MehrlagigeSpule !!
  L1.visMehrlagigeSpule.name = `${L1.Kennzeichnung.Art}${L1.Kennzeichnung.Zählnummer}`;

  // Parameter von L1 ergänzen

  L1.Parameter.ρM = readMaterialParameter(
    L1.Parameter.Material,
    "ρ"
  ).toString();

  const AK = new ArithmetikKernel();
  const PK = new PlanemetrieKernel();
  const EK = new ElektroKernel();

  AK.parameter({ a: L1.Parameter.lm, b: L1.Parameter.N });
  L1.Parameter.lg = AK.mul().toString();

  PK.parameter({ d: L1.Parameter.d });
  L1.Parameter.Al = PK.KAd().toString();

  EK.parameter({
    l: L1.Parameter.lg,
    A: L1.Parameter.Al,
    ρ: L1.Parameter.ρM,
  });

  L1.Parameter.G = EK.GAρl().toString();

  dbJson.writeJSONItem(jsonfile, L1);
}
// let input = {
//   Material: "Aluminium",
//   lm: "4.35 cm",
//   N: 680,
//   d: "0.4 mm",
// };
// Aufgabe13(input);
exports.func = Aufgabe13;
