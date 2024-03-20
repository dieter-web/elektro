require("use-strict");

/**TODO: Das Ergebnis stimmt nicht überein ? */
/**
 * @description
 *  Es ist der Widerstand des Wolframdrahts einer Glühlampe bei 20°C und bei 2250°C
 * (Betriebstemperatur der Lampe) zu bestimmen. Der Draht hat einen Durchmesser von
 * 0.0245 mm und ist 36.5 cm lang.
 * @author Dieter Krause
 * @date 28/07/2023
 * @param {*} input
 */
async function Beispiel17(input) {
  const path = require("path");
  const dbJson = require(path.resolve("controllers/dbJson"));

  const { makeDirectory, readMaterialParameter, readKonstante } = require(path.resolve("src/js/utility.js"));
  const { Planemetrie, Elektro } = require(path.resolve("src/mathjs/Kernel.js"));
  const { Gluehlampe } = require(path.resolve("src/components/Betriebsmittel.js"));

  const datadir = "src/json/example/Beispiel17";

  makeDirectory(datadir).then(
    function () {
      const E1 = new Gluehlampe({
        Material: input.Material,
        l: input.l,
        d: input.d,
      });

      E1.Kennzeichnung = {
        Art: "E",
        Zählnummer: 1,
      };

      E1.Parameter = {
        ρM: readMaterialParameter(E1.Eigenschaften.Material, "ρ"),
        α20: readMaterialParameter(E1.Eigenschaften.Material, "α20"),
        δ20: readKonstante("Vergleichstemperatur"),
        δ2: input.δ2,
      };

      const PK = new Planemetrie();
      const EK = new Elektro();

      PK.parameter({ l: E1.Eigenschaften.l, d: E1.Eigenschaften.d });
      E1.Berechnung.Awd = PK.KAd().to("mm^2");

      EK.parameter({
        ρ: E1.Parameter.ρM,
        l: E1.Eigenschaften.l,
        A: E1.Berechnung.Awd.toString(),
      });
      E1.Berechnung.R20 = EK.RρlA().to("ohm");

      EK.parameter({
        α20: E1.Parameter.α20,
        δ2: E1.Parameter.δ2,
        δ20: E1.Parameter.δ20,
        R20: E1.Berechnung.R20.toString(),
      });
      E1.Berechnung.Rδ = EK.Rδ();

      dbJson.writeJSONItem(path.resolve(`${datadir}/data.json`), E1);
    },
    function () {
      console.error(`${datadir}`);
    }
  );
}
// let input = {
//   Material: 'Wolfram',
//   l: '36.5 cm',
//   d: '0.0245 mm',
//   δ2: '2250 celsius'
// }
// Beispiel17(input)
exports.func = Beispiel17;
