require('use-strict')
const path = require('path')

// Betriebsmittel

const e2 = path.resolve('src/example/Betriebsmittel')
const e2_1 = `${e2}/Baugruppen`
const e2_2 = `${e2}/Kondensatoren`
const e2_3 = `${e2}/Uebertragungswege`
const e2_3_1 = `${e2_3}/Antennen`
const e2_3_2 = `${e2_3}/Draht`
const e2_3_3 = `${e2_3}/Kabel`
const e2_3_4 = `${e2_3}/Leitungen`
const e2_3_5 = `${e2_3}/Sammelschiene`
const e2_4 = `${e2}`

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

const b11 = '/Beispiel11'
const b14 = '/Beispiel14'

exports.e2 = e2
exports.e2_1 = e2_1
exports.e2_2 = e2_2
exports.e2_3 = e2_3
exports.e2_3_1 = e2_3_1
exports.e2_3_2 = e2_3_2
exports.e2_3_3 = e2_3_3
exports.e2_3_4 = e2_3_4
exports.e2_3_5 = e2_3_5
exports.e2_4 = e2_4
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
exports.b11 = b11
exports.b14 = b14
