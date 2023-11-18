require("use-strict");
const path = require("path");

const { Spule } = require(path.resolve(
  "src/components/Betriebsmittel/Induktivitaet/Spule/Spule.js"
));

class Variometer extends Spule {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
exports.Variometer = Variometer;
