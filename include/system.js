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

const Material = require(path.resolve('src/components/Material/Material.js'))

const { Bauelemente } = require(path.resolve(`${PBauelemente}/Bauelemente.js`))

const { Betriebsmittel } = require(path.resolve(
  `${PBetriebsmittel}/Betriebsmittel.js`
))

const { ElektroKernel } = require(path.resolve(
  `${PElektrotechnik}/gleichspannung/grundbegriffe/kernel.js`
))

const { RohrleitungstechnikKernel } = require(path.resolve(
  `${PRohrleitungstechnik}/kernel.js`
))

const { Rohrleitungen } = require(path.resolve(
  `${PBauelemente}/Rohrleitungen/Rohrleitungen.js`
))

const { Bleirohr } = require(path.resolve(
  `${PBauelemente}/Rohrleitungen/Bleirohre/Bleirohr.js`
))

const { ArithmetikKernel } = require(path.resolve(
  `${PMathematik}/Arithmetik/kernel.js`
))

const { PlanemetrieKernel } = require(path.resolve(
  `${PMathematik}/Planemetrie/kernel.js`
))

const { Glasplatte } = require(path.resolve(
  `${PBauelemente}/Platten/Glasplatte/Glasplatte.js`
))

const { Reihenschaltung } = require(path.resolve(
  `${PBetriebsmittel}/Baugruppen/Zweipole/PassiverZweipol/Reihenschaltung.js`
))

const { Widerstand } = require(path.resolve(
  `${PBetriebsmittel}/Widerstand/Widerstand.js`
))

const { Feldplatte } = require(path.resolve(
  `${PBetriebsmittel}/Widerstand/Feldplatten/Feldplatte.js`
))

const { Fotowiderstand } = require(path.resolve(
  `${PBetriebsmittel}/Widerstand/Fotowiderstand/Fotowiderstand.js`
))

const { Heissleiter } = require(path.resolve(
  `${PBetriebsmittel}/Widerstand/Thermistor/Heissleiter/Heissleiter.js`
))

const { Kaltleiter } = require(path.resolve(
  `${PBetriebsmittel}/Widerstand/Thermistor/Kaltleiter/Kaltleiter.js`
))

const { Varistor } = require(path.resolve(
  `${PBetriebsmittel}/Widerstand/Varistoren/Varistor.js`
))

const { Leitung } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Leitung/Leitung.js`
))

const { Draht } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Draht/Draht.js`
))

const { Stack } = require(path.resolve(
  `${PDatenverarbeitung}/dynamischeDatenstrukturen/listen/stapel/stack.js`
))

exports.Material = Material
exports.Bauelemente = Bauelemente
exports.Betriebsmittel = Betriebsmittel
exports.Rohrleitungen = Rohrleitungen
exports.Bleirohr = Bleirohr
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
exports.Stack = Stack
