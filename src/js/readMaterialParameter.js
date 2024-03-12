const path = require("path");
const dbJson = require(path.resolve("controllers/dbJson.js"));

/**
 * @description
 * @author Dieter Krause
 * @date 08/07/2023
 * @param {*} Material
 * @param {*} parameter ρ | κ |δ0 | α20 | β20
 * @returns {*} [Unit, Unit] min und max
 */
function readMaterialParameter(Material, parameter) {
  return dbJson.readJSONFile(path.resolve("src/json/Sonstiges/Leiterwerkstoffe.json"))[Material][parameter][0];
}
exports.readMaterialParameter = readMaterialParameter;
