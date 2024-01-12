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
  const { makeDirectory } = require(path.resolve("src/js/makeDirectory.js"));

  const { Elektro, Widerstand } = require(path.resolve("include/system"));

  const datadir = "src/json/example/Beispiel11";

  makeDirectory(datadir).then(
    function () {
      let R = new Widerstand({});
      let G = [];
      let I = [];

      R.add("R1", input.R1);
      R.add("R2", input.R2);
      R.add("R3", input.R3);
      R.add("R4", input.R4);

      const EK = new Elektro();
      EK.parameter({ U: input.U });

      R.Rmap.forEach((Ri, index) => {
        EK.appendParameter("R", Ri);
        I.push(EK.IUR().to("mA"));
        EK.appendParameter("I", EK.IUR().toString());
        G.push(EK.GIU().to("mS"));
      });

      R.Parameter.R1 = {
        Widerstand: input.R1,
        Spannung: input.U,
      };
      R.Berechnung.R1 = {
        Stromstärke: I[0],
        Leitwert: G[0],
      };

      R.Parameter.R2 = {
        Widerstand: input.R2,
        Spannung: input.U,
      };
      R.Berechnung.R2 = {
        Stromstärke: I[1],
        Leitwert: G[1],
      };

      R.Parameter.R3 = {
        Widerstand: input.R3,
        Spannung: input.U,
      };
      R.Berechnung.R3 = {
        Stromstärke: I[2],
        Leitwert: G[2],
      };

      R.Parameter.R4 = {
        Widerstand: input.R4,
        Spannung: input.U,
      };
      R.Berechnung.R4 = {
        Stromstärke: I[3],
        Leitwert: G[3],
      };

      dbJson.writeJSONItem(path.resolve(`${datadir}/data.json`), R);
      // Nur Widerstand nicht Widerstände also Rmap
    },
    function () {
      console.error(`${datadir}`);
    }
  );
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
