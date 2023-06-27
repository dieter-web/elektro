require('use-strict')
const path = require(
  'path')
const { dbJson, RohrleitungstechnikKernel, PlanemetrieKernel} = require(path.resolve('include/system'))

// const { RohrleitungstechnikKernel } = require(path.resolve(
//   'src/rohrleitungstechnik/kernel.js'
// ))

// const { PlanemetrieKernel } = require(path.resolve(
//   'src/components/Mathematik/Planemetrie/kernel.js'
// ))

const { BERohr } = require(path.resolve(
  'src/components/Betriebsmittel//Verschiedenes/Rohre/BERohr.js'
))

/**
 * @function Beispiel13
 *
 * Wie lang ist ein Bleirohr, das einen Leitwert von 1285 S hat ?
 * Der Innendurchmesser di beträgt 2.5cm und der Außendurchmesser da 3cm.
 *
 * @param {math.Unit} G - Leitwert
 * @param {math.Unit} di - Rohrinnendurchmesser
 * @param {math.Unit} da - Rohraußendurchmesser
 *  Material = 'Blei', G = "1285 S", d = "2.5 cm", D = "3.0 cm"
 */
function Beispiel13 (input) {
  const ρbl = dbJson.readJSONFile(
    path.resolve('src/json/Tafel11.json')[input.Material].ρ[0]
  )
  const RK = new RohrleitungstechnikKernel()
  const PK = new PlanemetrieKernel()
  const jsonfile = path.resolve('src/json/example/beispiel13.json')

  let Kennzeichnung = {
    '=': {
      Anlage: {
        1: '00',
        2: '00',
        3: '00',
        Trennzeichen: '-',
        4: '00',
        5: '00'
      }
    },
    '+': {
      Ort: {
        Aufstellungsort: {
          1: '01',
          2: '01',
          3: '03',
          4: '04',
          5: '05'
        },
        Trennzeichen: '-',
        Einbauort: {
          6: '06',
          7: '07',
          8: '08',
          9: '09'
        }
      }
    },
    Art: '0E',
    Zaehlnummer: 1,
    Funktion: '00',
    ':': {
      Anschluss: {
        1: '00',
        2: '00'
      }
    }
  }

  const Parameter = {
    Material: input.Material,
    d: input.d,
    D: input.D,
    G: input.G
  }

  let Rohr = new BERohr(Kennzeichnung, Parameter, {})

  PK.parameter({ d: Rohr.Parameter.d, D: Rohr.Parameter.D })
  let Ar = PK.KRADd()

  RK.parameter({ ρ: ρbl, A: Ar, G: Rohr.Parameter.G })
  let l = RK.lAρG()

  let erg = {
    Betriebsmittel: {
      Rohr: Rohr
    },
    Parameter: {
      ρ: ρbl,

      Ar: Ar
    },
    Ergebnis: {
      l: l
    }
  }
  dbJson.writeJSONItem(jsonfile, erg)
  return erg
}

// let input = {
//     "Material": "Blei",
//     "G": "1285 S",
//     "d": "2.5 cm",
//     "D": "3.0 cm"
// };
// console.log( Beispiel13( input ) );
exports.func = Beispiel13
