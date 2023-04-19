require('use-strict')
const path = require('path')
const ejs = require('ejs')
const express = require('express')
const cors = require('cors')
const port = 8000

const requestLogger = require(path.join(__dirname, 'middleware/requestLogger'))
const expressLayouts = require('express-ejs-layouts')

const app = express()

app.use(expressLayouts)
app.engine('html', ejs.renderFile)
app.set('views', path.join(__dirname, 'views'))
app.set('layout', path.join('layouts/default'))
app.set('view engine', 'ejs')

const corsOptions = { origin: 'http://localhost:8000' }
app.use(cors(corsOptions))

const jsonOptions = {
  inflate: true,
  limit: '100kb',
  reviver: null,
  strict: true,
  type: 'application/json',
  verify: undefined
}
app.use(express.json(jsonOptions))

const rawOptions = {
  inflate: true,
  limit: '100kb',
  type: 'application/octetstream',
  verify: undefined
}
app.use(express.raw(rawOptions))

const RouterOptions = {
  caseSensitive: true,
  mergeParams: false,
  strict: true
}
app.use(express.Router(RouterOptions))

const staticOptions = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html', 'js', 'css', 'jpg', 'json'],
  fallthrough: true,
  immutable: false,
  index: false,
  lastModified: true,
  maxAge: 0,
  redirect: true
}
app.use(express.static('public', staticOptions))

const textOptions = {
  defaultCharset: 'utf-8',
  inflate: true,
  limit: '100kb',
  type: 'text/plain',
  verify: undefined
}
app.use(express.text(textOptions))

const urlencodedOptions = {
  extended: true,
  inflate: true,
  limit: '100kb',
  parameterlimit: 1000,
  type: 'application/x-www-from-urlencoded',
  verify: undefined
}
app.use(express.urlencoded(urlencodedOptions))

app.use(requestLogger)

app.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

app.get('/', (req, res) => {
  res.render('index', { text: 'Grundlagen der Elektrotechnik' })
})

app.locals.title = 'Elektro'
app.locals.email = 'dieterkrause31960@gmail.com'

app.listen(port, () => console.info(`Express started on port ${port}`))
