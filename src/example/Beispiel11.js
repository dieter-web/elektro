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

  let R1 = new Widerstand({
    Name: "R1",
    R: input.R1, // Gegeben
    U: input.U,
    G: "", // Gesucht
    I: "",
    // Position
    x: 50,
    y: 50,
  });

  R1.Kennzeichnung.Art = "R";
  R1.Kennzeichnung.Zählnummer = "1";

  let R2 = new Widerstand({
    Name: "R2",
    R: "80kohm", // Gegeben
    U: "60V",
    G: "", // Gesucht
    I: "",
    x: 250,
    y: 50,
  });

  R2.Kennzeichnung.Art = "R";
  R2.Kennzeichnung.Zählnummer = "2";

  let R3 = new Widerstand({
    Name: "R3",
    R: "500ohm", // Gegeben
    U: "60V",
    G: "", // Gesucht
    I: "",
    x: 500,
    y: 50,
  });

  R3.Kennzeichnung.Art = "R";
  R3.Kennzeichnung.Zählnummer = "3";

  let R4 = new Widerstand({
    Name: "R4",
    R: "75ohm", // Gegeben
    U: "60V",
    G: "", // Gesucht
    I: "",
    x: 750,
    y: 50,
  });

  R4.Kennzeichnung.Art = "R";
  R4.Kennzeichnung.Zählnummer = "4";

  // Widerstandsarray !
  let RBEA = [R1, R2, R3, R4];

  const EK = new ElektroKernel();

  RBEA.map((R, i) => {
    EK.parameter({ U: R.Parameter.U, R: RBEA[i].Parameter.R });
    RBEA[i].Parameter.I = EK.IUR().toString();

    EK.parameter({ I: RBEA[i].Parameter.I, U: R.Parameter.U });
    RBEA[i].Parameter.G = EK.GIU().toString();
  });

  dbJson.writeJSONItem(jsonfile, RBEA);
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
