require("use-strict");

/**
 * @description
 * Ein Bleimantelkabel hat einen Außendurchmesser von 42 mm.
 * Der Bleimantel ist 4 mm dick. Der Widerstand des Bleimantel
 * zwischen den Kabelenden beträgt 80 mohm.
 * Wie lang ist das Kabel ?
 * @author Dieter Krause
 * @date 26/07/2023
 * @param {*} input
 */
async function Uebung16(input) {
  const path = require("path");
  const { makeDirectory } = require(path.resolve("src/js/makeDirectory.js"));
  const dbJson = require(path.resolve("controllers/dbJson"));

  const { Arithmetik, Planemetrie, Elektro, Kabel } = require(path.resolve(
    "include/system"
  ));

  const { readMaterialParameter } = require(path.resolve(
    "src/js/readMaterialParameter.js"
  ));

  const W1 = new Kabel(input);

  const AK = new Arithmetik();
  const PK = new Planemetrie();
  const EK = new Elektro();

  const datadir = "src/json/example/Uebung16";

  makeDirectory(datadir).then(
    function () {
      W1.Kennzeichnung.Art = "W";
      W1.Kennzeichnung.Zählnummer = "1";

      W1.Parameter.ρM = readMaterialParameter(
        W1.Parameter.Material,
        "ρ"
      ).toString();

      AK.parameter({ a: W1.Parameter.d, b: 2 });
      W1.Berechnung["d2"] = AK.mul();

      AK.parameter({ a: W1.Parameter.D, b: W1.Berechnung.d2.toString() });
      W1.Berechnung["di"] = AK.sub();

      PK.parameter({ D: W1.Parameter.D, d: W1.Berechnung.di.toString() });
      W1.Berechnung["A"] = PK.KRADd();

      EK.parameter({
        ρ: W1.Parameter.ρM,
        R: W1.Parameter.R,
        A: W1.Berechnung.A.toString(),
      });
      W1.Berechnung.lbm = EK.lρra();

      dbJson.writeJSONItem(path.resolve(`${datadir}/data.json`), W1);
    },
    function () {
      console.error(`${datadir}`);
    }
  );
}
// let input = {
//   Material: 'Blei',
//   D: '42 mm',
//   d: '4 mm',
//   R: '80 mohm'
// }
// Uebung16(input)
exports.func = uebung16;
