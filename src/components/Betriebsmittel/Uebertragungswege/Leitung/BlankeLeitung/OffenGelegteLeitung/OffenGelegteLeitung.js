require("use-strict");
const path = require("path");
const { Blankeleitung } = require(path.resolve(
  "src/components/Betriebsmittel/Uebertragungswege/Leitung/Blankeleitung/Blankeleitung.js"
));

class OffenGelegteLeing extends Blankeleitung {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
exports.OffenGelegteLeing = OffenGelegteLeing;
