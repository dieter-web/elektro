const path = require('path')
const { dbJson } = require(path.resolve('include/system'))

function readMaterialParameter (Material, parameter) {
  return dbJson.readJSONFile(path.resolve('src/json/Tafel11.json'))[Material][
    parameter
  ][0]
}
exports.readMaterialParameter = readMaterialParameter
