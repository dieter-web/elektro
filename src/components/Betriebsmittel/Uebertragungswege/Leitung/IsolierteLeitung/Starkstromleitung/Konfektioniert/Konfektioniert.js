require("use-strict");
const path = require("path");
const { Starkstromleitung } = require(path.resolve(
  "src/components/Betriebsmittel/Uebertragungswege/Leitung/Isolierteleitung/Starkstromleitung/Starkstromleitung.js"
));

class Konfektioniert extends Starkstromleitung {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
exports.Konfektioniert = Konfektioniert;
