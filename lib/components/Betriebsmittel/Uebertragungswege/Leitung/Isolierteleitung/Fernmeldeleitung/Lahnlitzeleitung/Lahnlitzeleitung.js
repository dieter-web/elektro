require("use-strict");
const path = require("path");
const {
  Fernmeldeleitung
} = require(path.resolve("src/components/Betriebsmittel/Uebertragungswege/Leitung/Isolierteleitung/Fernmeldeleitung/Fernmeldeleitung.js"));
class Lahnlitzeleitung extends Fernmeldeleitung {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
exports.Lahnlitzeleitung = Lahnlitzeleitung;