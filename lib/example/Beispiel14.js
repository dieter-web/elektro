require("use-strict");
/**
 * @function Beispiel14
 *
 * Eine zweiadrige Aluminiumleitung verbindet ein Gleichstromnetz von 230V Netzspannung mit einem
 * 800 m entfernt liegenden Verbraucher. Die Leitung wird mit einem Strom I = 11A belastet.
 * Wie groß muß der erforderliche Querschnitt sein, wenn der Spannungsverlust längs der Leitung
 * maximal 5% der Netzspannung betragen darf ?
 *
 * @param {string} Material - Material
 * @param {math.Unit} U - Netzspannung
 * @param {numeric} p - max. zulässiger prozendualer Spannungsabfall
 * @param {math.Unit} l - Länge der Leitung
 * @param {numeric} a - Anzahl der Adern der Leitung
 * @param {math.Unit} I - Stromstärke
 * @returns {string} A - Querschnitt der Leitung
 */
async function Beispiel14(input) {
  const path = require("path");
  const {
    makeDirectory
  } = require(path.resolve("src/js/makeDirectory.js"));
  const dbJson = require(path.resolve("controllers/dbJson.js"));
  const {
    Elektro,
    Arithmetik,
    FesteLegung
  } = require(path.resolve("include/system"));
  const {
    readMaterialParameter
  } = require(path.resolve("src/js/readMaterialParameter.js"));
  const W1 = new FesteLegung(input);
  const AK = new Arithmetik();
  const EK = new Elektro();
  const datadir = "src/json/example/Beispiel14";
  makeDirectory(datadir).then(function () {
    W1.Parameter.ρal = readMaterialParameter(W1.Parameter.Material, "ρ").toString();
    AK.parameter({
      G: W1.Parameter.U,
      p: W1.Parameter.p
    });
    W1.Berechnung.prozentwert = AK.Prozentwert();
    AK.parameter({
      a: W1.Parameter.a,
      b: W1.Parameter.l
    });
    W1.Berechnung.lg = AK.mul().to("m");
    EK.parameter({
      ρ: W1.Parameter.ρal,
      I: W1.Parameter.I,
      l: W1.Berechnung.lg.toString(),
      U: W1.Berechnung.prozentwert.toString()
    });
    W1.Berechnung.A = EK.AρlUI().to("mm^2");
    dbJson.writeJSONItem(path.resolve(`${datadir}/data.json`), W1);
  }, function () {
    console.error(`${datadir}`);
  });
}
// let input = {
//   p: "5", //  Arithmetik
//   a: "2",
//   Material: "Aluminium", // Elektro
//   U: "230 V",
//   l: "800 m",
//   I: "11 A",
// };
// Beispiel14(input);
exports.func = Beispiel14;