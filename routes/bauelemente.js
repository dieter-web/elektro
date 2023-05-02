require('use-strict')
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')
const upload = multer()
const router = express.Router()

const exampleBauelemente = path.resolve('src/example/Bauelemente')
const viewBauelemente = 'pages/Bauelemente'
const layout = 'layouts/Bauelemente/layout.ejs'

router.get('/', function (req, res) {
  res.render(viewBauelemente, {
    layout: layout
  })
})

/**SECTION Platten */

router.route('/platten').get((req, res) => {
  res.render('pages/Bauelemente/Platten', {
    layout: 'layouts/Bauelemente/Platten/layout.ejs'
  })
})

/**SECTION Glasplatten */
router.route('/platten/glasplatten').get((req, res) => {
  res.render('pages/Bauelemente/Platten/Glasplatten', {
    layout: 'layouts/Bauelemente/Platten/Glasplatten/layout.ejs'
  })
})

/** NOTE Übung 1.4 */
router
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .route('/platten/glasplatten/uebung14/aufgabe', upload.array())
  .get((req, res) => {
    res.render('pages/Bauelemente/Platten/Glasplatten/Uebung14/aufgabe', {
      layout: 'layouts/Bauelemente/Platten/Glasplatten/layout.ejs'
    })
  })
  .post((req, res) => {
    const { func } = require(`${exampleBauelemente}/Uebung14`)
    res.locals.Aerg = func(req.body)
    res.render('pages/Bauelemente/Platten/Glasplatten/Uebung14/ergebnis', {
      layout: 'layouts/Bauelemente/Platten/Glasplatten/layout.ejs'
    })
  })

// /**!SECTION */
// /**!SECTION */

module.exports = router
