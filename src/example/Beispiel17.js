require('use-strict')
const path = require('path')
const dbJson = require(path.resolve('controllers/dbJson'))

const { PlanemetrieKernel, ElektroKernel } = require(path.resolve(
  'include/system'
))

const { Gluehlampe } = require(path.resolve(
  'src/components/Betriebsmittel/Verschiedenes/Beleuchtung/Lampe/Gluehlampe/Gluehlampe.js'
))

const { readMaterialParameter } = require(path.resolve(
  'src/js/readMaterialParameter.js'
))

const { readKonstante } = require(path.resolve('src/js/readKonstante.js'))

/**TODO: Das Ergebnis stimmt nicht überein ? */
function Beispiel17 (input) {
  const jsonfile = path.resolve('src/json/example/beispiel16.json')

  const Kennzeichnung = dbJson.readJSONFile(
    path.resolve('src/json/kennzeichnung.json')
  )
  const Parameter = input

  const E1 = new Gluehlampe(Kennzeichnung, Parameter, {})
  E1.Parameter.ρM = readMaterialParameter(E1.Parameter.Material, 'ρ').toString()

  E1.Parameter.α20 = readMaterialParameter(
    E1.Parameter.Material,
    'α20'
  ).toString()

  E1.Parameter.δ20 = readKonstante('Vergleichstemperatur').toString()

  const PK = new PlanemetrieKernel()
  const EK = new ElektroKernel()

  PK.parameter({ l: E1.Parameter.l, d: E1.Parameter.d })
  E1.Parameter.Awd = PK.KAd().toString()

  EK.parameter({ ρ: E1.Parameter.ρM, l: E1.Parameter.l, A: E1.Parameter.Awd })
  E1.Parameter.R20 = EK.RρlA().toString()

  EK.parameter({
    R20: E1.Parameter.R20,
    α20: E1.Parameter.α20,
    δ2: E1.Parameter.δ2,
    δ20: E1.Parameter.δ20
  })
  E1.Parameter.R2250 = EK.Rδ().toString()

  dbJson.writeJSONItem(jsonfile, E1)
}
let input = {
  Material: 'Wolfram',
  l: '36.5 cm',
  d: '0.0245 mm',
  δ2: '2250 celsius'
}
Beispiel17(input)
// exports.func = Beispiel17
