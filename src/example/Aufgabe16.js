require("use-strict");
const path = require("path");
const dbJson = require(path.resolve("controllers/dbJson.js"));

const { readKonstante } = require(path.resolve("src/js/readKonstante.js"));

const { ElektroKernel, Material } = require(path.resolve("include/system"));

/**
 * @description
 * Wie groß ist die Temperaturkonstante δ0 für Gold-Chrom
 * @author Dieter Krause
 * @date 03/07/2023
 * @param {*} input
 */
function Aufgabe16(input) {
  const jsonfile = path.resolve("src/json/example/aufgabe16.json");
  const δ20 = readKonstante("Vergleichstemperatur").toString();

  const GoCh = new Material({
    Material: input.Material,
    x: 50,
    y: 50,
  });

  GoCh.Kennzeichnung.Name = "Gold-Chrom";
  GoCh.Kennzeichnung.Menge = "1";

  // Es wird noch die Vergleichstemperatur benötigt δ20
  GoCh.Parameter.δ20 = δ20;
  GoCh.vis.fill = "#c1b59b"; // Materialfarbe
  GoCh.vis.name = GoCh.Parameter.Material;

  const Ek = new ElektroKernel();
  Ek.parameter({
    α20: GoCh.fα20(),
    δ20: GoCh.Parameter.δ20,
  });

  GoCh.Parameter.theta0 = Ek.δM().toString();

  dbJson.writeJSONItem(jsonfile, GoCh);
}
// let input = {
//   Material: "GoldChrom",
// };
// Aufgabe16(input);
exports.func = Aufgabe16;
