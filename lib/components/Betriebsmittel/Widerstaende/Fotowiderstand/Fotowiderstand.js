require("use-strict");
const path = require("path");
const {
  Widerstaende
} = require(path.resolve("src/components/Betriebsmittel/Widerstaende/Widerstaende.js"));
class Fotowiderstand extends Widerstaende {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
exports.Fotowiderstand = Fotowiderstand;