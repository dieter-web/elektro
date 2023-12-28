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
  const { makeDirectory } = require(path.resolve("src/js/makeDirectory.js"));
  const dbJson = require(path.resolve("controllers/dbJson"));

  const {
    ElektroKernel,
    ArithmetikKernel,
    PlanemetrieKernel,
    Freileitung,
  } = require(path.resolve("include/system"));

  const { readMaterialParameter } = require(path.resolve(
    "src/js/readMaterialParameter.js"
  ));

  const W1 = new Freileitung(input);
  const AK = new ArithmetikKernel();
  const PK = new PlanemetrieKernel();
  const EK = new ElektroKernel();

  const datadir = "src/json/example/Uebung11";
  makeDirectory(datadir).then(
    function () {
      W1.Kennzeichnung.Art = "W";
      W1.Kennzeichnung.Zählnummer = "1";

      W1.Parameter.ρM = readMaterialParameter(
        W1.Parameter.Material,
        "ρ"
      ).toString();

      PK.parameter({ A: W1.Parameter.A });
      W1.Parameter.d = PK.KdA().toString();

      // regulare Expression für die Herausfilterung des Zahlenwertes
      // W1.vis.height = W1.Parameter.d;
      // W1.vis.width = W1.Parameter.l;
      // W1.vis.height = 5.641;
      // W1.vis.width = 170;

      AK.parameter({ a: W1.Parameter.l, b: W1.Parameter.n });
      W1.Parameter.lges = AK.mul().toString();

      EK.parameter({
        ρ: W1.Parameter.ρM,
        A: W1.Parameter.A,
        l: W1.Parameter.lges,
      });

      W1.Parameter.erg = EK.RρlA().toString();

      dbJson.writeJSONItem(path.resolve(`${datadir}/W1`), W1);
    },
    function () {
      console.error(`${datadir}`);
    }
  );
}

// let input = {
//   Material: "Aluminium",
//   A: "25 mm^2",
//   l: "17 km",
//   n: "2",
// };
// Uebung11(input);
exports.func = Uebung11;
