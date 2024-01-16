require("use-strict");
const path = require("path");
const { ParameterabhaengigeHalbleiterwiderstaende } = require(path.resolve(
  "src/components/Betriebsmittel/Widerstaende/ParameterabhaengigeHalbleiterwiderstaende/ParameterabhaengigeHalbleiterwiderstaende.js"
));

class Thermistor extends ParameterabhaengigeHalbleiterwiderstaende {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}

exports.Thermistor = Thermistor;
