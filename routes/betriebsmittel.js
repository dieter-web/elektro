require('use-strict')
const path = require('path')
const express = require('express')
const router = express.Router()

const { routerGet } = require(path.resolve('src/js/routerGet.js'))
const { erouter } = require(path.resolve('src/js/erouter.js'))

const eBM = path.resolve('src/example/Betriebsmittel')
const vBM = 'pages/Betriebsmittel'
const lBM = 'layouts/Betriebsmittel'

/** SECTION Betriebsmittel */
router.get('/', function (req, res) {
  res.render(vBM, {
    layout: `${lBM}/layout.ejs`
  })
})

/** SECTION  Betriebsmittel Widerstände */
{
  const str1 = '/Widerstaende'
  routerGet(router, str1.toLowerCase(), vBM, lBM, str1)

  /** NOTE Beispiel 1.1 */
  {
    const str2 = '/Beispiel11'
    erouter(router, vBM, lBM, eBM, str1, str2)
  }
}
/** !SECTION Widerstände */

module.exports = router
