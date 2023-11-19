require("use-strict");
const path = require("path");
const { Blankeleitung } = require(path.resolve(
  "src/components/Betriebsmittel/Uebertragungswege/Leitung/Blankeleitung/Blankeleitung.js"
));

class Stromschiene extends Blankeleitung {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
exports.Stromschiene = Stromschiene;
