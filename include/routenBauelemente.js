require('use-strict')
const path = require('path')

// Bauelemente

const e3 = path.resolve('src/example/Bauelemente')
const e3_1 = `${e3}/Platten`
const e3_1_1 = `${e3_1}/Glasplatten`

const p3 = 'pages/Bauelemente'
const l3 = 'layouts/Bauelemente'

const r3 = '/Bauelemente' // localer root '/' !
const r3_1 = '/Platten'
const r3_1_1 = `${r3_1}/Glasplatten`

const u14 = '/Uebung14'

exports.e3 = e3
exports.e3_1 = e3_1
exports.e3_1_1 = e3_1_1

exports.p3 = p3
exports.l3 = l3

exports.r3 = r3
exports.r3_1 = r3_1
exports.r3_1_1 = r3_1_1

exports.u14 = u14
