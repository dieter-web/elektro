require("use-strict");

/**
 * @description
 * Wie groß ist der spezifische Widerstand eines 3 km langen Drahtes mit 0.9 mm Durchmesser,
 * der  einen Widerstand von 84.5 Ohm hat ?
 * @author Dieter Krause
 * @date 23/06/2023
 * @param {*} input
 * @returns {*}
 */
async function Beispiel12(input) {
  const path = require("path");
  const dbJson = require(path.resolve("controllers/dbJson.js"));
  const { makeDirectory } = require(path.resolve("src/js/utility.js"));

  const { Elektro, Planemetrie } = require(path.resolve("src/mathjs/Kernel.js"));

  const { Draht } = require(path.resolve("src/components/Betriebsmittel.js"));

  const datadir = "src/json/example/Beispiel12";

  makeDirectory(datadir).then(function () {
    const W1 = new Draht({ l: "3km", d: "0.9mm" });

    W1.Parameter.R = input.R;

    W1.Kennzeichnung = {
      Art: "W",
      Zählnummer: "1",
    };

    const PK = new Planemetrie();
    PK.parameter({ d: W1.Eigenschaften.d });
    W1.Berechnung.A = PK.KAd();

    const EK = new Elektro();
    EK.parameter({
      l: W1.Eigenschaften.l,
      R: W1.Parameter.R,
      A: W1.Berechnung.A.toString(),
    });
    W1.Berechnung.ρ = EK.ρRAl();

    dbJson.writeJSONItem(path.resolve(`${datadir}/data.json`), W1);
  });
}
// let input = {
//   l: "3 km",
//   d: "0.9 mm",
//   R: "84.5 ohm",
// };
// Beispiel12(input);
exports.func = Beispiel12;
