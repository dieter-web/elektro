require('use-strict')
const path = require('path')
const express = require('express')
const router = express.Router()

const { routerGet } = require(path.resolve('src/js/routerGet.js'))
const { erouter } = require(path.resolve('src/js/erouter.js'))

const R4 = require(path.resolve('include/routenPhysikalischechemie.js'))

/** SECTION PhysikalischeChemie */

router.get('/', function (req, res) {
  res.render(R4.p, {
    layout: `${R4.l}/layout.ejs`,
    menu: 'PhysikalischeChemie'
  })
})

/** SECTION PhysikalischeChemie Elektrochemie */
routerGet(router, R4.r4, R4.p, R4.l)

/** SECTION PhysikalischeChemie Elektrochemie Elektrolyt */
routerGet(router, R4.r4_1, R4.p, R4.l)

/** NOTE Beispiel 1.5 */
erouter(router, R4.p, R4.l, R4.e, R4.r4_1, R4.b15)

/** !SECTION PhysikalischeChemie Elektrochemie Elektrolyt */

/** !SECTION PhysikalischeChemie Elektrochemie */

/** !SECTION PhysikalischeChemie */
module.exports = router
