require('use-strict')
const path = require('path')
const express = require('express')
const router = express.Router()

const { erouter } = require(path.resolve('src/js/erouter.js'))

const eE = path.resolve('src/example/Elektrotechnik')
const vE = 'pages/Elektrotechnik'
const lE = 'layouts/Elektrotechnik'
const str3 = '/aufgabe'
const str4 = '/layout.ejs'
const str5 = '/ergebnis'

/** SECTION Elektrotechnik */
router.get('/', function (req, res) {
  res.render(vE, {
    layout: `${lE}${str4}`
  })
})

/** SECTION Gleichspannung */
{
  const str = '/Gleichspannung'
  router.route(str.toLowerCase()).get((req, res) => {
    res.render(`${vE}${str}`, {
      layout: `${lE}${str}${str4}`
    })
  })
}
/** SECTION Gleichspannung Grundbegriffe */
{
  const str = '/Gleichspannung/Grundbegriffe'
  router.route(str.toLowerCase()).get((req, res) => {
    res.render(`${vE}${str}`, {
      layout: `${lE}${str}${str4}`
    })
  })
}

/** SECTION Gleichspannung Grundbegriffe Temperaturkoeffizient */
{
  const str1 = '/Gleichspannung/Grundbegriffe/Temperaturkoeffizient'
  router.route(str1.toLowerCase()).get((req, res) => {
    res.render(`${vE}${str1}`, {
      layout: `${lE}${str1}${str4}`
    })
  })

  /** NOTE Aufgabe 16 */
  {
    const str2 = '/Aufgabe16'
    erouter(router, vE, lE, eE, str1, str2, str3, str4, str5)
  }
}
/** !SECTION Gleichspannung Grundbegriffe Temperaturkoeffizient */
/** !SECTION Gleichspannung Grundbegriffe */
/** !SECTION Gleichspannung */
/** !SECTION Elektrotechnik */

module.exports = router
