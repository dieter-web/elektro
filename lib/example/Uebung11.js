require("use-strict");
/**
 * @description
 * Eine zweidrähtige Aluminiumfreileitung von 17 km Länge hat einen Querschnitt von 25 mm².
 * Wie groß ist der Widerstand?
 *
 * @author Dieter Krause
 * @date 29/07/2023
 * @param {*} input
 */
async function Uebung11(input) {
  const path = require("path");
  const {
    makeDirectory
  } = require(path.resolve("src/js/makeDirectory.js"));
  const dbJson = require(path.resolve("controllers/dbJson"));
  const {
    Elektro,
    Arithmetik,
    Planemetrie,
    Freileitung
  } = require(path.resolve("include/system"));
  const {
    readMaterialParameter
  } = require(path.resolve("src/js/readMaterialParameter.js"));
  const W1 = new Freileitung(input);
  const AK = new Arithmetik();
  const PK = new Planemetrie();
  const EK = new Elektro();
  const datadir = "src/json/example/Uebung11";
  makeDirectory(datadir).then(function () {
    W1.Kennzeichnung.Art = "W";
    W1.Kennzeichnung.Zählnummer = "1";
    W1.Parameter.ρM = readMaterialParameter(W1.Parameter.Material, "ρ").toString();
    PK.parameter({
      A: W1.Parameter.A
    });
    W1.Berechnung.d = PK.KdA();
    AK.parameter({
      a: W1.Parameter.l,
      b: W1.Parameter.n
    });
    W1.Berechnung.lges = AK.mul();
    EK.parameter({
      ρ: W1.Parameter.ρM,
      A: W1.Parameter.A,
      l: W1.Berechnung.lges.toString()
    });
    W1.Berechnung.R = EK.RρlA().to("ohm");
    dbJson.writeJSONItem(path.resolve(`${datadir}/data.json`), W1);
  }, function () {
    console.error(`${datadir}`);
  });
}

// let input = {
//   Material: "Aluminium",
//   A: "25 mm^2",
//   l: "17 km",
//   n: "2",
// };
// Uebung11(input);
exports.func = Uebung11;