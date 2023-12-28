require("use-strict");
const path = require("path");
const ejs = require("ejs");

const express = require("express");
// const i18n = require("i18n");

// i18n.configure({
//   locales: ["de", "en"],
//   cookie: "yourcookiename",
//   directory: __dirname + "/locales",
// });

const expressLayouts = require("express-ejs-layouts");
const cors = require("cors");
const port = 8000;

const requestLogger = require(path.join(__dirname, "middleware/requestLogger"));
const app = (module.exports = express());

app.engine("html", ejs.renderFile);
app.set("views", path.join(__dirname, "views"));
app.set("layout", path.join("layouts/default"));
app.set("view engine", "ejs");

app.use(expressLayouts);

const corsOptions = { origin: "http://localhost:8000" };
app.use(cors(corsOptions));

const staticOptions = {
  dotfiles: "ignore",
  etag: false,
  extensions: [
    "htm",
    "html",
    "ejs",
    "js",
    "mjs",
    "css",
    "css.map",
    "jpg",
    "json",
  ],
  fallthrough: true,
  immutable: false,
  index: false,
  lastModified: true,
  maxAge: 0,
  redirect: true,
};
app.use(express.static(`${__dirname}/public`, staticOptions));
app.use(express.static(`${__dirname}/src`, staticOptions));
app.use(express.static(`${__dirname}/controllers`, staticOptions));
app.use(express.static(`${__dirname}/lib`, staticOptions));

app.use(express.static(`${__dirname}/include`, staticOptions));

const jsonOptions = {
  inflate: true,
  limit: "100kb",
  reviver: null,
  strict: true,
  type: "application/json",
  verify: undefined,
};
app.use(express.json(jsonOptions));

const rawOptions = {
  inflate: true,
  limit: "100kb",
  type: "application/octetstream",
  verify: undefined,
};
app.use(express.raw(rawOptions));

const RouterOptions = {
  caseSensitive: true,
  mergeParams: false,
  strict: true,
};
app.use(express.Router(RouterOptions));

const textOptions = {
  defaultCharset: "utf-8",
  inflate: true,
  limit: "100kb",
  type: "text/plain",
  verify: undefined,
};
app.use(express.text(textOptions));

const urlencodedOptions = {
  extended: true,
  inflate: true,
  limit: "100kb",
  parameterlimit: 1000,
  type: "application/x-www-from-urlencoded",
  verify: undefined,
};
app.use(express.urlencoded(urlencodedOptions));

app.use(requestLogger);

app.use((req, res, next) => {
  let datum = new Date(Date.now());
  console.log(datum.toLocaleDateString() + "--" + datum.toLocaleTimeString());
  next();
});

// app.configure(function () {
//   // you will need to use cookieParser to expose cookies to req.cookies
//   app.use(express.cookieParser());

//   // i18n init parses req for language headers, cookies, etc.
//   app.use(i18n.init);
// });

let users = [
  {
    id: 1,
    name: "Dieter Krause",
    age: "63",
    email: "dieterkrause31960@gmail.com",
  },
];

app.get("/api/users", function (req, res) {
  return res.json(users);
});

app.use("/", require(path.resolve("routes/root")));
app.use("/bauelemente", require(path.resolve("routes/bauelemente")));
app.use("/betriebsmittel", require(path.resolve("routes/betriebsmittel")));
app.use("/elektrotechnik", require(path.resolve("routes/elektrotechnik")));
app.use(
  "/physikalischechemie",
  require(path.resolve("routes/physikalischechemie"))
);
app.use("/werkstoff", require(path.resolve("routes/werkstoff")));
app.use("/formulare", require(path.resolve("routes/formulare")));

app.locals.title = "Elektro";
app.locals.email = "dieterkrause31960@gmail.com";

app.listen(port, () => console.info(`Express started on port ${port}`));
