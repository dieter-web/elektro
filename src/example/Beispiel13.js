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

  const { makeDirectory, readMaterialParameter } = require(path.resolve("src/js/utility.js"));
  const { Rohrleitungstechnik, Planemetrie } = require(path.resolve("src/mathjs/Kernel.js"));
  const { Bleirohre } = require(path.resolve("src/components/Bauelemente.js"));

  const datadir = "src/json/example/Beispiel13";

  makeDirectory(datadir).then(
    function () {
      const PtRohr = new Bleirohre({
        Material: input.Material,
        d: input.d,
        D: input.D,
      });

      PtRohr.Kennzeichnung = {
        Art: "Rohr",
        Zählnummer: 1,
      };

      PtRohr.Parameter = {
        ρ: readMaterialParameter(PtRohr.Eigenschaften.Material, "ρ"),
        G: input.G,
      };

      const RK = new Rohrleitungstechnik();
      const PK = new Planemetrie();

      PK.parameter({ d: PtRohr.Eigenschaften.d, D: PtRohr.Eigenschaften.D });
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
