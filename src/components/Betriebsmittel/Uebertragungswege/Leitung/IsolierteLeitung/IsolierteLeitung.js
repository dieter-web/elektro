require("use-strict");
const path = require("path");

const { Leitung } = require(path.resolve(
  "src/components/Betriebsmittel/Uebertragungswege/Leitung/Leitung.js"
));

class Isolierteleitung extends Leitung {
  constructor() {
    super();
  }
}
exports.Isolierteleitung = Isolierteleitung;
