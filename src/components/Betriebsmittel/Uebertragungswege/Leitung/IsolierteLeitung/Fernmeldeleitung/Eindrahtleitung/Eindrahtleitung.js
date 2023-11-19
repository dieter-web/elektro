require("use-strict");
const path = require("path");

const { Fernmeldeleitung } = require(path.resolve(
  "src/components/Betriebsmittel/Uebertragungswege/Leitung/Isolierteleitung/Fernmeldeleitung/Fernmeldeleitung.js"
));

class Eindrahtleitung extends Fernmeldeleitung {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
exports.Eindrahtleitung = Eindrahtleitung;
