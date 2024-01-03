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

  const { ElektroKernel, Widerstand } = require(path.resolve("include/system"));

  const datadir = "src/json/example/Beispiel11";

  makeDirectory(datadir).then(
    function () {
      let R = new Widerstand(input);
      let G = [];

      R.add("R1", input.R1);
      R.add("R2", input.R2);
      R.add("R3", input.R3);
      R.add("R4", input.R4);

      const EK = new ElektroKernel();
      EK.parameter({ U: input.U });

      R.Rmap.forEach((Ri) => {
        EK.appendParameter("R", Ri);
        EK.appendParameter("I", EK.IUR().toString());
        G.push(EK.GIU().toString());
      });

      R.Parameter.R1 = { Widerstand: R.Parameter.R1, Leitwert: G[0] };
      R.Parameter.R2 = { Widerstand: R.Parameter.R2, Leitwert: G[1] };
      R.Parameter.R3 = { Widerstand: R.Parameter.R3, Leitwert: G[2] };
      R.Parameter.R4 = { Widerstand: R.Parameter.R4, Leitwert: G[3] };

      // R.Parameter.G1 = G[0];
      // R.Parameter.G2 = G[1];
      // R.Parameter.G3 = G[2];
      // R.Parameter.G4 = G[3];

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
