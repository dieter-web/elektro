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
routerGet(
  router,
  `${routePlatten}/glasplatten`,
  `${viewPlatten}/Glasplatten`,
  path.resolve('views/layouts/Bauelemente/Platten/Glasplatten/layout.ejs')
)

/** NOTE Übung 1.4 */
routerGet(
  router,
  `${routePlatten}/glasplatten/uebung14/aufgabe`,
  `${viewPlatten}/Glasplatten/Uebung14/aufgabe`,
  path.resolve('views/layouts/Bauelemente/Platten/Glasplatten/layout.ejs')
)
routerPost(
  router,
  `${routePlatten}/glasplatten/uebung14/aufgabe`,
  `${viewPlatten}/Glasplatten/Uebung14/ergebnis`,
  `${exampleBauelemente}/Uebung14`,
  path.resolve('views/layouts/Bauelemente/Platten/Glasplatten/layout.ejs')
)

/**!SECTION */
/**!SECTION */

module.exports = router
