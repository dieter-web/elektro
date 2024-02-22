require("use-strict");
const path = require("path");

const { ParameterabhaengigeHalbleiterwiderstaende } = require(path.resolve(
  "src/components/Betriebsmittel/Widerstaende/ParameterabhaengigeHalbleiterwiderstaende/ParameterabhaengigeHalbleiterwiderstaende.js"
));

class ElektrischeParameter extends ParameterabhaengigeHalbleiterwiderstaende {
  constructor() {
    super();
  }
}
exports.ElektrischeParameter = ElektrischeParameter;
