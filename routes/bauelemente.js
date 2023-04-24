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

const exampleBauelemente = path.resolve('src/example/Bauelemente')
const viewBauelemente = 'pages/Bauelemente'
const layout = path.resolve('views/layouts/Bauelemente/layout.ejs')

routerGet(router, '/', viewBauelemente, layout)

/**SECTION Platten */
const routePlatten = '/platten'
const viewPlatten = `${viewBauelemente}/Platten`
const layoutPlatten = path.resolve(
  'views/layouts/Bauelemente/Platten/layout.ejs'
)

routerGet(router, routePlatten, viewPlatten, layoutPlatten)

/**SECTION Glasplatten */
const routeGlasplatten = `${routePlatten}/glasplatten}`
const viewGlasplatten = `${viewPlatten}/Glasplatten}`
const layoutGlasplatten = path.resolve(
  'views/layouts/Bauelemente/Platten/Glasplatten/layout.ejs'
)

routerGet(router, routeGlasplatten, viewGlasplatten, layoutGlasplatten)

/** NOTE Übung 1.4 */
routerGet(
  router,
  `${routeGlasplatten}/uebung14/aufgabe`,
  `${viewGlasplatten}/Uebung14/aufgabe`,
  layoutGlasplatten
)
routerPost(
  router,
  `${routeGlasplatten}/uebung14/aufgabe`,
  `${viewGlasplatten}/Uebung14/ergebnis`,
  `${exampleBauelemente}/Uebung14`,
  layoutGlasplatten
)
/**!SECTION */
/**!SECTION */

module.exports = router
