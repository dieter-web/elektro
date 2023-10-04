require("use-strict");
const path = require("path");
const { Induktivitaet } = require(path.resolve(
  "src/components/Betriebsmittel/Induktivitaet/Induktivitaet.js"
));

class Spule extends Induktivitaet {
  constructor() {
    super();
    // this.Kennzeichnung = Kennzeichnung
    this.Parameter = {};
    this.visSpule = {};
  }
}

class Spulenkoerper extends Spule {
  constructor() {
    super();
    // this.Kennzeichnung = Kennzeichnung
    this.Parameter = {};
    this.visSpulenkoerper = {};
  }
}

exports.Spule = Spule;
exports.Spulenkoerper = Spulenkoerper;
