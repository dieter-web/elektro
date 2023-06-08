require('use-strict')
const path = require('path')
const express = require('express')
const router = express.Router()

const { routerGet } = require(path.resolve('src/js/routerGet.js'))
const { erouter } = require(path.resolve('src/js/erouter.js'))

const er = require(path.resolve('include/routenElektrotechnik.js'))

/** SECTION Elektrotechnik */
router.get('/', function (req, res) {
  res.render(er.vE, {
    layout: `${er.lE}/layout.ejs`
  })
})

/** SECTION Gleichspannung */
routerGet(router, er.Gs.toLowerCase(), er.vE, er.lE, er.Gs)

/** SECTION Gleichspannung Grundbegriffe */
routerGet(router, er.Gs_Gb.toLowerCase(), er.vE, er.lE, er.Gs_Gb)

/** SECTION Gleichspannung Grundbegriffe Temperaturkoeffizient */
routerGet(router, er.Gs_Gb_Tk.toLowerCase(), er.vE, er.lE, er.Gs_Gb_Tk)

/** NOTE Aufgabe 1.6 */
erouter(router, er.vE, er.lE, er.eE, er.Gs_Gb_Tk, er.a16)

/** NOTE Übung 1.9 */
erouter(router, er.vE, er.lE, er.eE, er.Gs_Gb_Tk, er.u19)

/** !SECTION Gleichspannung Grundbegriffe Temperaturkoeffizient */

/** SECTION Gleichspannung Grundbegriffe Spannung */
routerGet(router, er.Gs_Gb_Sp.toLowerCase(), er.vE, er.lE, er.Gs_Gb_Sp)

/** NOTE Aufgabe 1.1 */
erouter(router, er.vE, er.lE, er.eE, er.Gs_Gr_Sp, er.a11)

/** !SECTION Gleichspannung Grundbegriffe Spannung */

/** SECTION Gleichspannung Grundbegriffe spezifischer Widerstand */
routerGet(router, er.Gs_Gb_SpWi.toLowerCase(), er.vE, er.lE, er.Gs_Gb_SpWi)

/** NOTE Beispiel 1.2 */
erouter(router, er.vE, er.lE, er.eE, er.Gs_Gb_SpWi, er.b12)

/** !SECTION Gleichspannung Grundbegriffe spezifischer Widerstand */
/** !SECTION Gleichspannung Grundbegriffe */
/** !SECTION Gleichspannung */
/** !SECTION Elektrotechnik */

module.exports = router
