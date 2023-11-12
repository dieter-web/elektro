require("use-strict");
const path = require("path");
const dbJson = require(path.resolve("controllers/dbJson"));

const { ElektroKernel, ArithmetikKernel, Spule } = require(path.resolve(
  "include/system"
));

const { readMaterialParameter } = require(path.resolve(
  "src/js/readMaterialParameter.js"
));

/**
 * @description
 * Der ohmische Widerstand einer Spule, die aus Kupferdraht gewickelt
 * ist, beträgt bei  12°C 45 Ohm.
 * Nach einer längeren Betriebsdauer ist der Spulenwiderstand um 28%
 * seines  Anfangswerts gestiegen. Wie groß ist die Betriebstemperatur ?
 * @author Dieter Krause
 * @date 25/07/2023
 * @param {*} input
 */
function Beispiel18(input) {
  const jsonfile = path.resolve("src/json/example/beispiel18.json");

  const L1 = new Spule({
    Material: "Kupfer",
    δ: "12 celsius",
    R: "45 ohm",
    p: 28,
    x: 50,
    y: 50,
  });

  L1.Parameter.ρM = readMaterialParameter(
    L1.Parameter.Material,
    "ρ"
  ).toString();

  L1.Parameter.δ0M = readMaterialParameter(
    L1.Parameter.Material,
    "δ0"
  ).toString();

  const EK = new ElektroKernel();
  const AK = new ArithmetikKernel();

  AK.parameter({ G: L1.Parameter.R, p: L1.Parameter.p });
  L1.Parameter.Prozentwert = AK.Prozentwert().toString();

  AK.parameter({ a: L1.Parameter.R, b: L1.Parameter.Prozentwert });
  L1.Parameter.R2 = AK.add().toString();

  EK.parameter({
    δ0: L1.Parameter.δ0M,
    R: L1.Parameter.R,
    Rδ2: L1.Parameter.R2,
    δ1: L1.Parameter.δ,
  });

  L1.Parameter.δ2 = EK.δ2().toString();

  dbJson.writeJSONItem(jsonfile, L1);
}
let input = {
  Material: "Kupfer",
  δ: "12 celsius",
  R: "45 ohm",
  p: 28,
};
Beispiel18(input);
// exports.func = Beispiel18;
