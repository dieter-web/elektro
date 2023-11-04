require("use-strict");
const path = require("path");
const dbJson = require(path.resolve("controllers/dbJson"));

const { ElektroKernel, Strommesser } = require(path.resolve("include/system"));

/**
 * @description
 * Ein Strommesser hat einen Widerstand von 2.5 ohm.
 * Bei Endausschlag liegt an seinen Klemmen eine
 * Spannung von 0.625 V.
 * Wie groß ist der Meßbereich ?
 * @author Dieter Krause
 * @date 25/07/2023
 * @param {*} input
 */
function Uebung13(input) {
  const jsonfile = path.resolve("src/json/example/uebung13.json");

  const P1 = new Strommesser({
    R: "2.5 ohm",
    U: "0.625 V",
    x: 50,
    y: 50,
  });

  P1.Kennzeichnung.Art = "P";
  P1.Kennzeichnung.Zählnummer = "1";

  const EK = new ElektroKernel();
  EK.parameter({ R: P1.Parameter.R, U: P1.Parameter.U });
  P1.Parameter.Ism = EK.IUR().toString();

  dbJson.writeJSONItem(jsonfile, P1);
}
// let input = {
//   R: '2.5 ohm',
//   U: '0.625 V'
// }
// Uebung13(input)
exports.func = Uebung13;
