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

/** SECTION Betriebsmittel Übertragungswege */
{
  const str1 = '/Uebertragungswege'
  routerGet(router, str1.toLowerCase(), vBM, lBM, str1)

  /** SECTION Betriebsmittel Übertragungswege Leitung */
  {
    const str1 = '/Uebertragungswege/Leitung'
    routerGet(router, str1.toLowerCase(), vBM, lBM, str1)

    /** NOTE Betriebsmittel Übertragungswege Leitung Beispiel14  */
    {
      const str2 = '/Beispiel14'
      erouter(router, vBM, lBM, eBM, str1, str2);
    }
  }
}
/** !SECTION Betriebsmittel Übertragungswege */


module.exports = router
