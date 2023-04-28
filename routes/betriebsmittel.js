require('use-strict')
const path = require('path')
const express = require('express')

const { routerGet } = require(path.resolve('src/js/routerGet'))
const { routerPost } = require(path.resolve('src/js/routerPost'))

const routerOptions = {
  caseSensitive: true,
  mergeParams: false,
  strict: true
}
const router = express.Router(routerOptions)

const exampleBetriebsmittel = path.resolve('src/example/Betriebsmittel')
const viewBetriebsmittel = 'pages/Betriebsmittel'
const layout = path.resolve('views/layouts/Betriebsmittel/layout.ejs')

// route /betriebsmittel
routerGet(router, '/', viewBetriebsmittel, layout)

/** SECTION Widerstände */
const routeWiderstaende = '/widerstaende'
const viewWiderstaende = `${viewBetriebsmittel}/Widerstaende`
const layoutWiderstaende = path.resolve(
  'views/layouts/Betriebsmittel/Widerstaende/layout.ejs'
)
routerGet(router, routeWiderstaende, viewWiderstaende, layoutWiderstaende)

/** NOTE Beispiel 11 */
routerGet(
  router,
  `${routeWiderstaende}/beispiel11/aufgabe`,
  `${viewWiderstaende}/Beispiel11/aufgabe`,
  path.resolve(
    'views/layouts/Betriebsmittel/Widerstaende/Beispiel11/layout.ejs'
  )
)
routerPost(
  router,
  `${routeWiderstaende}/beispiel11/aufgabe`,
  `${viewWiderstaende}/Beispiel11/ergebnis`,
  `${exampleBetriebsmittel}/Widerstaende/Beispiel11`,
  path.resolve(
    'views/layouts/Betriebsmittel/Widerstaende/Beispiel11/layout.ejs'
  )
)

/** !SECTION Widerstände */

module.exports = router
