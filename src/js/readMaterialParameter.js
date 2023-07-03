const path = require('path')
const math = require('mathjs')

const { dbJson } = require(path.resolve('include/system'))

function readMaterialParameter (Material, parameter) {
  return math.unit(
    dbJson.readJSONFile(path.resolve('src/json/Tafel11.json'))[Material][
      parameter
    ][0]
  )
}
exports.readMaterialParameter = readMaterialParameter
