'use strict';
const path = require('path');
const express = require('express');
// const cors = require('cors');
// const apiRoot = require(path.resolve('api/router'));
const routerGleichspannung = require(path.resolve('routes/gleichspannung'));
const routerStromkreise = require(path.resolve('routes/elektrischeStromkreise'));
const routerElektrischeBetriebsmittel = require(path.resolve('routes/elektrischeBetriebsmittel'));
// const routerElektrischeEnergieLeistung = require(path.resolve('router/elektrischeEnergieundLeistung'));
// const routerElektrischesFeldimLeiter = require(path.resolve('router/elektrischesFeldimLeiter'))
const requestLogger = require(path.resolve('middleware/requestLogger'));
// const { appendFile } = require('fs');
const expressLayouts = require('express-ejs-layouts');

const port = 5000;

// Admin application
const admin = express();
admin.use(expressLayouts);


// Express application
const app = express();

app.use(expressLayouts);
app.engine('html', require('ejs').renderFile);

//Middleware-Funktion
const jsonOptionen = {
    inflate: true,
    limit: "100kb",
    reviver: null,
    strict: true,
    type: "application/json",
    verify: undefined // function
};
app.use(express.json(jsonOptionen));

const rawOptionen = {
    inflate: true,
    limit: "100kb",
    type: "application/octetstream",
    verify: undefined
}
app.use(express.raw(rawOptionen));

const RouterOptionen = {
    caseSensitive: true,
    mergeParams: false,
    strict: true
};
app.use(express.Router(RouterOptionen));


const staticOptions = {
    dotfiles: 'ignore',
    etag: false,
    extensions: false, //['htm', 'html', 'js', 'css', 'css.map', 'jpg', 'json'],
    fallthrough: true,
    immutable: false,
    index: false,
    lastModified: true,
    maxAge: 0,
    redirect: true,
    setHeaders(res, path, stat) {
        res.set('x-timestamp', Date.now())
    }
};
app.use(express.static('public', staticOptions));
app.use(express.static('db', staticOptions));

const textOptionen = {
    defaultCharset: "utf-8",
    inflate: true,
    limit: "100kb",
    type: "text/plain",
    verify: undefined
};
app.use(express.text(textOptionen));

const urlencodedOptions = {
    extended: true,
    inflate: true,
    limit: "100kb",
    parameterLimit: 1000,
    type: "application/x-www-form-urlencoded",
    verify: undefined // Funktion
}
// app.use(express.urlencoded({ extended: true }));
app.use(express.urlencoded(urlencodedOptions));

app.use(requestLogger);

app.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next();
})

// app.all('/secret', (req, res, next) => {
//     console.log('Accessing the secret section ...');
//     next() // pass control to the next handler
// })


// Template Engine

app.set('views', './views');
app.set('layout', './layouts/default');
app.set('view engine', 'ejs');


// TODO: Erforderlich für die Datenabfrage aus React.js ??
// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "'");
//     res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET, POST, PUT, PATCH, DELETE");
//     res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
//     next();
// })
// CORS
// app.use(cors({ origin: /http:\/\/localhost/ }));

// app.options('*', cors());

//
// GRAFIK 
//
// D3 Test 
// app.get('/api/data', (req, res) => {
// const data = [100, 150, 300, 40, 350, 250];
// res.json(data);
// });
// D3-TEST
// app.get('/module/d3-linendiagramm', (req, res) => {
// res.render('d3', {
// text: 'd3 Test',
// });
// });


//
// ROUTEN
//

app.get('/', (req, res) => {
    res.render('index', {
        text: 'Grundlagen der Elektrotechnik'
    });
});


// app.use('/router', apiRoot);
app.use('/gleichspannung', routerGleichspannung);
app.use('/elektrischeStromkreise', routerStromkreise);
app.use('/elektrischeBetriebsmittel', routerElektrischeBetriebsmittel);
// app.use('/elektrischeEnergieundLeistung', routerElektrischeEnergieLeistung);
// app.use('/elektrischeEnergieundLeistung', routerElektrischesFeldimLeiter);



admin.get('/', (req, res) => {
    res.send('Admin Homepage')
})
app.use('/admin', admin);

app.on('mount', (parent) => {
    console.log('App Mounted')
    console.log(parent);
})

// admin.on('mount', (parent) => {
//     console.log('Admin Mounted');
//     console.log(parent);
// })

app.locals.title = "Elektro";
app.locals.email = "dieterkrause31960@gmail.com";
app.locals.strftime = require('strftime');

console.dir(app.locals.title);
console.dir(app.locals.email);


//
// START
//
app.listen(port, () => console.info("app up"));
