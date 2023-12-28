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
      menu: [
        { name: "elektro", link: "/", class: "nav-link" },
        { name: "Elektrotechnik", link: "/elektrotechnik", class: "nav-link" },
        { name: "Bauelemente", link: "/bauelemente", class: "nav-link" },
        { name: "Betriebsmittel", link: "/betriebsmittel", class: "nav-link" },
        {
          name: "PhysikalischeChemie",
          link: "/physikalischechemie",
          class: "nav-link",
        },
        { name: "Werkstoff", link: "/werkstoff", class: "nav-link" },
      ],
    },
    (err, html) => {
      res.send(html);
    }
  );
});

module.exports = router;
