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
}
/** !SECTION Gleichspannung Grundbegriffe Temperaturkoeffizient */
/** !SECTION Gleichspannung Grundbegriffe */
/** !SECTION Gleichspannung */
/** !SECTION Elektrotechnik */

module.exports = router
