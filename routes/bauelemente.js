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

/**SECTION Bauelemente Platten */
routerGet(router, R3.r3.toLowerCase(), R3.p3, R3.l3, R3.r3)

/** SECTION Bauelemente Platten Glasplatten */
routerGet(router, R3.r3_1.toLowerCase(), R3.p3, R3.l3, R3.r3_1)

/** NOTE Übung 1.4 */
erouter(router, R3.p3, R3.l3, R3.e3, R3.r3_1, R3.u14)
/** !SECTION Glasplatten */
/**!SECTION Platten */

module.exports = router
