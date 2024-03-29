require("use-strict");

/**
 * @description
 * Wie groß ist der spezifische Widerstand eines 3 km langen Drahtes
 * mit 0.9 mm Durchmesser, der
 * einen Widerstand von 84.5 Ohm hat ?
 * @author Dieter Krause
 * @date 23/06/2023
 * @param {*} input
 * @returns {*}
 */
async function Beispiel12(input) {
  const path = require("path");
  const dbJson = require(path.resolve("controllers/dbJson.js"));
  const { makeDirectory } = require(path.resolve("src/js/makeDirectory.js"));

  const { Elektro } = require(path.resolve("src/Kernel/Elektro.js"));
  const { Planemetrie } = require(path.resolve("src/Kernel/Planemetrie.js"));
  const { Draht } = require(path.resolve("src/components/Betriebsmittel.js"));

  const datadir = "src/json/example/Beispiel12";

  makeDirectory(datadir).then(function () {
    const PK = new Planemetrie();
    const EK = new Elektro();
    const W1 = new Draht(input);

    W1.Kennzeichnung.Art = "W";
    W1.Kennzeichnung.Zählnummer = "1";

    PK.parameter({ d: W1.Parameter.d });
    W1.Berechnung["A"] = PK.KAd();

    EK.parameter({
      l: W1.Parameter.l,
      R: W1.Parameter.R,
      A: W1.Berechnung["A"].toString(),
    });
    W1.Berechnung["ρ"] = EK.ρRAl();

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
