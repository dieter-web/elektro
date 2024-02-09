require("use-strict");
const path = require("path");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render(
    "index",
    {
      text: "Grundlagen der Elektrotechnik",
      teil: "Band 1",
      Einleitung: `Aus den Büchern 'Grundlagen der Elektrotechnik Band1 und Band2 Lehrbuch für Ingenieurschulen der Elektrotechnik  9.,durchgesehene Auflage Autorenkollektiv VEB VERLAG TECHNIK BERLIN' werden die Beispiele und Aufgaben hier wiedergegeben. Wobei der Blickpunkt auf Weiterentwicklung dieser App seht.`,
    },
    (err, html) => {
      if (err) {
        res.send(`Fehler: ${err}`);
      } else {
        res.send(html);
      }
    }
  );
});

module.exports = router;
