require("use-strict");
const path = require("path");

const { ParameterabhaengigeHalbleiterwiderstaende } = require(path.resolve(
  "src/components/Betriebsmittel/Widerstaende/ParameterabhaengigeHalbleiterwiderstaende/ParameterabhaengigeHalbleiterwiderstaende.js"
));

class Varistor extends ParameterabhaengigeHalbleiterwiderstaende {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
exports.Varistor = Varistor;
