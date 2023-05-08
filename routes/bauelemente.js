require('use-strict')
const path = require('path')
const express = require('express')
const router = express.Router()

const { routerGet } = require(path.resolve('src/js/routerGet.js'))
const { erouter } = require(path.resolve('src/js/erouter.js'))

const eB = path.resolve('src/example/Bauelemente')
const vB = 'pages/Bauelemente'
const lB = 'layouts/Bauelemente'

/** SECTION Bauelemente */
router.get('/', function (req, res) {
  res.render(vB, {
    layout: `${lB}/layout.ejs`
  })
})

/**SECTION Platten */
{
  const str = '/Platten'
  routerGet(router, str.toLowerCase(), vB, lB, str)
}

/** SECTION Platten Glasplatten */
{
  const str1 = '/Platten/Glasplatten'
  routerGet(router, str1.toLowerCase(), vB, lB, str1)

  /** NOTE Übung 1.4 */
  {
    const str2 = '/Uebung14'
    erouter(router, vB, lB, eB, str1, str2)
  }
}
/** !SECTION Glasplatten */
/**!SECTION Platten */

module.exports = router
