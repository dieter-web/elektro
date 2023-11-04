require("use-strict");
const path = require("path");
const dbJson = require(path.resolve("controllers/dbJson.js"));

const { ElektroKernel, PlanemetrieKernel, Erder } = require(path.resolve(
  "include/system"
));

/**
 * @description
 * Welchen Widerstand hat eine 0.9mm dicke und 3km lange Kupferleitung von rundem Querschnitt,
 * die im Erdreich verlegt ist ? Die Umgebungstemperatur beträgt -2°C . (Erder)
 * @author Dieter Krause
 * @date 27/07/2023
 * @param {*} input
 */
function Aufgabe15(input) {
  const jsonfile = path.resolve("src/json/example/aufgabe15.json");
  const Kennzeichnung = dbJson.readJSONFile(
    path.resolve("src/json/Sonstiges/Sonstiges/kennzeichnung.json")
  );

  const { readMaterialParameter } = require(path.resolve(
    "src/js/readMaterialParameter.js"
  ));
  const { readKonstante } = require(path.resolve("src/js/readKonstante.js"));

  let W1 = new Erder({
    Material: input.Material,
    d: input.d,
    l: input.l,
    δ2: input.δ2,

    x: 50,
    y: 50,
  });

  W1.Kennzeichnung.Art = "W";
  W1.Kennzeichnung.Zählnummer = "1";

  // Zusätzliche notwendige Parameter
  W1.Parameter.ρm = readMaterialParameter(input.Material, "ρ").toString();
  W1.Parameter.α20 = readMaterialParameter(input.Material, "α20").toString();
  W1.Parameter.δ20 = readKonstante("Vergleichstemperatur").toString();

  // Aktualisierung der Kennzeichnung

  W1.vis.width = "300";
  W1.vis.height = "5";
  W1.vis.name = `${W1.Kennzeichnung.Art}${W1.Kennzeichnung.Zählnummer}`;
  W1.vis.value = `${W1.Parameter.Material}${W1.Parameter.d}${W1.Parameter.l}`;

  const PK = new PlanemetrieKernel();
  const EK = new ElektroKernel();

  PK.parameter({ d: W1.Parameter.d });
  W1.Parameter.A = PK.KAd().toString();

  EK.parameter({ l: W1.Parameter.l, A: W1.Parameter.A, ρ: W1.Parameter.ρm });
  W1.Parameter.R20 = EK.RρlA().toString();

  EK.parameter({
    R20: W1.Parameter.R20,
    α20: W1.Parameter.α20,
    δ2: W1.Parameter.δ2,
    δ20: W1.Parameter.δ20,
  });
  EK.parameter.R2 = EK.Rδ().toString();

  dbJson.writeJSONItem(jsonfile, W1);
}
// let input = {
//   Material: "Kupfer",
//   d: "0.9 mm",
//   l: "3 km",
//   δ2: "-2 celsius",
// };
// Aufgabe15(input);
exports.func = Aufgabe15;
