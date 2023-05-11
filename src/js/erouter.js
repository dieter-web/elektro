const {
  query,
  body,
  matchedData,
  validationResult
} = require('express-validator')
const bodyParser = require('body-parser')
const multer = require('multer')
const upload = multer()

function erouter (router, vE, lE, eE, str1, str2) {
  const str3 = '/aufgabe'
  const str4 = '/layout.ejs'
  const str5 = '/ergebnis'

  router
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))
    .route(`${str1}${str2}${str3}`.toLowerCase(), upload.array())
    .get((req, res) => {
      res.render(`${vE}${str1}${str2}${str3}`, {
        layout: `${lE}${str1}${str4}`
      })
    })
    .post(
      body().isJSON(), // Validierung
      (req, res) => {
        const { func } = require(`${eE}${str1}${str2}`)
        res.locals.Aerg = func(req.body)
        res.render(`${vE}${str1}${str2}${str5}`, {
          layout: `${lE}${str1}${str4}`
        })
      }
    )
}

exports.erouter = erouter
