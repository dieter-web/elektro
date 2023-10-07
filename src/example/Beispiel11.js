require("use-strict");
const path = require("path");

const { ElektroKernel, Widerstand, Stack } = require(path.resolve(
  "include/system"
));
const dbJson = require(path.resolve("controllers/dbJson.js"));

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
function Beispiel11(input) {
  const jsonfile = path.resolve("src/json/example/beispiel11.json");

  // const IStack = new Stack()
  // const GStack = new Stack()

  let R1 = new Widerstand(
    {
      Funktion: "R",
      Zaehlnummer: 1,
    },
    { R: input.R1, U: input.U },
    {}
  );
  let R2 = new Widerstand(
    {
      Funktion: "R",
      Zaehlnummer: 2,
    },
    { R: input.R2, U: input.U },
    {}
  );
  let R3 = new Widerstand(
    {
      Funktion: "R",
      Zaehlnummer: 3,
    },
    { R: input.R3, U: input.U },
    {}
  );
  let R4 = new Widerstand(
    {
      Funktion: "R",
      Zaehlnummer: 4,
    },
    { R: input.R4, U: input.U },
    {}
  );

  // Widerstandsarray !
  let RBEA = [R1, R2, R3, R4];

  const EK = new ElektroKernel();
  RBEA.map((R, i) => {
    EK.parameter({ U: R.Parameter.U, R: RBEA[i].Parameter.R });
    RBEA[i].Parameter.I = EK.IUR(); //.toString()
    EK.parameter({ I: RBEA[i].Parameter.I, U: R.Parameter.U });
    RBEA[i].Parameter.G = EK.GIU(); //.toString()
  });

  dbJson.writeJSONItem(jsonfile, RBEA);
}

// let input = {
//   R1: '2.5 Mohm',
//   R2: '80 kohm',
//   R3: '500 ohm',
//   R4: '75 ohm',
//   U: '60 V'
// }
// Beispiel11(input)
exports.func = Beispiel11;
