const {
  query,
  body,
  matchedData,
  validationResult
} = require('express-validator')
const bodyParser = require('body-parser')
const multer = require('multer')
const upload = multer()

function erouter (router, vR, lR, eR, str1, str2) {
  const str3 = '/aufgabe'
  const str4 = '/layout.ejs'
  const str5 = '/ergebnis'

  router
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))
    .route(`${str1}${str2}${str3}`.toLowerCase(), upload.array())
    .get((req, res) => {
      res.render(`${vR}${str1}${str2}${str3}`, {
        layout: `${lR}${str1}${str4}`
      })
    })
    .post(
      body().isJSON(), // Validierung
      (req, res) => {
        const { func } = require(`${eR}${str1}${str2}`)
        res.locals.Aerg = func(req.body)
        res.render(`${vR}${str1}${str2}${str5}`, {
          layout: `${lR}${str1}${str4}`
        })
      }
    )
}

exports.erouter = erouter

