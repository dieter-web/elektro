const {
  query,
  body,
  matchedData,
  validationResult,
} = require("express-validator");
const bodyParser = require("body-parser");
const multer = require("multer");
const upload = multer();

/**
 *
 * @param {*} router
 * @param {*} p Page
 * @param {*} l Layout
 * @param {*} e Example
 * @param {*} route locale Route
 * @param {*} example Beispiel | Aufgabe | Übung
 */
function erouter(router, p, l, e, route, example) {
  const aufgabe = "/aufgabe";
  const layout = "/layout.ejs";
  const ergebnis = "/ergebnis";

  router
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))
    .route(`${route}${example}${aufgabe}`.toLowerCase(), upload.array())
    .get((req, res) => {
      res.render(`${p}${route}${example}${aufgabe}`, {
        layout: `${l}${route}${layout}`,
      });
    })
    .post(
      body().isJSON(), // Validierung
      (req, res) => {
        const { func } = require(`${e}${example}`);
        let R1 = func(req.body); // Daten werden in die json-Datei geschrieben
        // let erg = func(req.body); // In Erg sollte das Ergebnis-JSON stehen ?
        res.render(`${p}${route}${example}${ergebnis}`, {
          // im ergebnis sollte erg sichtbar sein ?
          layout: `${l}${route}${layout}`,
          // ergebnis: erg
        });
      }
    );
}

exports.erouter = erouter;
