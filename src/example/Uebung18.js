require('use-strict')
const path = require('path')
const dbJson = require(path.resolve('controllers/dbJson'))

const { ElektroKernel, Magnetspule } = require(path.resolve('include/system'))

const { readMaterialParameter } = require(path.resolve(
  'src/js/readMaterialParameter.js'
))

const { readKonstante } = require(path.resolve('src/js/readKonstante.js'))

/**
 * @description
 * An einer Magnetspule aus Kupferdraht liegt eine konstante Spannung.
 * Nach mehrstündigem Betrieb  hat sich die Temperatur der Spule
 * von 12°C auf 60°C erhöht.
 * Um wieviel Prozent ändert sich durch die Erwärmung der Strom der
 * Spule ?
 * @author Dieter Krause
 * @date 26/07/2023
 * @param {*} input
 */
function Uebung18 (input) {
  const jsonfile = path.resolve('src/json/example/uebung18.json')

  const Kennzeichnung = dbJson.readJSONFile(
    path.resolve('src/json/kennzeichnung.json')
  )

  const Parameter = input

  const L1 = new Magnetspule(Kennzeichnung, Parameter, {})
  L1.Parameter.ρM = readMaterialParameter(L1.Parameter.Material, 'ρ').toString()
  L1.Parameter.α20 = readMaterialParameter(
    L1.Parameter.Material,
    'α20'
  ).toString()

  L1.Parameter.δ20 = readKonstante('Vergleichstemperatur').toString()

  const EK = new ElektroKernel()
  EK.parameter({
    δ1: L1.Parameter.δ1,
    δ2: L1.Parameter.δ2,
    δ20: L1.Parameter.δ20,
    α20: L1.Parameter.α20
  })

  L1.Parameter.pI = EK.Rpδ1δ2().toString()

  dbJson.writeJSONItem(jsonfile, L1)
}
// let input = {
//   Material: 'Kupfer',
//   δ1: '12 celsius',
//   δ2: '60 celsius'
// }
// Uebung18(input)
exports.func = Uebung18
