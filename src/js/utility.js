const path = require("path");
const dbJson = require(path.resolve("controllers/dbJson.js"));
const { mkdir } = require("node:fs/promises");

function readMaterialParameter(Material, parameter) {
  return dbJson.readJSONFile(path.resolve("src/json/Sonstiges/Leiterwerkstoffe.json"))[Material][parameter][0];
}

function readKonstante(name) {
  return dbJson.readJSONFile(path.resolve("src/json/Sonstiges/konstanten.json"))[name]["wert"];
}

async function makeDirectory(name) {
  return await mkdir(name, { recursive: true });
}

exports.makeDirectory = makeDirectory;
exports.readKonstante = readKonstante;
exports.readMaterialParameter = readMaterialParameter;
