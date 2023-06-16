require('use-strict')
const path = require('path')

// Elektrotechnik

const e = path.resolve('src/example') //Example Elektrotechnik == e1
const p = 'pages/Elektrotechnik' // Page
const l = 'layouts/Elektrotechnik' // Layout

const r1 = '/Gleichspannung' // Route elektrotechnik/gleichspannung
const r1_1 = `${r1}/Grundbegriffe`
const r1_1_1 = `${r1_1}/Temperaturkoeffizient`
const r1_1_2 = `${r1_1}/Spannung`
const r1_1_3 = `${r1_1}/SpezifischerWiderstand`

const a11 = '/Aufgabe11'
const a16 = '/Aufgabe16'

const b12 = '/Beispiel12'

const u19 = '/Uebung19'

exports.e = e
exports.p = p
exports.l = l

exports.r1 = r1
exports.r1_1 = r1_1
exports.r1_1_2 = r1_1_2
exports.r1_1_1 = r1_1_1
exports.r1_1_3 = r1_1_3

exports.a11 = a11
exports.a16 = a16

exports.b12 = b12

exports.u19 = u19
