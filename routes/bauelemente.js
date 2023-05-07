require('use-strict')
const path = require('path')
const express = require('express')
const router = express.Router()
// const bodyParser = require('body-parser')
// const multer = require('multer')
// const upload = multer()

const { erouter } = require(path.resolve('src/js/erouter.js'))

const eB = path.resolve('src/example/Bauelemente')
const vB = 'pages/Bauelemente'
const lB = 'layouts/Bauelemente'
const str3 = '/aufgabe'
const str4 = '/layout.ejs'
const str5 = '/ergebnis'

/** SECTION Bauelemente */
router.get('/', function (req, res) {
  res.render(vB, {
    layout: `${lB}${str4}`
  })
})

/**SECTION Platten */
{
  const str = '/Platten'
  router.route(str.toLowerCase()).get((req, res) => {
    res.render(`${vB}${str}`, {
      layout: `${lB}${str}${str4}`
    })
  })
}

/** SECTION Platten Glasplatten */
{
  const str1 = '/Platten/Glasplatten'
  router.route(str1.toLowerCase()).get((req, res) => {
    res.render(`${vB}${str1}`, {
      layout: `${lB}${str1}${str4}`
    })
  })

  /** NOTE Übung 1.4 */
  {
    const str2 = '/Uebung14'
    erouter(router, vB, lB, eB, str1, str2, str3, str4, str5)
    // router
    //   .use(bodyParser.json())
    //   .use(bodyParser.urlencoded({ extended: true }))
    //   .route('/platten/glasplatten/uebung14/aufgabe', upload.array())
    //   .get((req, res) => {
    //     res.render(`${vB}${str1}/Uebung14/aufgabe`, {
    //       layout: `${lB}${str1}${str4}`
    //     })
    //   })
    //   .post((req, res) => {
    //     const { func } = require(`${eB}/Uebung14`)
    //     res.locals.Aerg = func(req.body)
    //     res.render(`${vB}${str1}/Uebung14/ergebnis`, {
    //       layout: `${lB}${str1}${str4}`
    //     })
    //   })
  }
}
/** !SECTION Glasplatten */
/**!SECTION Platten */

module.exports = router
