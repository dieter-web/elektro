require('use-strict')
const path = require('path')

// Elektrotechnik

const eE = path.resolve('src/example/Elektrotechnik')
const vE = 'pages/Elektrotechnik'
const lE = 'layouts/Elektrotechnik'

const Gs = '/Gleichspannung'
const Gs_Gb = `${Gs}/Grundbegriffe`
const Gs_Gb_Tk = `${Gs_Gb}/Temperaturkoeffizient`
const Gs_Gb_Sp = `${Gs_Gb}/Spannung`
const Gs_Gb_SpWi = `${Gs_Gb}/SpezifischerWiderstand`

const a11 = '/Aufgabe11'
const a16 = '/Aufgabe16'
const b12 = '/Beispiel12'
const u19 = '/Uebung19'

exports.eE = eE
exports.vE = vE
exports.lE = lE
exports.Gs = Gs
exports.Gs_Gb = Gs_Gb
exports.Gs_Gb_Sp = Gs_Gb_Sp
exports.Gs_Gb_Tk = Gs_Gb_Tk
exports.Gs_Gb_SpWi = Gs_Gb_SpWi

exports.a11 = a11
exports.b12 = b12
exports.a16 = a16
exports.u19 = u19
