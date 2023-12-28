require("use-strict");

/**
 * @description
 * Ein Drehspulspannungsmesser hat einen Meßbereich von 300 mV.
 * Das rechteckige Spulenrähmchen der Drehspule hat die Seitenlängen 2 cm und 1 cmm
 * und ist mit 200 Windungen Kupferdraht von 0.03 mm  Durchmesser einlagig bewickelt.
 * Wie groß ist der Strom, der durch das Meßgerät bei Endausschlag fließt ?
 * @author Dieter Krause
 * @date 25/07/2023
 * @param {*} input
 */
function Uebung15(input) {
  const path = require("path");
  const {
    makeDirectory
  } = require(path.resolve("src/js/makeDirectory.js"));
  const dbJson = require(path.resolve("controllers/dbJson"));
  const {
    ArithmetikKernel,
    PlanemetrieKernel,
    ElektroKernel,
    Spannungsmesser
  } = require(path.resolve("include/system"));
  const {
    readMaterialParameter
  } = require(path.resolve("src/js/readMaterialParameter.js"));
  const P1 = new Spannungsmesser({
    Material: "Kupfer",
    Ug: "300 mV",
    l: "2 cm",
    b: "1 cm",
    N: 200,
    d: "0.03 mm",
    x: 50,
    y: 50
  });
  const PK = new PlanemetrieKernel();
  const AK = new ArithmetikKernel();
  const EK = new ElektroKernel();
  const datadir = "src/json/example/Uebung15";
  makeDirectory(datadir).then(function () {
    P1.Parameter.ρM = readMaterialParameter(P1.Parameter.Material, "ρ").toString();
    PK.parameter({
      g: P1.Parameter.l,
      h: P1.Parameter.b
    });
    P1.Parameter.Ur = PK.RUgh().toString();
    PK.parameter({
      d: P1.Parameter.d
    });
    P1.Parameter.Ad = PK.KAd().toString();
    AK.parameter({
      a: P1.Parameter.Ur,
      b: P1.Parameter.N
    });
    P1.Parameter.ld = AK.mul().toString();
    EK.parameter({
      ρ: P1.Parameter.ρM,
      l: P1.Parameter.ld,
      A: P1.Parameter.Ad,
      U: P1.Parameter.Ug
    });
    P1.Parameter.Ie = EK.IρAlU().toString();
    dbJson.writeJSONItem(path.resolve(`${datadir}/P1.json`), P1);
  }, function () {
    console.error(`${datadir}`);
  });
}
// let input = {
//   Material: "Kupfer",
//   Ug: "300 mV",
//   l: "2 cm",
//   b: "1 cm",
//   N: 200,
//   d: "0.03 mm",
// };
// Uebung15(input);
exports.func = Uebung15;