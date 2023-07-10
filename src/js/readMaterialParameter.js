const path = require('path')
const math = require('mathjs')

const dbJson = require(path.resolve('controllers/dbJson.js'))

/**
 * @description
 * @author Dieter Krause
 * @date 08/07/2023
 * @param {*} Material
 * @param {*} parameter ρ | κ |δ0 | α20 | β20
 * @returns {*} [Unit, Unit] min und max
 */
function readMaterialParameter (Material, parameter) {
  return math.unit(
    dbJson.readJSONFile(path.resolve('src/json/Tafel11.json'))[Material][
      parameter
    ]
  )
}
exports.readMaterialParameter = readMaterialParameter
