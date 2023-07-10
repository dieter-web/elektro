require('use-strict')
const path = require('path')

const { ElektroKernel, ArithmetikKernel, Leitung } = require(path.resolve(
  'include/system'
))

const { readMaterialParameter } = require(path.resolve(
  'src/js/readMaterialParameter.js'
))

const dbJson = require(path.resolve('controllers/dbJson.js'))

/**
 * @function Beispiel14
 *
 * Eine zweiadrige Aluminiumleitung verbindet ein Gleichstromnetz von 230V Netzspannung mit einem
 * 800m entfernt liegenden Verbraucher. Die Leitung wird mit einem Strom I = 11A belastet.
 * Wie groß muß der erforderliche Querschnitt sein, wenn der Spannungsverlust längs der Leitung
 * maximal 5% der Netzspannung betragen darf ?
 *
 * @param {string} Material - Material
 * @param {math.Unit} U - Netzspannung
 * @param {numeric} p - max. zulässiger prozendualer Spannungsabfall
 * @param {math.Unit} l - Länge der Leitung
 * @param {numeric} a - Anzahl der Adern der Leitung
 * @param {math.Unit} I - Stromstärke
 * @returns {string} A - Querschnitt der Leitung
 */
function Beispiel14 (input) {
  const jsonfile = path.resolve('src/json/example/beispiel14.json')

  const ρal = readMaterialParameter(input.Material, 'ρ')

  // const ρal = dbJson.readJSONFile(path.resolve('src/json/Tafel11.json'))[
  //   input.Material
  // ].ρ[0]

  const Kennzeichnung = dbJson.readJSONFile(
    path.resolve('src/json/kennzeichnung.json')
  )

  const Parameter = input

  const W1 = new Leitung(Kennzeichnung, Parameter, {})

  const AK = new ArithmetikKernel()
  const EK = new ElektroKernel()

  AK.parameter({ G: input.U, p: input.p })
  let prozentwert = AK.Prozentwert()

  AK.parameter({ a: W1.Parameter.a, b: W1.Parameter.l })
  let lg = AK.mul()

  EK.parameter({ ρ: ρal, l: lg, U: prozentwert, I: input.I })
  let A = EK.AρlUI()

  let erg = {
    Object: W1,
    Ergebnis: A
  }

  dbJson.writeJSONItem(jsonfile, erg)
}
// let input = {
//   p: '5', //  ArithmetikKernel
//   a: '2',
//   Material: 'Aluminium', // ElektroKernel
//   U: '230 V',
//   l: '800 m',
//   I: '11 A'
// }
// Beispiel14(input)
exports.func = Beispiel14
