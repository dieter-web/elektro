require("use-strict");
const path = require("path");

const { Uebertragungswege } = require(path.resolve(
  "src/components/Betriebsmittel/Uebertragungswege/Uebertragungswege.js"
));

class Leitung extends Uebertragungswege {
  constructor() {
    super();
    this.kennzeichnung = require(path.resolve(
      "src/json/Uebertragungswege/Leitungen/Bezeichnung.json"
    ));
  }
}
exports.Leitung = Leitung;
