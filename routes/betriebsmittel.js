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
routerGet(router, R2.r2_2, R2.p2, R2.l2)

/** SECTION Baugruppen Zweipole */
routerGet(router, R2.r2_2_1, R2.p2, R2.l2)

/** SECTION Baugruppen Zweipole passiver Zweipol */
routerGet(router, R2.r2_2_1_1, R2.p2, R2.l2)

/** SECTION Baugruppen Zweipole passiver Zweipol gemischte Schaltung */
routerGet(router, R2.r2_2_1_1_1, R2.p2, R2.l2)
/** !SECTION Baugruppen Zweipole passiver Zweipol gemischteSchaltung */

/** SECTION Baugruppen Zweipole passiver Zweipol Kettenschaltung */
routerGet(router, R2.r2_2_1_1_2, R2.p2, R2.l2)
/** !SECTION Baugruppen Zweipole passiver Zweipol Kettenschaltung */

/** SECTION Baugruppen Zweipole passiver Zweipol Parallelschaltung */
routerGet(router, R2.r2_2_1_1_3, R2.p2, R2.l2)
/** !SECTION Baugruppen Zweipole passiver Zweipol Parallelschaltung */

/** SECTION Baugruppen Zweipole passiver Zweipol Reihenschaltung */
routerGet(router, R2.r2_2_1_1_4, R2.p2, R2.l2)

/** NOTE Übung 1.111 */
erouter(router, R2.p2, R2.l2, R2.e, R2.r2_2_1_1_4, R2.u111)

/** !SECTION Baugruppen Zweipole passiver Zweipol Reihenschaltung */

/** !SECTION Baugruppen Zweipole passiver Zweipol */

/** !SECTION Betriebsmittel Baugruppen */

/** SECTION  Betriebsmittel Widerstand */
routerGet(router, R2.r2_27, R2.p2, R2.l2)

/** SECTION Betriebsmittel Widerstand Allgemein */
routerGet(router, R2.r2_27_1, R2.p2, R2.l2)

/** NOTE Beispiel 1.1 */
erouter(router, R2.p2, R2.l2, R2.e, R2.r2_27_1, R2.b11)
/** !SECTION Betriebsmittel Widerstand Allgemein */

/** SECTION Betriebsmittel Widerstand feldplatten */
routerGet(router, R2.r2_27_2, R2.p2, R2.l2)
/** !SECTION Betriebsmittel Widerstand feldplatten */

/** SECTION Betriebsmittel Widerstand fotowiderstand */
routerGet(router, R2.r2_27_3, R2.p2, R2.l2)
/** !SECTION Betriebsmittel Widerstand fotowiderstand */

/** SECTION Betriebsmittel Widerstand thermistor */
routerGet(router, R2.r2_27_4, R2.p2, R2.l2)
/** !SECTION Betriebsmittel Widerstand thermistor */

/** SECTION Betriebsmittel Widerstand varistor */
routerGet(router, R2.r2_27_5, R2.p2, R2.l2)
/** !SECTION Betriebsmittel Widerstand varistor */

/** !SECTION Widerstand */

/** SECTION Betriebsmittel Übertragungswege */
routerGet(router, R2.r2_21, R2.p2, R2.l2)

/** SECTION Betriebsmittel Übertragungswege Leitung */
routerGet(router, R2.r2_21_4, R2.p2, R2.l2)

/** NOTE Betriebsmittel Übertragungswege Leitung Beispiel14  */
erouter(router, R2.p2, R2.l2, R2.e, R2.r2_21_4, R2.b14)
/** !SECTION Betriebsmittel Übertragungswege Leitungen */
/** !SECTION Betriebsmittel Übertragungswege */

module.exports = router
