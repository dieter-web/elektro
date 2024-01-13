require("use-strict");
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
async function Aufgabe13(input) {
  const path = require("path");
  const {
    makeDirectory
  } = require(path.resolve("src/js/makeDirectory.js"));
  const dbJson = require(path.resolve("controllers/dbJson.js"));
  const {
    Elektro,
    Arithmetik,
    Planemetrie,
    MehrlagigeSpule
  } = require(path.resolve("include/system"));
  const {
    readMaterialParameter
  } = require(path.resolve("src/js/readMaterialParameter.js"));
  const L1 = new MehrlagigeSpule(input);
  const AK = new Arithmetik();
  const PK = new Planemetrie();
  const EK = new Elektro();
  const datadir = "src/json/example/Aufgabe13";
  makeDirectory(datadir).then(function () {
    L1.Kennzeichnung.Art = "L";
    L1.Kennzeichnung.Zählnummer = "1";
    L1.Parameter.ρM = readMaterialParameter(L1.Parameter.Material, "ρ").toString();
    AK.parameter({
      a: L1.Parameter.lm,
      b: L1.Parameter.N
    });
    L1.Berechnung["lg"] = AK.mul().to("m");
    PK.parameter({
      d: L1.Parameter.d
    });
    L1.Berechnung["Al"] = PK.KAd();
    EK.parameter({
      l: L1.Berechnung["lg"].toString(),
      A: L1.Berechnung["Al"].toString(),
      ρ: L1.Parameter.ρM
    });
    L1.Berechnung["G"] = EK.GAρl().to("mS");
    dbJson.writeJSONItem(path.resolve(`${datadir}/data.json`), L1);
  }, function () {
    console.error(`${datadir}`);
  });
}
// let input = {
//   Material: "Aluminium",
//   lm: "4.35 cm",
//   N: 680,
//   d: "0.4 mm",
// };
// Aufgabe13(input);
exports.func = Aufgabe13;