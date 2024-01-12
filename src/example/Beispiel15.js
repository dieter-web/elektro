require("use-strict");

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
async function Beispiel15(input) {
  const path = require("path");
  const { makeDirectory } = require(path.resolve("src/js/makeDirectory.js"));
  const dbJson = require(path.resolve("controllers/dbJson"));
  const { Elektro, Planemetrie, Elektrolyt } = require(path.resolve(
    "include/system"
  ));

  const Elyt = new Elektrolyt(input);
  const EK = new Elektro();
  const PK = new Planemetrie();
  const datadir = "src/json/example/Beispiel15";

  makeDirectory(datadir).then(
    function () {
      PK.parameter({ g: Elyt.Parameter.l, h: Elyt.Parameter.b });
      Elyt.Berechnung.Ar = PK.RAgh().to("cm^2");

      EK.parameter({
        l: Elyt.Parameter.d,
        R: Elyt.Parameter.R,
        A: Elyt.Berechnung.Ar.toString(),
      });
      Elyt.Berechnung.κ = EK.κlra().to("S/cm");

      dbJson.writeJSONItem(path.resolve(`${datadir}/data.json`), Elyt);
    },
    function () {
      console.error(`${datadir}`);
    }
  );
}

// let input = {
//   l: "20 cm",
//   b: "12.5 cm",
//   d: "4 mm",
//   R: "0.05 ohm",
// };
// Beispiel15(input);
exports.func = Beispiel15;
