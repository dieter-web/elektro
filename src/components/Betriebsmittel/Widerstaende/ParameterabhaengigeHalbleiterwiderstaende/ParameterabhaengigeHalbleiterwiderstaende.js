require("use-strict");
const path = require("path");

const { Widerstaende } = require(path.resolve(
  "src/components/Betriebsmittel/Widerstaende/Widerstaende.js"
));

class ParameterabhaengigeHalbleiterwiderstaende extends Widerstaende {
  constructor() {
    super();
  }
}

exports.ParameterabhaengigeHalbleiterwiderstaende = ParameterabhaengigeHalbleiterwiderstaende;
