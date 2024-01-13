require("use-strict");
async function Uebung17(input) {
  const path = require("path");
  const dbJson = require(path.resolve("controllers/dbJson"));
  const {
    makeDirectory
  } = require(path.resolve("src/js/makeDirectory.js"));
  const {
    Elektro,
    Transformator
  } = require(path.resolve("include/system"));
  const {
    readMaterialParameter
  } = require(path.resolve("src/js/readMaterialParameter.js"));
  const {
    readKonstante
  } = require(path.resolve("src/js/readKonstante.js"));
  const T1 = new Transformator({
    Material: "Kupfer",
    R1: "560 ohm",
    R2: "604 ohm",
    x: 50,
    y: 50
  });
  const EK = new Elektro();
  const datadir = "src/json/example/Uebung17";
  makeDirectory(datadir).then(function () {
    T1.Kennzeichnung.Art = "T";
    T1.Kennzeichnung.Zählnummer = "1";
    T1.Parameter.ρM = readMaterialParameter(T1.Parameter.Material, "ρ").toString();
    T1.Parameter.δ0M = readMaterialParameter(T1.Parameter.Material, "δ0").toString();
    T1.Parameter.δ20 = readKonstante("Vergleichstemperatur").toString();
    EK.parameter({
      Rδ2: T1.Parameter.R2,
      R: T1.Parameter.R1,
      δ0: T1.Parameter.δ0M,
      δ1: T1.Parameter.δ20
    });
    T1.Parameter.δ2 = EK.δ2().toString();
    dbJson.writeJSONItem(path.resolve(`${datadir}/data.json`), T1);
  }, function () {
    console.error(`${datadir}`);
  });
}
// let input = {
//   Material: 'Kupfer',
//   R1: '560 ohm',
//   R2: '604 ohm'
// }
// Uebung17(input)
exports.func = Uebung17;