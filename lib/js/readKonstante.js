const path = require("path");
const math = require("mathjs");
const dbJson = require(path.resolve("controllers/dbJson.js"));
function readKonstante(name) {
  return math.unit(dbJson.readJSONFile(path.resolve("src/json/Sonstiges/konstanten.json"))[name]["wert"]);
}
exports.readKonstante = readKonstante;