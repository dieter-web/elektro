require("use-strict");

/**
 * @description
 * Ein Drehspulspannungsmesser hat einen Meßbereich von 300 mV.
 * Das rechteckige Spulenrähmchen der Drehspule hat die Seitenlängen 2 cm und 1 cmm
 * und ist mit 200 Windungen Kupferdraht von 0.03 mm  Durchmesser einlagig bewickelt.
 * Wie groß ist der Strom, der durch das Meßgerät bei Endausschlag fließt ?
 * @author Dieter Krause
 * @date 25/07/2023
 * @param {*} input
 */
function Uebung15(input) {
  const path = require("path");
  const dbJson = require(path.resolve("controllers/dbJson"));

  const { makeDirectory, readMaterialParameter } = require(path.resolve("src/js/utility.js"));
  const {Arithmetik,Planemetrie,Elektro} = require(path.resolve("src/mathjs/Kernel.js"));
  const { Spannungsmesser} = require(path.resolve("src/components/Betriebsmittel.js"));
    
  const P1 = new Spannungsmesser({
    Material: input.Material,
    l: input.l,
    b: input.b,
    N: input.N,
    d: input.d,
  });

  const PK = new Planemetrie();
  const AK = new Arithmetik();
  const EK = new Elektro();

  const datadir = "src/json/example/Uebung15";

  makeDirectory(datadir).then(
    function () {

      P1.Kennzeichnung = {
        Art: "P",
        Zählnummer: 1,
        Typ: "Drehspulspannungsmesser",
      }

      P1.Parameter = {
      ρM : readMaterialParameter(P1.Eigenschaften.Material,"ρ"),
      Ug: input.Ug,
      }

      PK.parameter({ g: P1.Eigenschaften.l, h: P1.Eigenschaften.b });
      P1.Berechnung.Ur = PK.RUgh();

      PK.parameter({ d: P1.Eigenschaften.d });
      P1.Berechnung.Ad = PK.KAd().to("mm^2");

      AK.parameter({ a: P1.Berechnung.Ur.toString(), b: P1.Eigenschaften.N });
      P1.Berechnung.ld = AK.mul().to("m");

      EK.parameter({
        ρ: P1.Parameter.ρM,
        U: P1.Parameter.Ug,
        l: P1.Berechnung.ld.toString(),
        A: P1.Berechnung.Ad.toString(),
      });
      P1.Berechnung["Ie"] = EK.IρAlU().to("mA");

      dbJson.writeJSONItem(path.resolve(`${datadir}/data.json`), P1);
    },
    function () {
      console.error(`${datadir}`);
    }
  );
}
// let input = {
//   Material: "Kupfer",
//   Ug: "300 mV",
//   l: "2 cm",
//   b: "1 cm",
//   N: 200,
//   d: "0.03 mm",
// };
// Uebung15(input);
exports.func = Uebung15;
