require("use-strict")
const path = require("path")
const ejs = require("ejs")
const port = 8000

var express = require("express")

const i18n = require("i18n")
i18n.configure({locales: ["de", "en"],cookie: "yourcookiename",directory: __dirname + "/locales",})

// the main app

var app = express() 
app.use(i18n.init)

// admin

var admin = express() // the sub app
admin.use(i18n.init)

admin.get('/', function(req, res) {
  console.log(admin.mountpath) // /admin
  res.send('Admin Homepage')
})
app.use('/admin', admin) // mount the sub app
admin.use(i18n.init)

// /admin/secret 

var secret = express()
secret.use(i18n.init)

secret.get('/', function(req,res) {
  console.log(secret.mountpath)
  res.send('Admin Secret')
})

admin.use('/secr*t', secret)
app.use(['/adm*n',"/manager"], admin)


const expressLayouts = require("express-ejs-layouts")
app.use(expressLayouts)

const cors = require("cors")
const corsOptions = { origin: `http://localhost:${port}` }
app.use(cors(corsOptions))

// const requestLogger = require(path.join(__dirname, "middleware/requestLogger"))
// app.use(requestLogger)

app.engine("html", ejs.renderFile)
app.set("views", path.join(__dirname, "views"))
app.set("layout", path.join("layouts/default"))
app.set("view engine", "ejs")

app.use(express.static(`${__dirname}/public`))
app.use(express.static(`${__dirname}/src`))
app.use(express.static(`${__dirname}/controllers`))
app.use(express.static(`${__dirname}/lib`))
app.use(express.static(`${__dirname}/include`))
app.use(express.static(`${__dirname}/administrator`))

// app.use((req, res, next) => {
//   let datum = new Date(Date.now())
//   console.log(datum.toLocaleDateString() + "--" + datum.toLocaleTimeString())
//   next()
// })

app.use("/", require(path.resolve("routes/elektro")))
app.use("/bauelemente", require(path.resolve("routes/bauelemente")))
app.use("/betriebsmittel", require(path.resolve("routes/betriebsmittel")))
app.use("/elektrotechnik", require(path.resolve("routes/elektrotechnik")))
app.use("/physikalischechemie", require(path.resolve("routes/physikalischechemie")))
app.use("/werkstoff", require(path.resolve("routes/werkstoff")))
app.use("/formulare", require(path.resolve("routes/formulare")))


app.locals.title = "Elektro"
app.locals.strftime = require('strftime')
app.locals.email = "dieterkrause31960@gmail.com"

app.listen(port, () => console.info(`Express started on port ${port}`))
