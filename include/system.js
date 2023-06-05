const path = require('path')

const Elektrotechnik = 'src/components/Elektrotechnik'
const Mathematik = 'src/components/Mathematik'
const Bauelemente = 'src/components/Bauelemente'
const Betriebsmittel = 'src/components/Betriebsmittel'
const Datenverarbeitung = 'src/components/Datenverarbeitung'

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

const { BEWiderstand } = require(path.resolve(
  `${Betriebsmittel}/Widerstaende/BEWiderstand.js`
))

const { Leitung } = require(path.resolve(
  `${Betriebsmittel}/Uebertragungswege/Leitung/Leitung.js`
))

const { BEDraht } = require(path.resolve(
  `${Betriebsmittel}/Uebertragungswege/Draht/BEDraht.js`
))

const { Stack } = require(path.resolve(
  `${Datenverarbeitung}/dynamischeDatenstrukturen/listen/stapel/stack.js`
))

exports.dbJson = dbJson
exports.ElektroKernel = ElektroKernel
exports.ArithmetikKernel = ArithmetikKernel
exports.PlanemetrieKernel = PlanemetrieKernel
exports.Reihenschaltung = Reihenschaltung
exports.BEWiderstand = BEWiderstand
exports.BEGlasplatte = BEGlasplatte
exports.Leitung = Leitung
exports.BEDraht = BEDraht
exports.Stack = Stack
