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
  const dbJson = require(path.resolve("controllers/dbJson"));

  const { makeDirectory } = require(path.resolve("src/js/utility.js"));

  const { Elektro, Planemetrie } = require(path.resolve("src/mathjs/Kernel.js"));

  const { Elektrolyt } = require(path.resolve("src/components/PhysikalischeChemie.js"));
  const { Elektrode } = require(path.resolve("src/components/PhysikalischeChemie.js"));

  const datadir = "src/json/example/Beispiel15";

  makeDirectory(datadir).then(
    function () {
      const Elyt = new Elektrolyt({ R: input.R });
      Elyt.Kennzeichnung = {
        Art: "Elektrolydflüssigkeit",
        Zählnummer: "1",
      };

      Elyt.Parameter = {
        d: input.d,
      };

      const Eltr1 = new Elektrode({ l: input.l, b: input.b });
      Eltr1.Kennzeichnung = {
        Art: "Elektrode",
        Zählnummer: 1,
      };

      Eltr1.Parameter = {
        name: "Eltr1",
      };

      const Eltr2 = new Elektrode({ l: input.l, b: input.b });
      Eltr2.Kennzeichnung = {
        Art: "Elektrode",
        Zählnummer: 2,
      };

      Eltr2.Parameter = {
        name: "Eltr2",
      };

      const EK = new Elektro();
      const PK = new Planemetrie();

      PK.parameter({ g: Eltr1.Eigenschaften.l, h: Eltr1.Eigenschaften.b });
      Eltr1.Berechnung.Ar = PK.RAgh().to("cm^2");

      PK.parameter({ g: Eltr2.Eigenschaften.l, h: Eltr2.Eigenschaften.b });
      Eltr2.Berechnung.Ar = PK.RAgh().to("cm^2");

      // Die Flächen beider Elektroden sind gleich groß
      // und sie stehen sich direkt, also flächendeckend gegenüber
      // TODO: was wenn sie sich nicht flächendeckend gegeüber stehen, sonder z.B. versetzt ??

      EK.parameter({
        l: Elyt.Parameter.d,
        R: Elyt.Eigenschaften.R,
        A: Eltr1.Berechnung.Ar.toString(),
      });

      Elyt.Berechnung.κ = EK.κlra().to("S/cm");

      dbJson.writeJSONItem(path.resolve(`${datadir}/data.json`), Elyt);
      dbJson.appendJSONItem(path.resolve(`${datadir}/data.json`), Eltr1);
      dbJson.appendJSONItem(path.resolve(`${datadir}/data.json`), Eltr2);
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
