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
  const dbJson = require(path.resolve("controllers/dbJson.js"));
  const { readMaterialParameter, makeDirectory } = require(path.resolve("src/js/utility.js"));
  const { Elektro, Planemetrie, Arithmetik } = require(path.resolve("src/mathjs/Kernel.js"));
  const { Spulenkoerper, Spule } = require(path.resolve("src/components/Betriebsmittel.js"));

  const EK = new Elektro();
  const PK = new Planemetrie();
  const AK = new Arithmetik();

  const LK1 = new Spulenkoerper({ lm: input.lm });
  const L1 = new Spule({ Material: input.Material, N: input.N, d: input.d });
  const datadir = "src/json/example/Aufgabe13";

  makeDirectory(datadir).then(
    function () {
      LK1.Kennzeichnung = {
        Art: "Spulenkörper",
        Zählnummer: 1,
      };
      L1.Kennzeichnung = {
        Art: "L",
        Zählnummer: 1,
      };

      L1.Parameter.ρM = readMaterialParameter(L1.Eigenschaften.Material, "ρ");

      AK.parameter({ a: LK1.Eigenschaften.lm, b: L1.Eigenschaften.N });
      L1.Berechnung.lg = AK.mul().to("m");

      PK.parameter({ d: L1.Eigenschaften.d });
      L1.Berechnung.Al = PK.KAd();

      EK.parameter({
        l: L1.Berechnung.lg.toString(),
        A: L1.Berechnung.Al.toString(),
        ρ: L1.Parameter.ρM,
      });

      L1.Berechnung.G = EK.GAρl().to("mS");

      dbJson.writeJSONItem(path.resolve(`${datadir}/data.json`), L1);
      dbJson.appendJSONItem(path.resolve(`${datadir}/data.json`), LK1);
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
