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

/** SECTION Gleichspannung */
{
  const str = '/Gleichspannung'

  router.route(str.toLowerCase()).get((req, res) => {
    res.render(`${vE}${str}`, {
      layout: `${lE}${str}/layout.ejs`
    })
  })
}
/** SECTION Gleichspannung Grundbegriffe */
{
  const str = '/Gleichspannung/Grundbegriffe'
  router.route(str.toLowerCase()).get((req, res) => {
    res.render(`${vE}${str}`, {
      layout: `${lE}${str}/layout.ejs`
    })
  })
}

/** SECTION Gleichspannung Grundbegriffe Temperaturkoeffizient */
{
  const str1 = '/Gleichspannung/Grundbegriffe/Temperaturkoeffizient'
  router.route(str1.toLowerCase()).get((req, res) => {
    res.render(`${vE}${str1}`, {
      layout: `${lE}${str1}/layout.ejs`
    })
  })

  /** NOTE Aufgabe 16 */
  {
    const str2 = '/Aufgabe16'
    const str3 = '/aufgabe'
    const str4 = '/layout.ejs'
    const str5 = '/ergebnis'
    router
      .use(bodyParser.json())
      .use(bodyParser.urlencoded({ extended: true }))
      .route(`${str1}${str2}`.toLowerCase(), upload.array())
      .get((req, res) => {
        res.render(`${vE}${str1}${str2}${str3}`, {
          layout: `${lE}${str1}${str4}`
        })
      })
      .post((req, res) => {
        const { func } = require(`${eE}${str1}${str2}`)
        res.locals.Aerg = func(req.body)
        res.render(`${vE}${str1}${str2}${str5}`, {
          layout: `${lE}${str1}${str4}`
        })
      })
  }
}
/** !SECTION Gleichspannung Grundbegriffe Temperaturkoeffizient */
/** !SECTION Gleichspannung Grundbegriffe */
/** !SECTION Gleichspannung */
/** !SECTION Elektrotechnik */

module.exports = router
