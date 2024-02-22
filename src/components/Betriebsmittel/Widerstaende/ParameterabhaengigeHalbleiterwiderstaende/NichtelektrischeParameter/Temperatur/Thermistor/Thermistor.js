require("use-strict");
const path = require("path");
const { Temperatur } = require(path.resolve(
  "src/components/Betriebsmittel/Widerstaende/ParameterabhaengigeHalbleiterwiderstaende/NichtelektrischeParameter/Temperatur/Temperatur.js"
));

class Thermistor extends Temperatur {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}

exports.Thermistor = Thermistor;
