require('use-strict')
const path = require('path')

// Klassenstrukturen
// nicht Visualisierung!!!

const PElektrotechnik = 'src/components/Elektrotechnik'
const PRohrleitungstechnik = 'src/components/Rohrleitungstechnik'
const PMathematik = 'src/components/Mathematik'
const PBauelemente = 'src/components/Bauelemente'
const PBetriebsmittel = 'src/components/Betriebsmittel'
const PDatenverarbeitung = 'src/components/Datenverarbeitung'
const PPhysikalischeChemie = 'src/components/PhysikalischeChemie'

/** SECTION Material */
const Material = require(path.resolve('src/components/Material/Material.js'))
/** !SECTION Material */

/** SECTION Bauelemente */
const { Bauelemente } = require(path.resolve(`${PBauelemente}/Bauelemente.js`))

/** SECTION Platten */
const { Platten } = require(path.resolve(`${PBauelemente}/Platten/Platten.js`))

/** SECTION Platten Glasplatten */
const { Glasplatte } = require(path.resolve(
  `${PBauelemente}/Platten/Glasplatte/Glasplatte.js`
))
/** !SECTION Platten Glasplatten */
/** !SECTION Platten */

/** SECTION Rohrleitungen */

const { Rohrleitungen } = require(path.resolve(
  `${PBauelemente}/Rohrleitungen/Rohrleitungen.js`
))

/** SECTION Rohrleitungen Bleirohre */
const { Bleirohre } = require(path.resolve(
  `${PBauelemente}/Rohrleitungen/Bleirohre/Bleirohre.js`
))
/** !SECTION Rohrleitungen Bleirohre */
/** !SECTION Rohrleitungen */

/** !SECTION Bauelemente */

/** SECTION  Betriebsmittel*/

const { Betriebsmittel } = require(path.resolve(
  `${PBetriebsmittel}/Betriebsmittel.js`
))

/** SECTION Betriebsmittel Baugruppen */
const { Baugruppen } = require(path.resolve(
  `${PBetriebsmittel}/Baugruppen/Baugruppen.js`
))

/** SECTION Betriebsmittel Baugruppen Zweipole */
const { Zweipole } = require(path.resolve(
  `${PBetriebsmittel}/Baugruppen/Zweipole/Zweipole.js`
))

/** SECTION Betriebsmittel Baugruppen Zweipole PassiverZweipol */
const { PassiverZweipol } = require(path.resolve(
  `${PBetriebsmittel}/Baugruppen/Zweipole/PassiverZweipol/PassiverZweipol.js`
))

/** SECTION Betriebsmittel Baugruppen Zweipole Reihenschaltung */
const { Reihenschaltung } = require(path.resolve(
  `${PBetriebsmittel}/Baugruppen/Zweipole/PassiverZweipol/Reihenschaltung.js`
))
/** !SECTION Betriebsmittel Baugruppen Zweipole Reihenschaltung */

/** !SECTION Betriebsmittel Baugruppen Zweipole PassiverZweipol */

/** !SECTION Betriebsmittel Baugruppen Zweipole */

/** !SECTION Betriebsmittel Baugruppen */

/** SECTION  Betriebsmittel Widerstand*/
const { Widerstand } = require(path.resolve(
  `${PBetriebsmittel}/Widerstand/Widerstand.js`
))

/** SECTION Betriebsmittel Widerstand Feldplatte */
const { Feldplatte } = require(path.resolve(
  `${PBetriebsmittel}/Widerstand/Feldplatten/Feldplatte.js`
))
/** !SECTION Betriebsmittel Widerstand Feldplatte */

/** SECTION Betriebsmittel Widerstand Fotowiderstand */
const { Fotowiderstand } = require(path.resolve(
  `${PBetriebsmittel}/Widerstand/Fotowiderstand/Fotowiderstand.js`
))
/** !SECTION Betriebsmittel Widerstand Fotowiderstand */

/** SECTION Betriebsmittel Widerstand Heissleiter */
const { Heissleiter } = require(path.resolve(
  `${PBetriebsmittel}/Widerstand/Thermistor/Heissleiter/Heissleiter.js`
))
/** !SECTION Betriebsmittel Widerstand Heissleiter */

/** SECTION Betriebsmittel Widerstand Kaltleiter */
const { Kaltleiter } = require(path.resolve(
  `${PBetriebsmittel}/Widerstand/Thermistor/Kaltleiter/Kaltleiter.js`
))
/** !SECTION Betriebsmittel Widerstand Kaltleiter */

/** SECTION Betriebsmittel Widerstand Varistor */
const { Varistor } = require(path.resolve(
  `${PBetriebsmittel}/Widerstand/Varistoren/Varistor.js`
))
/** !SECTION Betriebsmittel Widerstand Varistor */

/** !SECTION Betriebsmittel Widerstand*/

/** SECTION  Betriebsmittel Uebertragungswege */

/** SECTION Betriebsmittel Uebertragungswege Leitung */
const { Leitung } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Leitung/Leitung.js`
))
/** !SECTION Betriebsmittel Uebertragungswege Leitung */

/** SECTION Betriebsmittel Uebertragungswege Draht */
const { Draht } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Draht/Draht.js`
))
/** !SECTION Betriebsmittel Uebertragungswege Draht */

