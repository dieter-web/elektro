require("use-strict");
const path = require("path");

const { Widerstand } = require(path.resolve(
  "src/components/Betriebsmittel/Widerstaende/Widerstaende.js"
));

class Fotowiderstand extends Widerstaende {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
    this.visFotowiderstand = {};
  }
}

exports.Fotowiderstand = Fotowiderstand;
