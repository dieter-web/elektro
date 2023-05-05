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

/** SECTION Elektrotechnik */
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

/** SECTION Gleichspannung Grundbegriffe */
router.route('/gleichspannung/grundbegriffe').get((req, res) => {
  res.render(`${vE}/Gleichspannung/Grundbegriffe`, {
    layout: `${lE}/Gleichspannung/Grundbegriffe/layout.ejs`
  })
})

/** SECTION Gleichspannung Grundbegriffe Temperaturkoeffizient */
router
  .route('/gleichspannung/grundbegriffe/temperaturkoeffizient')
  .get((req, res) => {
    res.render(`${vE}/Gleichspannung/Grundbegriffe/Temperaturkoeffizient`, {
      layout: `${lE}/Gleichspannung/Grundbegriffe/Temperaturkoeffizient/layout.ejs`
    })
  })

/** ANCHOR Aufgabe 16 */
router
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .route(
    `/gleichspannung/grundbegriffe/temperaturkoeffizient/aufgabe16`,
    upload.array()
  )
  .get((req, res) => {
    res.render(
      `${vE}/Gleichspannung/Grundbegriffe/Temperaturkoeffizient/Aufgabe16/aufgabe`,
      {
        layout: `${lE}/Gleichspannung/Grundbegriffe/Temperaturkoeffizient/layout.ejs`
      }
    )
  })
  .post((req, res) => {
    const {
      func
    } = require(`${eE}/Gleichspannung/Grundbegriffe/Temperaturkoeffizient/Aufgabe16`)
    res.locals.Aerg = func(req.body)
    res.render(
      `${vE}/Gleichspannung/Grundbegriffe/Temperaturkoeffizient/Aufgabe16/ergebnis`,
      {
        layout: `${lE}/Gleichspannung/Grundbegriffe/Temperaturkoeffizient/layout.ejs`
      }
    )
  })

/** !SECTION Gleichspannung Grundbegriffe Temperaturkoeffizient */
/** !SECTION Gleichspannung Grundbegriffe */
/** !SECTION Gleichspannung */
/** !SECTION Elektrotechnik */

module.exports = router
