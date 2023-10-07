require("use-strict");
const path = require("path");
const dbJson = require(path.resolve("controllers/dbJson.js"));

const { ElektroKernel, MehrlagigeSpule } = require(path.resolve(
  "include/system"
));

/**
 * @description
 * Auf eine Spule sind 870 m Cu-Draht gewickelt. Wie groß ist die Stromdichte
 * im Wickeldraht, wenn an die Spule eine Spannung von 24 V Gleichspannung angelegt wird ?
 * Angaben in A/mm²!
 * @author Dieter Krause
 * @date 21/07/2023
 * @param {*} input
 */
function Aufgabe14(input) {
  const jsonfile = path.resolve("src/json/example/aufgabe14.json");
  const Kennzeichnung = dbJson.readJSONFile(
    path.resolve("src/json/kennzeichnung.json")
  );

  const { readMaterialParameter } = require(path.resolve(
    "src/js/readMaterialParameter.js"
  ));

  const Parameter = input;

  let L1 = new MehrlagigeSpule(Parameter);
  // notwendige Externe Parameter
  L1.Parameter.ρcu = readMaterialParameter(input.Material, "ρ").toString();

  // Aktualisierung Kennzeichnung
  L1.Kennzeichnung.Art = "L";
  L1.Kennzeichnung.Zählnummer = "1";
  L1.visMehrlagigeSpule.name = `${L1.Kennzeichnung.Art}${L1.Kennzeichnung.Zählnummer}`;

  const EK = new ElektroKernel();
  EK.parameter({ ρ: L1.Parameter.ρcu, l: L1.Parameter.l, U: L1.Parameter.U });
  L1.Parameter.S = EK.SUρl().toString();

  dbJson.writeJSONItem(jsonfile, L1);
}
// let input = {
//   Material: "Kupfer",
//   l: "870 m",
//   U: "24 V",
// };
// Aufgabe14(input);
exports.func = Aufgabe14;
