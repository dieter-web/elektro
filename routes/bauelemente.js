require('use-strict')
const path = require('path')
const express = require('express')
const router = express.Router()

const { routerGet } = require(path.resolve('src/js/routerGet.js'))
const { erouter } = require(path.resolve('src/js/erouter.js'))

const R3 = require(path.resolve('include/routenBauelemente'))

/** SECTION Bauelemente */
router.get('/', function (req, res) {
  res.render(R3.p3, {
    layout: `${R3.l3}/layout.ejs`
  })
})

/**SECTION Platten */
routerGet(router, R3.r.toLowerCase(), R3.p3, R3.l3, R3.r3_1)
/** SECTION Platten Glasplatten */
routerGet(router, R3.BE1_1.toLowerCase(), R3.p3, R3.l3, R3.r3_1_1)
/** NOTE Übung 1.4 */
erouter(router, R3.p3, R3.l3, R3.e3_1_1, R3.r3_1_1, R3.U14)
/** !SECTION Glasplatten */
/**!SECTION Platten */

module.exports = router
