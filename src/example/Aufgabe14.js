require("use-strict");

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
  const path = require("path");
  const dbJson = require(path.resolve("controllers/dbJson.js"));
  const { makeDirectory } = require(path.resolve("src/js/makeDirectory.js"));

  const { ElektroKernel, MehrlagigeSpule } = require(path.resolve(
    "include/system"
  ));
  const Kennzeichnung = dbJson.readJSONFile(
    path.resolve("src/json/Sonstiges/kennzeichnung.json")
  );
  const { readMaterialParameter } = require(path.resolve(
    "src/js/readMaterialParameter.js"
  ));

  const L1 = new MehrlagigeSpule(input);
  const EK = new ElektroKernel();

  const datadir = "src/json/example/Aufgabe14";

  makeDirectory(datadir).then(
    function () {
      L1.Kennzeichnung.Art = "L";
      L1.Kennzeichnung.Zählnummer = "1";
      L1.Parameter.ρcu = readMaterialParameter(input.Material, "ρ").toString();

      EK.parameter({
        ρ: L1.Parameter.ρcu,
        l: L1.Parameter.l,
        U: L1.Parameter.U,
      });
      L1.Parameter.S = EK.SUρl().toString();

      dbJson.writeJSONItem(path.resolve(`${datadir}/L1.json`), L1);
    },
    function () {
      console.error(`${datadir}`);
    }
  );
}
// let input = {
//   Material: "Kupfer",
//   l: "870 m",
//   U: "24 V",
// };
// Aufgabe14(input);
exports.func = Aufgabe14;
