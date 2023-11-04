require("use-strict");
const path = require("path");
const dbJson = require(path.resolve("controllers/dbJson"));

const { ElektroKernel, PlanemetrieKernel, Elektrolyt } = require(path.resolve(
  "include/system"
));

/**
 * @description
 * Wie groß ist die spezifische Leitfähigkeit einer
 * Elektrolytflüssigkeit in S/cm, in der sich zwei Elektroden
 * von 12.5cm x 20cm in einem Oberflächenabstand von 4 mm befinden ?
 *  Der Widerstand zwischen den Elektroden beträgt 0.05 Ohm.
 * @author Dieter Krause
 * @date 24/07/2023
 * @param {*} input
 */
function Beispiel15(input) {
  const jsonfile = path.resolve("src/json/example/beispiel15.json");

  // const Kennzeichnung = dbJson.readJSONFile(
  //   path.resolve("src/json/Sonstiges/kennzeichnung.json")
  // );

  const Parameter = input;

  const Elyt = new Elektrolyt(Kennzeichnung, Parameter, {});

  const EK = new ElektroKernel();
  const PK = new PlanemetrieKernel();

  PK.parameter({ g: Elyt.Parameter.l, h: Elyt.Parameter.b });
  Elyt.Parameter.Ar = PK.RAgh().toString();

  EK.parameter({
    l: Elyt.Parameter.d,
    R: Elyt.Parameter.R,
    A: Elyt.Parameter.Ar,
  });
  Elyt.Parameter.κ = EK.κlra().toString();

  dbJson.writeJSONItem(jsonfile, Elyt); // ?
}

// let input = {
//   l: '20 cm',
//   b: '12.5 cm',
//   d: '4 mm',
//   R: '0.05 ohm'
// }
// Beispiel15(input)
exports.func = Beispiel15;
