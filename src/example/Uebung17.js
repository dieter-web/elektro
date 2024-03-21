require("use-strict");

/**
 * @description
 * Die Primärwicklung eines Transformators aus Kupferdraht hat bei 20°C einen Gleichstomwiderstand von 560 ohm.
 * Nach dreistündigen Betrieb beträgt der Widerstand 604 ohm. Wie hoch ist dann die Temperatur der Wicklung?
 * @author Dieter Krause
 * @date 17/01/2024
 * @param {*} input
 */
async function Uebung17(input) {
  const path = require("path");
  const dbJson = require(path.resolve("controllers/dbJson"));
  const { makeDirectory, readMaterialParameter, readKonstante } = require(path.resolve("src/js/utility.js"));
  const { Elektro } = require(path.resolve("src/mathjs/Kernel.js"));
  
  const { Transformator} = require(path.resolve("src/components/Betriebsmittel.js"));

  const T1 = new Transformator({
    Material: input.Material,
  });

  const EK = new Elektro();
  const datadir = "src/json/example/Uebung17";

  makeDirectory(datadir).then(
    function () {

      T1.Kennzeichnung = {
        Art : "T",
        Zählnummer : 1,
      };

      T1.Parameter = {
        ρM : readMaterialParameter(T1.Eigenschaften.Material, "ρ"),
        δ0M : readMaterialParameter(T1.Eigenschaften.Material, "δ0"),
        δ20 : readKonstante("Vergleichstemperatur"),
        R1: input.R1,
        R2: input.R2
      },

      EK.parameter({
        Rδ2: T1.Parameter.R2,
        R: T1.Parameter.R1,
        δ0: T1.Parameter.δ0M,
        δ1: T1.Parameter.δ20,
      });
      T1.Berechnung.δ2 = EK.δ2();

      dbJson.writeJSONItem(path.resolve(`${datadir}/data.json`), T1);
    },
    function () {
      console.error(`${datadir}`);
    }
  );
}
// let input = {
//   Material: "Kupfer",
//   R1: "560 ohm",
//   R2: "604 ohm",
// };
// Uebung17(input);
exports.func = Uebung17;
