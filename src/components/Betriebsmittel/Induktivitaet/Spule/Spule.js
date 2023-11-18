require("use-strict");
const path = require("path");
const { Induktivitaet } = require(path.resolve(
  "src/components/Betriebsmittel/Induktivitaet/Induktivitaet.js"
));

class Spule extends Induktivitaet {
  constructor() {
    super();
  }
}

class Spulenkoerper extends Spule {
  constructor() {
    super();
  }
}

exports.Spule = Spule;
exports.Spulenkoerper = Spulenkoerper;
