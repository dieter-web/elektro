require('use-strict')
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')
const upload = multer()
const router = express.Router()

const eB = path.resolve('src/example/Bauelemente')
const vB = 'pages/Bauelemente'
const lB = 'layouts/Bauelemente'

router.get('/', function (req, res) {
  res.render(vB, {
    layout: `${lB}/layout.ejs`
  })
})

/**SECTION Platten */

router.route('/platten').get((req, res) => {
  res.render(`${vB}/Platten`, {
    layout: `${lB}/Platten/layout.ejs`
  })
})

/** ANCHOR Glasplatten */
router.route('/platten/glasplatten').get((req, res) => {
  res.render(`${vB}/Platten/Glasplatten`, {
    layout: `${lB}/Platten/Glasplatten/layout.ejs`
  })
})

/** NOTE Übung 1.4 */
router
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .route('/platten/glasplatten/uebung14/aufgabe', upload.array())
  .get((req, res) => {
    res.render(`${vB}/Platten/Glasplatten/Uebung14/aufgabe`, {
      layout: `${lB}/Platten/Glasplatten/layout.ejs`
    })
  })
  .post((req, res) => {
    const { func } = require(`${eB}/Uebung14`)
    res.locals.Aerg = func(req.body)
    res.render(`${vB}/Platten/Glasplatten/Uebung14/ergebnis`, {
      layout: `${lB}/Platten/Glasplatten/layout.ejs`
    })
  })

/**!SECTION Platten */

module.exports = router
