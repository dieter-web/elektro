require('use-strict')
const path = require('path')

const { ElektroKernel, Material } = require(path.resolve('include/system'))

const dbJson = require(path.resolve('controllers/dbJson.js'))

/**
 * @description
 * Wie groß ist die Temperaturkonstante δ0 für Gold-Chrom
 * @author Dieter Krause
 * @date 03/07/2023
 * @param {*} input
 */
function Aufgabe16 (input) {
  const jsonfile = path.resolve('src/json/example/aufgabe16.json')

  const GoCh = new Material.Material('GoldChrom', { δ20: '20 celsius' }, {})

  const Ek = new ElektroKernel()
  Ek.parameter({
    α20: GoCh.data['α20'],
    δ20: GoCh.Parameter['δ20']
  })
  let theta0 = Ek.δM()

  let erg = {
    Object: GoCh, // Material
    Ergebnis: {
      Temperaturkonstante: theta0
    }
  }
  dbJson.writeJSONItem(jsonfile, erg)
}
let input = {
  Material: 'GoldChrom'
}
// Aufgabe16(input)
exports.func = Aufgabe16
