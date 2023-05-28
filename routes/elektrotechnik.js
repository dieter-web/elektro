require('use-strict')
const path = require('path')
const express = require('express')
const router = express.Router()

const { routerGet } = require(path.resolve('src/js/routerGet.js'))
const { erouter } = require(path.resolve('src/js/erouter.js'))

const eE = path.resolve('src/example/Elektrotechnik')
const vE = 'pages/Elektrotechnik'
const lE = 'layouts/Elektrotechnik'

/** SECTION Elektrotechnik */
router.get('/', function (req, res) {
  res.render(vE, {
    layout: `${lE}/layout.ejs`
  })
})

/** SECTION Gleichspannung */
{
  const str = '/Gleichspannung'
  routerGet(router, str.toLowerCase(), vE, lE, str)
}
/** SECTION Gleichspannung Grundbegriffe */
{
  const str = '/Gleichspannung/Grundbegriffe'
  routerGet(router, str.toLowerCase(), vE, lE, str)
}

/** SECTION Gleichspannung Grundbegriffe Temperaturkoeffizient */
{
  const str1 = '/Gleichspannung/Grundbegriffe/Temperaturkoeffizient'
  routerGet(router, str1.toLowerCase(), vE, lE, str1)

  /** NOTE Aufgabe 1.6 */
  {
    const str2 = '/Aufgabe16'
    erouter(router, vE, lE, eE, str1, str2)
  }

  /** NOTE Übung 1.9 */
  {
    const str2 = '/Uebung19'
    erouter(router, vE, lE, eE, str1, str2)
  }
}
/** !SECTION Gleichspannung Grundbegriffe Temperaturkoeffizient */
/** SECTION Gleichspannung Grundbegriffe Spannung */
{
  const str1 = '/Gleichspannung/Grundbegriffe/Spannung'
  routerGet(router, str1.toLowerCase(), vE, lE, str1)

  /** NOTE Aufgabe 1.1 */
  {
    const str2 = '/Aufgabe11'
    erouter(router, vE, lE, eE, str1, str2)
  }
}
/** !SECTION Gleichspannung Grundbegriffe Spannung */
/** SECTION Gleichspannung Grundbegriffe spezifischer Widerstand */
{
  const str1 = '/Gleichspannung/Grundbegriffe/SpezifischerWiderstand'
  routerGet(router, str1.toLowerCase(), vE, lE, str1)

  /** NOTE Beispiel 1.2 */
  {
    const str2 = '/Beispiel12'
    erouter(router, vE, lE, eE, str1, str2)

    const str3 = '/kennzeichnung'
    router
      .route(router, `${str1}${str2}${str3}`.toLowerCase())
      .get((req, res) => {
        res.render('über die Route Kennzeichnung ausgegeben.')
      })
  }
}
/** !SECTION Gleichspannung Grundbegriffe spezifischer Widerstand */
/** !SECTION Gleichspannung Grundbegriffe */
/** !SECTION Gleichspannung */
/** !SECTION Elektrotechnik */

module.exports = router
