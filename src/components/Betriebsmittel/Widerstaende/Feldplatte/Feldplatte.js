require("use-strict");
const path = require("path");

const { Widerstaende } = require(path.resolve(
  "src/components/Betriebsmittel/Widerstaende/Widerstaende.js"
));

class Feldplatte extends Widerstaende {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
    this.visFelsplatte = {};
  }
}

exports.Feldplatte = Feldplatte;
