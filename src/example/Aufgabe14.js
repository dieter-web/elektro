require("use-strict");

/**
 * @description
 * Auf eine Spule sind 870 m Cu-Draht gewickelt. Wie groß ist die Stromdichte
 * im Wickeldraht, wenn an die Spule eine Spannung von 24 V Gleichspannung angelegt wird ?
 * Angaben in A/mm²!
 * @author Dieter Krause
 * @date 21/07/2023
 * @param {*} input
 */
async function Aufgabe14(input) {
  const path = require("path");
  const dbJson = require(path.resolve("controllers/dbJson.js"));
  const { readMaterialParameter, makeDirectory } = require(path.resolve("src/js/utility.js"));
  const { Elektro } = require(path.resolve("src/mathjs/Kernel.js"));
  const { Spule } = require(path.resolve("src/components/Betriebsmittel.js"));

  const L1 = new Spule({ Material: input.Material, l: input.l });
  const EK = new Elektro();
  const datadir = "src/json/example/Aufgabe14";

  makeDirectory(datadir).then(
    function () {
      L1.Kennzeichnung = {
        Art: "L",
        Zählnummer: "1",
      };

      L1.Parameter.U = input.U;
      L1.Parameter.ρcu = readMaterialParameter(input.Material, "ρ");

      EK.parameter({
        ρ: L1.Parameter.ρcu,
        l: L1.Eigenschaften.l,
        U: L1.Parameter.U,
      });
      L1.Berechnung.S = EK.SUρl().to("A/mm^2");

      dbJson.writeJSONItem(path.resolve(`${datadir}/data.json`), L1);
    },
    function () {
      console.error(`${datadir}`);
    }
  );
}
// let input = {
//   Material: "Kupfer",
//   l: "870 m",
//   U: "24 V",
// };
// Aufgabe14(input);
exports.func = Aufgabe14;
