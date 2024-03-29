require("use-strict");

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
async function Uebung13(input) {
  const path = require("path");
  const { makeDirectory } = require(path.resolve("src/js/makeDirectory.js"));
  const dbJson = require(path.resolve("controllers/dbJson"));

  const { Elektro, Strommesser } = require(path.resolve("include/system"));

  const P1 = new Strommesser(input);

  const EK = new Elektro();

  const datadir = "src/json/example/Uebung13";

  makeDirectory(datadir).then(
    function () {
      P1.Kennzeichnung.Art = "P";
      P1.Kennzeichnung.Zählnummer = "1";

      EK.parameter({ R: P1.Parameter.R, U: P1.Parameter.U });
      P1.Berechnung["Ism"] = EK.IUR().to("mA");

      dbJson.writeJSONItem(path.resolve(`${datadir}/data.json`), P1);
    },
    function () {
      console.error(`${datadir}`);
    }
  );
}
let input = {
  R: "2.5 ohm",
  U: "0.625 V",
};
Uebung13(input);
exports.func = Uebung13;
