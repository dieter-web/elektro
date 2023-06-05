const path = require('path')

const dbJson = require(path.resolve('controllers/dbJson'))
const { ElektroKernel } = require(path.resolve(
  'src/components/Elektrotechnik/gleichspannung/grundbegriffe/kernel.js'
))
const { ArithmetikKernel } = require(path.resolve(
  'src/components/Mathematik/Arithmetik/kernel.js'
))
const { Reihenschaltung } = require(path.resolve(
  'src/components/Betriebsmittel/Baugruppen/Zweipole/PassiverZweipol/Reihenschaltung.js'
))
const { BEWiderstand } = require(path.resolve(
  'src/components/Betriebsmittel/Widerstaende/BEWiderstand.js'
))

const { Stack } = require(path.resolve(
  'src/components/Datenverarbeitung/dynamischeDatenstrukturen/listen/stapel/stack.js'
))

exports.dbJson = dbJson
exports.ElektroKernel = ElektroKernel
exports.ArithmetikKernel = ArithmetikKernel
exports.Reihenschaltung = Reihenschaltung
exports.BEWiderstand = BEWiderstand
exports.Stack = Stack
