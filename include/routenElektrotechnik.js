require('use-strict')
const path = require('path')

// Elektrotechnik

const e1 = path.resolve('src/example/Elektrotechnik') //Example Elektrotechnik == e1
const p1 = 'pages/Elektrotechnik' // Page
const l1 = 'layouts/Elektrotechnik' // Layout

const r1 = '/Gleichspannung' // Route elektrotechnik/gleichspannung
const r1_1 = `${r1}/Grundbegriffe`
const r1_1_1 = `${r1_1}/Temperaturkoeffizient`
const r1_1_2 = `${r1_1}/Spannung`
const r1_1_3 = `${r1_1}/SpezifischerWiderstand`

const a11 = '/Aufgabe11'
const a16 = '/Aufgabe16'

const b12 = '/Beispiel12'

const u19 = '/Uebung19'

exports.e1 = e1
exports.p1 = p1
exports.l1 = l1

exports.r1 = r1
exports.r1_1 = r1_1
exports.r1_1_2 = r1_1_2
exports.r1_1_1 = r1_1_1
exports.r1_1_3 = r1_1_3

exports.a11 = a11
exports.a16 = a16

exports.b12 = b12

exports.u19 = u19
