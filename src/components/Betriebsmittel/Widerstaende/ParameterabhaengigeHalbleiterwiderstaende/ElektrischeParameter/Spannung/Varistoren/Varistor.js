require("use-strict");
const path = require("path");

const { Spannung } = require(path.resolve(
  "src/components/Betriebsmittel/Widerstaende/ParameterabhaengigeHalbleiterwiderstaende/ElektrischeParameter/Spannung/Spannung.js"
));

class Varistor extends Spannung {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
exports.Varistor = Varistor;
