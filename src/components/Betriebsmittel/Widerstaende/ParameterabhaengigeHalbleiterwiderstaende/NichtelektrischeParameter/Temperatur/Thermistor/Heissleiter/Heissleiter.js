require("use-strict");
const path = require("path");
const { Thermistor } = require(path.resolve(
  "src/components/Betriebsmittel/Widerstaende/Thermistor/Thermistor.js"
));

class Heissleiter extends Thermistor {
  constructor(parameter) {
    super();
    this.Parameter = parameter;
  }
}

exports.Heissleiter = Heissleiter;
