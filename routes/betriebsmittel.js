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

/** NOTE Beispiel 1.1 */
erouter(router, R2.p2, R2.l2, R2.e, R2.r2_4, R2.b11)
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
