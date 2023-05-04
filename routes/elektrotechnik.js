require('use-strict')
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')
const upload = multer()
const router = express.Router()

const eE = path.resolve('src/example/Elektrotechnik')
const vE = 'pages/Elektrotechnik'
const lE = 'layouts/Elektrotechnik'

router.get('/', function (req, res) {
  res.render(vE, {
    layout: `${lE}/layout.ejs`
  })
})

/**SECTION Gleichspannung */

router.route('/gleichspannung').get((req, res) => {
  res.render(`${vE}/Gleichspannung`, {
    layout: `${lE}/Gleichspannung/layout.ejs`
  })
})

/** SECTION Grundbegriffe */
router.route('/gleichspannung/grundbegriffe').get((req, res) => {
  res.render(`${vE}/Gleichspannung/Grundbegriffe`, {
    layout: `${lE}/Gleichspannung/Grundbegriffe/layout.ejs`
  })
})

/** ANCHOR Temperaturkoeffizient */
router
  .route('/gleichspannung/grundbegriffe/temperaturkoeffizient')
  .get((req, res) => {
    res.render(`${vE}/Gleichspannung/Grundbegriffe/Temperaturkoeffizient`, {
      layout: `${lE}/Gleichspannung/Grundbegriffe/Temperaturkoeffizient/layout.ejs`
    })
  })

/** ANCHOR Aufgabe 16 */
/** TODO Hier weitermachen */

/** !SECTION Grundbegriffe */
/** !SECTION Gleichspannung */

module.exports = router
