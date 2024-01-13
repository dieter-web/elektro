require("use-strict");

/**
 * @description
 * Eine Kupferleitung( Litze ), die aus mehreren verdrillten,
 * dünnen Einzeldrähten besteht, ist 8m lang
 * und hat einen Widerstand von 1.58 ohm.Der Durchmesser eines
 * Einzeldrahtes beträgt 0.08 mm.
 * Aus wieviel Drähten besteht die Litze ?
 * @author Dieter Krause
 * @date 25/07/2023
 * @param {*} input
 */
function Uebung12(input) {
  const path = require("path");
  const {
    makeDirectory
  } = require(path.resolve("src/js/makeDirectory.js"));
  const dbJson = require(path.resolve("controllers/dbJson"));
  const {
    Elektro,
    Arithmetik,
    Planemetrie,
    Litzeleitung
  } = require(path.resolve("include/system"));
  const {
    readMaterialParameter
  } = require(path.resolve("src/js/readMaterialParameter.js"));
  const W1 = new Litzeleitung(input);
  const AK = new Arithmetik();
  const PK = new Planemetrie();
  const EK = new Elektro();
  const datadir = "src/json/example/Uebung12";
  makeDirectory(datadir).then(function () {
    W1.Kennzeichnung.Art = "W";
    W1.Kennzeichnung.Zählnummer = "1";
    W1.Bezeichnung = "H05V-U/K";
    W1.Parameter.ρM = readMaterialParameter(W1.Parameter.Material, "ρ").toString();
    PK.parameter({
      d: W1.Parameter.d
    });
    W1.Berechnung.Al = PK.KAd().to("mm^2"); // Litze

    EK.parameter({
      l: W1.Parameter.l,
      ρ: W1.Parameter.ρM,
      R: W1.Parameter.R
    });
    W1.Berechnung.Ag = EK.AρlR();
    AK.parameter({
      a: W1.Berechnung.Ag.toString(),
      b: W1.Berechnung.Al.toString()
    });
    W1.Berechnung.ng = AK.div();
    dbJson.writeJSONItem(path.resolve(`${datadir}/data.json`), W1);
  }, function () {
    console.error(`${datadir}`);
  });
}
let input = {
  Material: "Kupfer",
  l: "8 m",
  R: "1.58 ohm",
  d: "0.08 mm"
};
Uebung12(input);
exports.func = Uebung12;