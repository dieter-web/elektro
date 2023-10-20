require("use-strict");
const path = require("path");
const { Thermistor } = require(path.resolve(
  "src/components/Betriebsmittel/Widerstand/Thermistor/Thermistor.js"
));

class Heissleiter extends Thermistor {
  constructor(parameter) {
    super();
    this.Parameter = parameter;
    this.visHeissleiter = {
      // path: "M 50 50 ..."
    };
  }
}

exports.Heissleiter = Heissleiter;
