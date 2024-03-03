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
  const dbJson = require(path.resolve("controllers/dbJson.js"));

  const { makeDirectory } = require(path.resolve("src/js/makeDirectory.js"));
  const { Rohrleitungstechnik } = require(path.resolve("src/Kernel/Rohrleitungstechnik.js"));
  const { Planemetrie } = require(path.resolve("src/Kernel/Planemetrie.js"));
  const { Bleirohre } = require(path.resolve("src/components/Bauelemente.js"));
  const { readMaterialParameter } = require(path.resolve("src/js/readMaterialParameter.js"));

  const datadir = "src/json/example/Beispiel13";

  makeDirectory(datadir).then(
    function () {
      const RK = new Rohrleitungstechnik();
      const PK = new Planemetrie();
      const PtRohr = new Bleirohre(input);

      PtRohr.Kennzeichnung.Art = "Rohr";
      PtRohr.Kennzeichnung.Zählnummer = "1";

      PtRohr.Parameter.ρ = readMaterialParameter(PtRohr.Parameter.Material, "ρ");

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
//   Material: "Blei",
//   G: "1285 S",
//   d: "2.5 cm",
//   D: "3.0 cm",
// };
// Beispiel13(input);
exports.func = Beispiel13;
