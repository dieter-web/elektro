require('use-strict')
const path = require('path')

// Betriebsmittel

const e = path.resolve('src/example')

const p2 = 'pages/Betriebsmittel'
const l2 = 'layouts/Betriebsmittel'

const r2 = '/Betriebsmittel'
const r2_1 = '/Baugruppen'
const r2_1_1 = `${r2_1}/Zweipole`
const r2_1_1_1 = `${r2_1_1}/passiverZweipol`

const r2_2 = '/Kondensatoren'

const r2_3 = '/Uebertragungswege'
const r2_3_1 = `${r2_3}/Antennen`
const r2_3_2 = `${r2_3}/Draht`
const r2_3_3 = `${r2_3}/Kabel`
const r2_3_4 = `${r2_3}/Leitung`
const r2_3_5 = `${r2_3}/Sammelschiene`

const r2_4 = '/Widerstaende'
const r2_4_1 = `${r2_4}/allgemein`
const r2_4_2 = `${r2_4}/feldplatten`
const r2_4_3 = `${r2_4}/fotowiderstand`
const r2_4_4 = `${r2_4}/thermistor`
const r2_4_5 = `${r2_4}/varistor`

const b11 = '/Beispiel11'
const b14 = '/Beispiel14'

exports.e = e

exports.p2 = p2
exports.l2 = l2
exports.r2 = r2

exports.r2_1 = r2_1
exports.r2_1_1 = r2_1_1
exports.r2_1_1_1 = r2_1_1_1

exports.r2_2 = r2_2

exports.r2_3 = r2_3

exports.r2_3_1 = r2_3_1
exports.r2_3_2 = r2_3_2
exports.r2_3_3 = r2_3_3
exports.r2_3_4 = r2_3_4
exports.r2_3_5 = r2_3_5

exports.r2_4 = r2_4
exports.r2_4_1 = r2_4_1
exports.r2_4_2 = r2_4_2
exports.r2_4_3 = r2_4_3
exports.r2_4_4 = r2_4_4
exports.r2_4_5 = r2_4_5

exports.b11 = b11
exports.b14 = b14
