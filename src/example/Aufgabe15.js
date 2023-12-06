// require("use-strict");
const path = require("path");
const dbJson = require(path.resolve("controllers/dbJson.js"));

const {
  ElektroKernel,
  PlanemetrieKernel,
  Erder,
  SchraubVerbindung,
} = require(path.resolve("include/system"));

/**
 * @description
 * Welchen Widerstand hat eine 0.9mm dicke und 3km lange Kupferleitung von rundem Querschnitt,
 * die im Erdreich verlegt ist ? Die Umgebungstemperatur beträgt -2°C . (Erder)
 * @author Dieter Krause
 * @date 27/07/2023
 * @param {*} input
 */
async function Aufgabe15(input) {
  const { makeDirectory } = require(path.resolve("src/js/makeDirectory.js"));

  //TODO: Was ist wenn der Ordner schon vorhanden ist, wird er überschrieben Ordner
  // sollte man ihn vorher löschen ?

  // const projectFolder = "src/json/example/Aufgabe15";

  const { readMaterialParameter } = require(path.resolve(
    "src/js/readMaterialParameter.js"
  ));
  const { readKonstante } = require(path.resolve("src/js/readKonstante.js"));

  const X1 = new SchraubVerbindung({});
  const W1 = new Erder(input);
  const PK = new PlanemetrieKernel();
  const EK = new ElektroKernel();

  // Promises zum erzeugen des Pfades ../Aufgabe15
  makeDirectory("src/json/example/Aufgabe15").then(
    function () {
      X1.Kennzeichnung = {
        Art: "X",
        Zählnummer: "1",
      };

      X1.Position = {
        x: 50,
        y: 50,
      };

      W1.Kennzeichnung.Art = "W";
      W1.Kennzeichnung.Zählnummer = "1";

      W1.Position = {
        x: 50,
        y: 50,
      };

      // Zusätzliche notwendige Parameter
      W1.Parameter.ρm = readMaterialParameter(input.Material, "ρ").toString();
      W1.Parameter.α20 = readMaterialParameter(
        input.Material,
        "α20"
      ).toString();
      W1.Parameter.δ20 = readKonstante("Vergleichstemperatur").toString();

      PK.parameter({ d: W1.Parameter.d });
      W1.Parameter.A = PK.KAd().toString();

      EK.parameter({
        l: W1.Parameter.l,
        A: W1.Parameter.A,
        ρ: W1.Parameter.ρm,
      });
      W1.Parameter.R20 = EK.RρlA().toString();

      EK.parameter({
        R20: W1.Parameter.R20,
        α20: W1.Parameter.α20,
        δ2: W1.Parameter.δ2,
        δ20: W1.Parameter.δ20,
      });

      W1.Parameter.R2 = EK.Rδ().toString();

      // let jsonX1 = ;
      // let jsonW1 = ;

      dbJson.writeJSONItem(
        path.resolve("src/json/example/Aufgabe15/W1.json"),
        W1
      );
      dbJson.writeJSONItem(
        path.resolve("src/json/example/Aufgabe15/X1.json"),
        X1
      );
      // return jd15;
    },
    function () {
      console.error("FEHLER aufgetreten");
    }
  );
}
// let input = {
//   Material: "Kupfer",
//   d: "0.9 mm",
//   l: "3 km",
//   δ2: "-2 celsius",
// };
// Aufgabe15(input);
exports.func = Aufgabe15;
