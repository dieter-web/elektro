require('use-strict')
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')
const upload = multer()
const router = express.Router()
const { routerGet } = require(path.resolve('src/js/routerGet'))
const exampleBetriebsmittel = path.resolve('src/example/Betriebsmittel')
const viewBetriebsmittel = 'pages/Betriebsmittel'
const layout = 'layouts/Betriebsmittel/layout.ejs'

routerGet(router, '/', viewBetriebsmittel, layout)

/** SECTION Widerstände */
const routeWiderstaende = '/widerstaende'
const viewWiderstaende = `${viewBetriebsmittel}/Widerstaende`
const layoutWiderstaende = path.resolve(
  'views/layouts/Betriebsmittel/Widerstaende/layout.ejs'
)
routerGet(router, routeWiderstaende, viewWiderstaende, layoutWiderstaende)

// /** NOTE Beispiel 11 */
router
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .route('/widerstaende/beispiel11/aufgabe', upload.array())
  .get((req, res) => {
    res.render('pages/Betriebsmittel/Widerstaende/Beispiel11/aufgabe', {
      layout: 'layouts/Betriebsmittel/Widerstaende/layout.ejs'
    })
  })
  .post((req, res) => {
    const { func } = require(`${exampleBetriebsmittel}/Widerstaende/Beispiel11`)
    res.locals.Aerg = func(req.body)
    res.render('pages/Betriebsmittel/Widerstaende/Beispiel11/ergebnis', {
      layout: 'layouts/Betriebsmittel/Widerstaende/layout.ejs'
    })
  })
/** !SECTION Widerstände */

module.exports = router
