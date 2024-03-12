require("use-strict");
/**
 * @description
 * Wie groß ist die Spannung, die an einem Widerstand liegt, dessen Leitwert 3*E-2 S beträgt und
 * der von einem Strom der Stärke 600 mA durchflossen wird?
 * @author Dieter Krause
 * @date 09/05/2023
 * @param {*} input
 */
async function Aufgabe11(input) {
  const path = require("path");
  const dbJson = require(path.resolve("controllers/dbJson.js"));
  const { makeDirectory } = require(path.resolve("src/js/utility.js"));
  const { Widerstand } = require(path.resolve("src/components/Betriebsmittel.js"));
  const { Elektro } = require(path.resolve("src/mathjs/Kernel.js"));

  const EK = new Elektro();
  const R1 = new Widerstand({ G: input.G });

  const datadir = "src/json/example/Aufgabe11";

  makeDirectory(datadir).then(
    function () {
      R1.Kennzeichnung = {
        Art: "G",
        Zählnummer: 1,
      };

      R1.Parameter = {
        I: input.I,
      };

      EK.parameter({ G: R1.Eigenschaften.G, I: R1.Parameter.I });
      R1.Berechnung["U"] = EK.UIG().to("V");

      dbJson.writeJSONItem(path.resolve(`${datadir}/data.json`), R1);
    },
    function () {
      console.error(`${datadir}`);
    }
  );
}
// let input = {
//   G: "3E-2 S", // Eigenschaft
//   I: "600 mA", // Parameter
// };
// Aufgabe11(input);
exports.func = Aufgabe11;
