require('use-strict')
const path = require('path')
const express = require('express')
const router = express.Router()

const { routerGet } = require(path.resolve('src/js/routerGet.js'))
const { erouter } = require(path.resolve('src/js/erouter.js'))

const R2 = require(path.resolve('include/routenBetriebsmittel'))

/** SECTION Betriebsmittel */
router.get('/', function (req, res) {
  res.render(R2.p2, {
    layout: `${R2.l2}/layout.ejs`
  })
})

/** SECTION  Baugruppen */
routerGet(router, R2.r2_1.toLowerCase(), R2.p2, R2.l2, R2.r2_1)

/** SECTION Baugruppen Zweipole */
routerGet(router, R2.r2_1_1.toLowerCase(), R2.p2, R2.l2, R2.r2_1_1)

/** SECTION Baugruppen Zweipole passiver Zweipol */
routerGet(router, R2.r2_1_1_1.toLowerCase(), R2.p2, R2.l2, R2.r2_1_1_1)

/** !SECTION Betriebsmittel Baugruppen */

/** SECTION  Betriebsmittel Widerstände */
routerGet(router, R2.r2_4.toLowerCase(), R2.p2, R2.l2, R2.r2_4)

/** SECTION Betriebsmittel Widerstände allgemein */
routerGet(
  router,
  '/Widerstaende/Allgemein'.toLowerCase(),
  R2.p2,
  R2.l2,
  'Widerstaende/Allgemein'
)

/** NOTE Beispiel 1.1 */
erouter(router, R2.p2, R2.l2, R2.e, '/Widerstaende/allgemein', R2.b11)

/** SECTION Betriebsmittel Widerstände feldplatten */
routerGet(router, R2.r2_4_2.toLowerCase(), R2.p2, R2.l2, R2.r2_4_2)

/** SECTION Betriebsmittel Widerstände fotowiderstand */
routerGet(router, R2.r2_4_3.toLowerCase(), R2.p2, R2.l2, R2.r2_4_3)

/** SECTION Betriebsmittel Widerstände thermistor */
routerGet(router, R2.r2_4_4.toLowerCase(), R2.p2, R2.l2, R2.r2_4_4)

/** SECTION Betriebsmittel Widerstände varistor */
routerGet(router, R2.r2_4_5.toLowerCase(), R2.p2, R2.l2, R2.r2_4_5)

/** !SECTION Widerstände */

/** SECTION Betriebsmittel Übertragungswege */
routerGet(router, R2.r2_3.toLowerCase(), R2.p2, R2.l2, R2.r2_3)

/** SECTION Betriebsmittel Übertragungswege Leitung */
routerGet(router, R2.r2_3_4.toLowerCase(), R2.p2, R2.l2, R2.r2_3_4)

/** NOTE Betriebsmittel Übertragungswege Leitung Beispiel14  */
erouter(router, R2.p2, R2.l2, R2.e, R2.r2_3_4, R2.b14)
/** !SECTION Betriebsmittel Übertragungswege Leitungen */
/** !SECTION Betriebsmittel Übertragungswege */

module.exports = router
