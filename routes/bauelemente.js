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
routerGet(router, R3.r3_40, R3.p3, R3.l3)

/** SECTION Bauelemente Platten Glasplatten */
routerGet(router, R3.r3_40_1, R3.p3, R3.l3)

/** NOTE Übung 1.4 */
erouter(router, R3.p3, R3.l3, R3.e, R3.r3_40_1, R3.u14)
/** !SECTION Bauelemente Platten Glasplatten */
/**!SECTION Bauelemente Platten */

/** SECTION Bauelemente Rohrleitungen r3_42 */
routerGet(router, R3.r3_42, R3.p3, R3.l3)

/** SECTION Bauelemente Rohrleitungen Bleirohre r3_42_3 */
routerGet(router, R3.r3_42_3, R3.p3, R3.l3)

/** NOTE Beispiel 1.3 */
erouter(router, R3.p3, R3.l3, R3.e, R3.r3_42_3, R3.b13)

/** !SECTION Bauelemente Rohrleitungen Bleirohre r3_42_3 */

/** !SECTION Bauelemente Rohrleitungen r3_42 */

module.exports = router
