require("use-strict");
const path = require("path");
const { ElektroKernel, PlanemetrieKernel, Glasplatte } = require(path.resolve(
  "include/system"
));

const { readMaterialParameter } = require(path.resolve(
  "src/js/readMaterialParameter.js"
));

const dbJson = require(path.resolve("controllers/dbJson.js"));

/** TODO: Das Ergebnis stimmt mit der Vorlage nicht überein ? */
/**
 * @description
 * @author Dieter Krause
 * @date 26/07/2023
 * @param {*} input
 */
function Uebung14(input) {
  const jsonfile = path.resolve("src/json/example/uebung14.json");

  const P1 = new Glasplatte({
    Material: "Glas",
    l: "0.8 m",
    b: "1.25 m",
    d: "1 mm",
  });

  P1.Kennzeichnung.Art = "E";
  P1.Kennzeichnung.Zählnummer = "1";

  P1.Parameter.ρgl = readMaterialParameter(
    P1.Parameter.Material,
    "ρ"
  ).toString();

  const PK = new PlanemetrieKernel();
  const EK = new ElektroKernel();

  PK.parameter({ g: P1.Parameter.l, h: P1.Parameter.b });
  P1.Parameter.Ap = PK.RAgh().toString();

  EK.parameter({ ρ: P1.Parameter.ρgl, l: P1.Parameter.d, A: P1.Parameter.Ap });
  P1.Parameter.R = EK.RρlA().toString();

  dbJson.writeJSONItem(jsonfile, P1);
}

// let input = {
//   Material: 'Glas',
//   l: '0.8 m',
//   b: '1.25 m',
//   d: '1 mm'
// }
// Uebung14(input)

exports.func = Uebung14;
