require("use-strict");
const path = require("path");
const express = require("express");
const router = express.Router();

const { routerGet } = require(path.resolve("src/js/routerGet.js"));
const { erouter } = require(path.resolve("src/js/erouter.js"));

const R5 = require(path.resolve("include/routenWerkstoff.js"));

/** SECTION Werkstoff */

router.get("/", function (req, res) {
  res.render(R5.p5, {
    layout: `${R5.l5}/layout.ejs`,
    menu: "Werkstoff",
  });
});

/** SECTION /Werkstoff/Eisenwerkstoff */
routerGet(router, R5.r5_1, R5.p5, R5.l5);
/** !SECTION /Werkstoff/Eisenwerkstoff */

/** SECTION /Werkstoff/Baustahl */
routerGet(router, R5.r5_2, R5.p5, R5.l5);
/** !SECTION /Werkstoff/Baustahl */

/** SECTION /Werkstoff/Automatenstahl */
routerGet(router, R5.r5_3, R5.p5, R5.l5);
/** !SECTION /Werkstoff/Automatenstahl */

/** SECTION /Werkstoff/Einsatzstahl */
routerGet(router, R5.r5_4, R5.p5, R5.l5);
/** !SECTION /Werkstoff/Einsatzstahl */

/** SECTION /Werkstoff/Verguetungsstahl */
routerGet(router, R5.r5_5, R5.p5, R5.l5);
/** !SECTION /Werkstoff/Verguetungsstahl */

/** SECTION /Werkstoff/Werkzeugstahl */
routerGet(router, R5.r5_6, R5.p5, R5.l5);
/** !SECTION /Werkstoff/Werkzeugstahl */

/** SECTION /Werkstoff/Leiterwerkstoff */
routerGet(router, R5.r5_7, R5.p5, R5.l5);

/** NOTE Aufgabe 1.6 */
erouter(router, R5.p5, R5.l5, R5.e5, R5.r5_7, R5.a16);

/** !SECTION /Werkstoff/Leiterwerkstoff */

/** SECTION /Werkstoff/MagnetischerWerkstoff */
routerGet(router, R5.r5_8, R5.p5, R5.l5);
/** !SECTION /Werkstoff/MagnetischerWerkstoff */

module.exports = router;