/** !SECTION Betriebsmittel Uebertragungswege */

/** SECTION Betriebsmittel Induktivitaet */

const { Induktivitaet } = require(path.resolve(
  `${PBetriebsmittel}/Induktivitaet/Induktivitaet.js`
))

/** SECTION Betriebsmittel Spule */
const { Spule } = require(path.resolve(
  `${PBetriebsmittel}/Induktivitaet/Spule/Spule.js`
))

const { Spulenkoerper } = require(path.resolve(
  `${PBetriebsmittel}/Induktivitaet/Spule/Spule.js`
))

/** SECTION Betriebsmittel Spule  SpuleOhneKern */
const { SpuleOhneKern } = require(path.resolve(
  `${PBetriebsmittel}/Induktivitaet/Spule/SpuleOhneKern/SpuleOhneKern.js`
))

/** SECTION Betriebsmittel Spule MehrlagigeSpule */
const { MehrlagigeSpule } = require(path.resolve(
  `${PBetriebsmittel}/Induktivitaet/Spule/SpuleOhneKern/MehrlagigeSpule/MehrlagigeSpule.js`
))
/** !SECTION Betriebsmittel Induktivitaet Spule MehrlagigeSpule */

/** !SECTION Betriebsmittel Induktivitaet Spule SpuleOhneKern */

/** !SECTION Betriebsmittel Induktivitaet Spule */

/** !SECTION Betriebsmittel Induktivitaet */

/** SECTION Verschiedens */
const { Verschiedenes } = require(path.resolve(
  `${PBetriebsmittel}/Verschiedenes/Verschiedenes.js`
))
/** SECTION Verschiedenes Elektrode */
const { Elektrode } = require(path.resolve(
  `${PBetriebsmittel}/Verschiedenes/Elektrode/Elektrode.js`
))

/** !SECTION Verschiedenes Elektrode */

/** !SECTION Verschiedens */

/** !SECTION Betriebsmittel */

/** SECTION PhysikalischeChemie */
const { PhysikalischeChemie } = require(path.resolve(
  `${PPhysikalischeChemie}/PhysikalischeChemie.js`
))

/** SECTION PhysikalischeChemie Elektrochemie */
const { Elektrochemie } = require(path.resolve(
  `${PPhysikalischeChemie}/Elektrochemie/Elektrochemie.js`
))

/** SECTION PhysikalischeChemie Elektrochemie Elektrolyt */
const { Elektrolyt } = require(path.resolve(
  `${PPhysikalischeChemie}/Elektrochemie/Elektrolyt/Elektrolyt.js`
))

/** !SECTION PhysikalischeChemie Elektrochemie Elektrolyt */

/** !SECTION PhysikalischeChemie Elektrochemie */

/** !SECTION Physikalische Chemie */

const { ElektroKernel } = require(path.resolve(
  `${PElektrotechnik}/gleichspannung/grundbegriffe/kernel.js`
))

const { RohrleitungstechnikKernel } = require(path.resolve(
  `${PRohrleitungstechnik}/kernel.js`
))

// const { Rohrleitungen } = require(path.resolve(
//   `${PBauelemente}/Rohrleitungen/Rohrleitungen.js`
// ))

// const { Bleirohr } = require(path.resolve(
//   `${PBauelemente}/Rohrleitungen/Bleirohre/Bleirohr.js`
// ))

const { ArithmetikKernel } = require(path.resolve(
  `${PMathematik}/Arithmetik/kernel.js`
))

const { PlanemetrieKernel } = require(path.resolve(
  `${PMathematik}/Planemetrie/kernel.js`
))

const { Stack } = require(path.resolve(
  `${PDatenverarbeitung}/dynamischeDatenstrukturen/listen/stapel/stack.js`
))

exports.Material = Material
exports.Bauelemente = Bauelemente
exports.Betriebsmittel = Betriebsmittel
exports.Baugruppen = Baugruppen
exports.Zweipole = Zweipole
exports.PassiverZweipol = PassiverZweipol
exports.Rohrleitungen = Rohrleitungen
exports.Bleirohre = Bleirohre
exports.ElektroKernel = ElektroKernel
exports.ArithmetikKernel = ArithmetikKernel
exports.PlanemetrieKernel = PlanemetrieKernel
exports.RohrleitungstechnikKernel = RohrleitungstechnikKernel
exports.Reihenschaltung = Reihenschaltung
exports.Widerstand = Widerstand
exports.Feldplatte = Feldplatte
exports.Fotowiderstand = Fotowiderstand
exports.Heissleiter = Heissleiter
exports.Kaltleiter = Kaltleiter
exports.Varistor = Varistor
exports.Glasplatte = Glasplatte
exports.Leitung = Leitung
exports.Draht = Draht
exports.Induktivitaet = Induktivitaet
exports.Spule = Spule
exports.Spulenkoerper = Spulenkoerper
exports.SpuleOhneKern = SpuleOhneKern
exports.MehrlagigeSpule = MehrlagigeSpule
exports.PhysikallischeChemie = PhysikalischeChemie
exports.Elektrochemie = Elektrochemie
exports.Elektrolyt = Elektrolyt
exports.Verschiedenes = Verschiedenes
exports.Elektrode = Elektrode
exports.Stack = Stack
