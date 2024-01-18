require("use-strict");
const path = require("path");

const { Uebertragungswege } = require(path.resolve(
  "src/components/Betriebsmittel/Uebertragungswege/Uebertragungswege.js"
));

class Kabel extends Uebertragungswege {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
exports.Kabel = Kabel;
