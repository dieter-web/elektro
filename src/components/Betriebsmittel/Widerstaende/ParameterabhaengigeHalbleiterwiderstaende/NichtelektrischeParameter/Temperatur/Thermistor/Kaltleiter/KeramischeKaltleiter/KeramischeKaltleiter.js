require("use-strict");
const path = require("path");
const { Kaltleiter } = require(path.resolve(
  "src/components/Betriebsmittel/Widerstaende/ParameterabhaengigeHalbleiterwiderstaende/NichtelektrischeParameter/Temperatur/Thermistor/Kaltleiter/Kaltleiter.js"
));

class KeramischerKaltleiter extends Kaltleiter {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}

exports.KeramischerKaltleiter = KeramischeKaltleiter;
