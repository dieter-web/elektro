require("use-strict");
const path = require("path");
const {
  Widerstaende
} = require(path.resolve("src/components/Betriebsmittel/Widerstaende/Widerstaende.js"));
class Thermistor extends Widerstaende {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
exports.Thermistor = Thermistor;