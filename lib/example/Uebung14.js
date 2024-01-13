require("use-strict");

/** TODO: Das Ergebnis stimmt mit der Vorlage nicht überein ? */
/**
 * @description
 * @author Dieter Krause
 * @date 26/07/2023
 * @param {*} input
 */
function Uebung14(input) {
  const path = require("path");
  const {
    makeDirectory
  } = require(path.resolve("src/js/makeDirectory.js"));
  const dbJson = require(path.resolve("controllers/dbJson.js"));
  const {
    Elektro,
    Planemetrie,
    Glasplatte
  } = require(path.resolve("include/system"));
  const {
    readMaterialParameter
  } = require(path.resolve("src/js/readMaterialParameter.js"));
  const P1 = new Glasplatte({
    Material: "Glas",
    l: "0.8 m",
    b: "1.25 m",
    d: "1 mm"
  });
  const PK = new Planemetrie();
  const EK = new Elektro();
  const datadir = "src/json/example/Uebung14";
  makeDirectory(datadir).then(function () {
    P1.Kennzeichnung.Art = "E";
    P1.Kennzeichnung.Zählnummer = "1";
    P1.Parameter.ρgl = readMaterialParameter(P1.Parameter.Material, "ρ").toString();
    PK.parameter({
      g: P1.Parameter.l,
      h: P1.Parameter.b
    });
    P1.Parameter.Ap = PK.RAgh().toString();
    EK.parameter({
      ρ: P1.Parameter.ρgl,
      l: P1.Parameter.d,
      A: P1.Parameter.Ap
    });
    P1.Parameter.R = EK.RρlA().toString();
    dbJson.writeJSONItem(path.resolve(`$datadir` / data.json), P1);
  }, function () {
    console.error(`${datadir}`);
  });
}

// let input = {
//   Material: 'Glas',
//   l: '0.8 m',
//   b: '1.25 m',
//   d: '1 mm'
// }
// Uebung14(input)

exports.func = Uebung14;