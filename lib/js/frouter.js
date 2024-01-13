const {
  query,
  body,
  matchedData,
  validationResult
} = require('express-validator');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();
function frouter(router, vR, lR, str1, str2) {
  const str3 = 'flayout.ejs';
  router.use(bodyParser.json()).use(bodyParser.urlencoded({
    extended: true
  })).route(`${str1}${str2}`.toLowerCase(), upload.array()).get((req, res) => {
    res.render(`${vR}${str2}`);
    // ,
    // {
    //   layout: `${lR}${str1}${str3}`
    // })
  })
  // .post(body().isJSON(), (req, res) => {
  .post((req, res) => {
    res.locals.Aerg = req.body;
    res.render(`${vR}${str2}`);

    // res.locals.Aerg = req.body

    // , {
    //   layout: `${lR}${str1}${str3}`
    // })
  });
}

exports.frouter = frouter;