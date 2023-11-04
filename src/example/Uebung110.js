require("use-strict");
const path = require("path");
const dbJson = require(path.resolve("controllers/dbJson.js"));

const { ElektroKernel, ArithmetikKernel, Kabel } = require(path.resolve(
  "include/system"
));

const { readMaterialParameter } = require(path.resolve(
  "src/js/readMaterialParameter.js"
));

const { readKonstante } = require(path.resolve("src/js/readKonstante.js"));

/**
 * @description
 * An die Kupferadern eines zweiadrigen, zwischen den Orten A und B im Erdreich verlegten Kabels
 * wird in A eine Spannung von 24 V angelegt. Am Ort B werden die Adern kurzgeschlossen.
 *  Die Stromdichte ist bei einer Temperatur von 20°C 50 mA/mm² groß. Wie lang ist das Kabel ?
 *
 * Bei einer späteren Messung am gleichen Kabel ist infolge Temperaturänderung die Stromdichte
 * um 10% gestiegen.
 * Welche Temperatur hat das Kabel bei dieser Messung ?
 * @author Dieter Krause
 * @date 26/07/2023
 * @param {*} input
 */
function Uebung110(input) {
  const jsonfile = path.resolve("src/json/example/uebung110.json");

  const W1 = new Kabel({
    Material: "Kupfer",
    n: 2,
    U: "24 V",
    S: "50 mA/mm^2",
    p: 10, // Prozentsatz
    x: 50,
    y: 50,
  });

  W1.Kennzeichnung.Art = "W";
  W1.Kennzeichnung.Zählnummer = "1";

  W1.Parameter.κM = readMaterialParameter(
    W1.Parameter.Material,
    "κ"
  ).toString();
  W1.Parameter.α20M = readMaterialParameter(
    W1.Parameter.Material,
    "α20"
  ).toString();
  W1.Parameter.δ20 = readKonstante("Vergleichstemperatur").toString();

  const AK = new ArithmetikKernel();
  const EK = new ElektroKernel();

  EK.parameter({ U: W1.Parameter.U, κ: W1.Parameter.κM, S: W1.Parameter.S });
  W1.Parameter.ld = EK.lκus().toString();

  AK.parameter({ a: W1.Parameter.ld, b: W1.Parameter.n });
  W1.Parameter.lk = AK.div().toString();

  // Berechnung der Stromdichte S2
  AK.parameter({ G: W1.Parameter.S, p: W1.Parameter.p });
  W1.Parameter.S2 = AK.Prozentwert().toString();

  AK.parameter({ G: W1.Parameter.S, p: W1.Parameter.S2 });
  W1.Parameter.S1 = AK.Grundwertp().toString();

  EK.parameter({ U: W1.Parameter.U, S: W1.Parameter.S1, l: W1.Parameter.ld });
  W1.Parameter.κ1M = EK.κlsu().toString();

  EK.parameter({
    α20: W1.Parameter.α20M,
    κ: W1.Parameter.κM,
    κ1: W1.Parameter.κ1M,
  });
  W1.Parameter.Δδ = EK.Δδκ().toString();

  AK.parameter({ a: W1.Parameter.δ20, b: W1.Parameter.Δδ });
  W1.Parameter.δ2 = AK.add().toString();

  dbJson.writeJSONItem(jsonfile.W1);
}
// let input = {
//   Material: 'Kupfer',
//   n: 2,
//   U: '24 V',
//   S: '50 mA/mm^2',
//   p: 10 // Prozentsatz
// }
// Uebung110(input)
exports.func = Uebung110;
