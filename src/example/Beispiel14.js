require("use-strict");
/**
 * @function Beispiel14
 *
 * Eine zweiadrige Aluminiumleitung verbindet ein Gleichstromnetz von 230V Netzspannung mit einem
 * 800 m entfernt liegenden Verbraucher. Die Leitung wird mit einem Strom I = 11A belastet.
 * Wie groß muß der erforderliche Querschnitt sein, wenn der Spannungsverlust längs der Leitung
 * maximal 5% der Netzspannung betragen darf ?
 *
 * @param {*} input 
 */
async function Beispiel14(input) {
  const path = require("path");
  const dbJson = require(path.resolve("controllers/dbJson.js"));
  const { makeDirectory } = require(path.resolve("src/js/makeDirectory.js"));
  const { readMaterialParameter } = require(path.resolve("src/js/readMaterialParameter.js"));

  const { Elektro } = require(path.resolve("src/Kernel/Elektro.js"));
  const { Arithmetik } = require(path.resolve("src/Kernel/Arithmetik.js"));

  const { Gleichstromnetz } = require(path.resolve("src/ElektrischeAnlagen/Verteilungssysteme/Verteilungssysteme.js"));
  const { FesteLegung } = require(path.resolve("src/components/Betriebsmittel.js"));
  const { Verbraucher } = require(path.resolve("src/components/Betriebsmittel.js"));

  const datadir = "src/json/example/Beispiel14";

  makeDirectory(datadir).then(
    function () {
      const N1 = new Gleichstromnetz({ U: input.U });
      N1.Kennzeichnung.Art = "N";
      N1.Kennzeichnung.Zählnummer = "1";

      const W1 = new FesteLegung({ a: input.a, Material: input.Material, l: input.l, p: input.p }); // Leitung
      W1.Kennzeichnung.Art = "W";
      W1.Kennzeichnung.Zählnummer = "1";
      
      W1.Parameter.ρal = readMaterialParameter(W1.Parameter.Material, "ρ");

      const V1 = new Verbraucher({ I: input.I });
      V1.Kennzeichnung.Art = "V";
      V1.Kennzeichnung.Zählnummer = "1";

      const AK = new Arithmetik();
      const EK = new Elektro();

      AK.parameter({ G: N1.Parameter.U, p: W1.Parameter.p });
      W1.Berechnung.prozentwert = AK.Prozentwert();

      AK.parameter({ a: W1.Parameter.a, b: W1.Parameter.l });
      W1.Berechnung.lg = AK.mul().to("m");

      EK.parameter({
        ρ: W1.Parameter.ρal,
        I: V1.Parameter.I,
        l: W1.Berechnung.lg.toString(),
        U: W1.Berechnung.prozentwert.toString(),
      });
      W1.Berechnung.A = EK.AρlUI().to("mm^2");

      // mehrere Elemente im json array
      dbJson.writeJSONItem(path.resolve(`${datadir}/data.json`), N1); // [0]
      dbJson.appendJSONItem(path.resolve(`${datadir}/data.json`), W1); //  [1]
      dbJson.appendJSONItem(path.resolve(`${datadir}/data.json`), V1); // [2]
    },
    function () {
      console.error(`${datadir}`);
    }
  );
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
