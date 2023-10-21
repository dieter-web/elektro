require("use-strict");
const math = require("mathjs");
const path = require("path");

const { Betriebsmittel } = require(path.resolve(
  "src/components/Betriebsmittel/Betriebsmittel.js"
));

class Induktivitaet extends Betriebsmittel {
  constructor() {
    super();
    this.visInduktivitaet = {};
  }
}

exports.Induktivitaet = Induktivitaet;
