require('use-strict')
const path = require('path')
const express = require('express')
const router = express.Router()

const { routerGet } = require(path.resolve('src/js/routerGet.js'))
const { erouter } = require(path.resolve('src/js/erouter.js'))

const R1 = require(path.resolve('include/routenElektrotechnik.js'))

/** SECTION Elektrotechnik */
router.get('/', function (req, res) {
  res.render(R1.p, {
    layout: `${R1.l}/layout.ejs`,
    menu: 'Elektrotechnik'
  })
})

/** SECTION Elektrotechnik Gleichspannung */
routerGet(router, R1.r1, R1.p, R1.l)

/** SECTION Elektrotechnik Gleichspannung Grundbegriffe */
routerGet(router, R1.r1_1, R1.p, R1.l)

/** SECTION Gleichspannung Grundbegriffe Temperaturkoeffizient */
routerGet(router, R1.r1_1_1, R1.p, R1.l)

/** NOTE Aufgabe 1.6 */
erouter(router, R1.p, R1.l, R1.e, R1.r1_1_1, R1.a16)

/** NOTE Übung 1.9 */
erouter(router, R1.p, R1.l, R1.e, R1.r1_1_1, R1.u19)

/** !SECTION Gleichspannung Grundbegriffe Temperaturkoeffizient */

/** SECTION Gleichspannung Grundbegriffe Spannung */
routerGet(router, R1.r1_1_2, R1.p, R1.l)

/** NOTE Aufgabe 1.1 */
erouter(router, R1.p, R1.l, R1.e, R1.r1_1_2, R1.a11)

/** !SECTION Gleichspannung Grundbegriffe Spannung */

/** SECTION Gleichspannung Grundbegriffe spezifischer Widerstand */
routerGet(router, R1.r1_1_3, R1.p, R1.l)

/** NOTE Beispiel 1.2 */
erouter(router, R1.p, R1.l, R1.e, R1.r1_1_3, R1.b12)

/** !SECTION Gleichspannung Grundbegriffe spezifischer Widerstand */
/** !SECTION Gleichspannung Grundbegriffe */
/** !SECTION Gleichspannung */
/** !SECTION Elektrotechnik */

module.exports = router
