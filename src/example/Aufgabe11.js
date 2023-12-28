require("use-strict");

/**
 * @description
 * Wie groß ist die Spannung, die an einem Widerstand liegt, dessen Leitwert 3*E-2 S beträgt und
 * der von einem Strom der Stärke 600 mA durchflossen wird?
 * @author Dieter Krause
 * @date 09/05/2023
 * @param {*} input
 */
function Aufgabe11(input) {
  const path = require("path");
  const { makeDirectory } = require(path.resolve("src/js/makeDirectory.js"));
  const dbJson = require(path.resolve("controllers/dbJson.js"));
  
  const { ElektroKernel, Widerstand } = require(path.resolve("include/system"));
  const R1 = new Widerstand(input);
  const EK = new ElektroKernel();
  const datadir = "src/json/example/Aufgabe11";

  makeDirectory(datadir).then(
    function () {
      R1.Kennzeichnung.Art = "G";
      R1.Kennzeichnung.Zählnummer = "1";

      EK.parameter({ G: R1.Parameter.G, I: R1.Parameter.I });
      R1.Parameter.U12 = EK.UIG().toString();

      dbJson.writeJSONItem(path.resolve(`${datadir}/R1.json`), R1);
    },
    function () {
      console.error(`${datadir}`);
    }
  );
}
// let input = {
//   G: "3E-2 S",
//   I: "600 mA",
// };
// Aufgabe11(input);
exports.func = Aufgabe11;
