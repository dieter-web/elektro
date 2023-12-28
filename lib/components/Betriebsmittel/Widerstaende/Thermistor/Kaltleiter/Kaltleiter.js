require("use-strict");
const path = require("path");
const {
  Thermistor
} = require(path.resolve("src/components/Betriebsmittel/Widerstaende/Thermistor/Thermistor.js"));
class Kaltleiter extends Thermistor {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
exports.Kaltleiter = Kaltleiter;