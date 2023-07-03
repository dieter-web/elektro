require('use-strict')
const path = require('path')

const { dbJson, ElektroKernel, Material } = require(path.resolve(
  'include/system'
))

/**
 * @description
 * Wie groß ist die Temperaturkonstante δ0 für Gold-Chrom

 * @author Dieter Krause
 * @date 02/05/2023
 * @param {*} input
 */
function Aufgabe16 (input) {
  const jsonfile = path.resolve('src/json/example/aufgabe16.json')
  const Ma = new Material.Material(
    {},
    {
      δ20: '20 celsius'
    },
    {}
  )
  Ma.Parameter.α20 = Ma.fα20('GoldChrom')[0]

  const Ek = new ElektroKernel()

  Ek.parameter({
    α20: Ma.Parameter.α20,
    δ20: Ma.Parameter.δ20
  })

  let theta0 = Ek.δM()

  let erg = {
    Material: input.Material,
    Ergebnis: {
      Temperaturkonstante: theta0
    }
  }
  dbJson.writeJSONItem(jsonfile, erg)
}
// let input = {
//   Material: 'GoldChrom'
// }
// Aufgabe16(input)
exports.func = Aufgabe16
