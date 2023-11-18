require("use-strict");
const path = require("path");
const { Uebertragungswege } = require(path.resolve(
  "src/components/Betriebsmittel/Uebertragungswege/Uebertragungswege.js"
));

class Antenne extends Uebertragungswege {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
exports.Antenne = Antenne;
