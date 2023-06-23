const path = require('path')

// Klassenstrukturen
// nicht Visualisierung!!!

const Elektrotechnik = 'src/components/Elektrotechnik'
const Mathematik = 'src/components/Mathematik'
const Bauelemente = 'src/components/Bauelemente'
const Betriebsmittel = 'src/components/Betriebsmittel'
const Datenverarbeitung = 'src/components/Datenverarbeitung'

//TODO: vieleicht irgendwann mal so? :  function include(name){ }

const dbJson = require(path.resolve('controllers/dbJson'))

const { ElektroKernel } = require(path.resolve(
  `${Elektrotechnik}/gleichspannung/grundbegriffe/kernel.js`
))
const { ArithmetikKernel } = require(path.resolve(
  `${Mathematik}/Arithmetik/kernel.js`
))

const { PlanemetrieKernel } = require(path.resolve(
  `${Mathematik}/Planemetrie/kernel.js`
))

const { BEGlasplatte } = require(path.resolve(
  `${Bauelemente}/Platten/Glasplatte/Glasplatte.js`
))

const { Reihenschaltung } = require(path.resolve(
  `${Betriebsmittel}/Baugruppen/Zweipole/PassiverZweipol/Reihenschaltung.js`
))

const { Widerstaende } = require(path.resolve(
  `${Betriebsmittel}/Widerstaende/Widerstaende.js`
))

const { Widerstand } = require(path.resolve(
  `${Betriebsmittel}/Widerstaende/Allgemein/Widerstand.js`
))

const { Leitung } = require(path.resolve(
  `${Betriebsmittel}/Uebertragungswege/Leitung/Leitung.js`
))

const { Draht } = require(path.resolve(
  `${Betriebsmittel}/Uebertragungswege/Draht/Draht.js`
))

const { Stack } = require(path.resolve(
  `${Datenverarbeitung}/dynamischeDatenstrukturen/listen/stapel/stack.js`
))

exports.dbJson = dbJson
exports.ElektroKernel = ElektroKernel
exports.ArithmetikKernel = ArithmetikKernel
exports.PlanemetrieKernel = PlanemetrieKernel
exports.Reihenschaltung = Reihenschaltung
exports.Widerstaende = Widerstaende
exports.Widerstand = Widerstand
exports.BEGlasplatte = BEGlasplatte
exports.Leitung = Leitung
exports.Draht = Draht
exports.Stack = Stack
