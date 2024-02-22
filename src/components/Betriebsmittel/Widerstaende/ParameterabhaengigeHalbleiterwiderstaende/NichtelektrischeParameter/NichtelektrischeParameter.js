require("use-strict");
const path = require("path");

const { ParameterabhaengigeHalbleiterwiderstaende } = require(path.resolve(
  "src/components/Betriebsmittel/Widerstaende/ParameterabhaengigeHalbleiterwiderstaende/ParameterabhaengigeHalbleiterwiderstaende.js"
));

class NichtelektrischeParameter extends ParameterabhaengigeHalbleiterwiderstaende {
  constructor() {
    super();
  }
}

exports.NichtelektrischeParameter = NichtelektrischeParameter;
