require("use-strict");

/**
 * @function Beispiel11
 * @description
 * An den Klemmen der vier Widerstände R1...R4 liegt eine Spannung von U = 60V
 * R1 = 2.5Mohm, R2=80kohm,R3= 500 ohm und R4 = 75 ohm.
 * Wie groß sind die Ströme durch diese Widerstände und welche Leitwertgrößen besitzen sie?
 * @author Dieter Krause
 * @date 29/04/2023
 * @param {*} input
 * @returns {*}
 */
async function Beispiel11(input) {
  const path = require("path");
  const dbJson = require(path.resolve("controllers/dbJson.js"));

  const { makeDirectory } = require(path.resolve("src/js/utility.js"));
  const { Elektro } = require(path.resolve("src/mathjs/Kernel.js"));
  const { Widerstand } = require(path.resolve("src/components/Betriebsmittel.js"));

  const datadir = "src/json/example/Beispiel11";

  makeDirectory(datadir).then(
    function () {
      let R1 = new Widerstand({ Wert: input.R1 });
      R1.Parameter.U = input.U;
      R1.Kennzeichnung = {
        Art: "R",
        Zählnummer: 1,
      };

      let R2 = new Widerstand({ Wert: input.R2 });
      R2.Parameter.U = input.U;
      R2.Kennzeichnung = {
        Art: "R",
        Zählnummer: 2,
      };

      let R3 = new Widerstand({ Wert: input.R3 });
      R3.Parameter.U = input.U;
      R3.Kennzeichnung = {
        Art: "R",
        Zählnummer: 3,
      };

      let R4 = new Widerstand({ Wert: input.R4 });
      R4.Parameter.U = input.U;
      R4.Kennzeichnung = {
        Art: "R",
        Zählnummer: 4,
      };

      const EK = new Elektro();
      EK.parameter({ U: input.U });

      [R1, R2, R3, R4].forEach((element) => {
        EK.appendParameter("R", element.Eigenschaften.Wert);
        element.Berechnung.I = EK.IUR().to("mA");
        EK.appendParameter("I", element.Berechnung.I.toString());
        element.Berechnung.G = EK.GIU().to("mS");
      });

      dbJson.writeJSONItem(path.resolve(`${datadir}/data.json`), R1);
      [R2, R3, R4].forEach((element) => {
        dbJson.appendJSONItem(path.resolve(`${datadir}/data.json`), element);
      });
    },
    function () {
      console.error(`${datadir}`);
      return -1;
    }
  );
  return 0;
}
// let input = {
//   R1: "2.5 Mohm",
//   R2: "80 kohm",
//   R3: "500 ohm",
//   R4: "75 ohm",
//   U: "60 V",
// };
// Beispiel11(input);
exports.func = Beispiel11;
