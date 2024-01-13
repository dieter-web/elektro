require("use-strict");

/**
 * @function Beispiel13
 *
 * Wie lang ist ein Bleirohr, das einen Leitwert von 1285 S hat ?
 * Der Innendurchmesser di beträgt 2.5cm und der Außendurchmesser da 3cm.
 *
 * @param {math.Unit} G - Leitwert
 * @param {math.Unit} di - Rohrinnendurchmesser
 * @param {math.Unit} da - Rohraußendurchmesser
 *  Material = 'Blei', G = "1285 S", d = "2.5 cm", D = "3.0 cm"
 */
async function Beispiel13(input) {
  const path = require("path");
  const { makeDirectory } = require(path.resolve("src/js/makeDirectory.js"));
  const dbJson = require(path.resolve("controllers/dbJson.js"));

  const { Rohrleitungstechnik, Bleirohr, Planemetrie } = require(path.resolve(
    "include/system"
  ));

  const { readMaterialParameter } = require(path.resolve(
    "src/js/readMaterialParameter.js"
  ));

  const RK = new Rohrleitungstechnik();
  const PK = new Planemetrie();

  // const Kennzeichnung = dbJson.readJSONFile(
  //   path.resolve("src/json/Sonstiges/kennzeichnung.json")
  // );
  const PtRohr = new Bleirohr(input);

  const datadir = "src/json/example/Beispiel13";

  makeDirectory(datadir).then(
    function () {
      PtRohr.Parameter.ρ = readMaterialParameter(
        input.Material,
        "ρ"
      ).toString();

      PK.parameter({ d: PtRohr.Parameter.d, D: PtRohr.Parameter.D });
      PtRohr.Berechnung.Ar = PK.KRADd();

      RK.parameter({
        ρ: PtRohr.Parameter.ρ,
        G: PtRohr.Parameter.G,
        A: PtRohr.Berechnung.Ar.toString(),
      });
      PtRohr.Berechnung.l = RK.lAρG().to("m");

      dbJson.writeJSONItem(path.resolve(`${datadir}/data.json`), PtRohr);
    },
    function () {
      console.error(`${datadir}`);
    }
  );
}

// let input = {
//   Material: 'Blei',
//   G: '1285 S',
//   d: '2.5 cm',
//   D: '3.0 cm'
// }
// Beispiel13(input)
exports.func = Beispiel13;
