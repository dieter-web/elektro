require("use-strict");
const path = require("path");
const { Blankeleitung } = require(path.resolve(
  "src/components/Betriebsmittel/Uebertragungswege/Leitung/Blankeleitung/Blankeleitung.js"
));

class Erder extends Blankeleitung {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
exports.Erder = Erder;
