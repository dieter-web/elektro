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
  const { makeDirectory } = require(path.resolve("src/js/makeDirectory.js"));
  const dbJson = require(path.resolve("controllers/dbJson.js"));

  const {
    ElektroKernel,
    ArithmetikKernel,
    PlanemetrieKernel,
    MehrlagigeSpule,
  } = require(path.resolve("include/system"));

  const { readMaterialParameter } = require(path.resolve(
    "src/js/readMaterialParameter.js"
  ));

  const L1 = new MehrlagigeSpule(input);
  //   {
  //   Material: input.Material,
  //   lm: input.lm,
  //   N: input.N,
  //   d: input.d,
  //   x: 50,
  //   y: 50,
  // });

  const AK = new ArithmetikKernel();
  const PK = new PlanemetrieKernel();
  const EK = new ElektroKernel();

  const datadir = "src/json/example/Aufgabe13";

  makeDirectory(datadir).then(
    function () {
      L1.Kennzeichnung.Art = "L";
      L1.Kennzeichnung.Zählnummer = "1";

      L1.Parameter.ρM = readMaterialParameter(
        L1.Parameter.Material,
        "ρ"
      ).toString();

      AK.parameter({ a: L1.Parameter.lm, b: L1.Parameter.N });
      L1.Parameter.lg = AK.mul().toString();

      PK.parameter({ d: L1.Parameter.d });
      L1.Parameter.Al = PK.KAd().toString();

      EK.parameter({
        l: L1.Parameter.lg,
        A: L1.Parameter.Al,
        ρ: L1.Parameter.ρM,
      });

      L1.Parameter.G = EK.GAρl().toString();

      dbJson.writeJSONItem(path.resolve(`${datadir}/data.json`), L1);
    },
    function () {
      console.error(`${datadir}`);
    }
  );
}
// let input = {
//   Material: "Aluminium",
//   lm: "4.35 cm",
//   N: 680,
//   d: "0.4 mm",
// };
// Aufgabe13(input);
exports.func = Aufgabe13;
