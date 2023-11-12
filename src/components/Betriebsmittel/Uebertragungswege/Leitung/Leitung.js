require("use-strict");
const path = require("path");

const { Uebertragungswege } = require(path.resolve(
  "src/components/Betriebsmittel/Uebertragungswege/Uebertragungswege.js"
));

const Bezeichnung = require(path.resolve(
  "src/json/Uebertragungswege/Leitungen/Bezeichnung.json"
));

class Leitung extends Uebertragungswege {
  constructor() {
    super();
    this.visLeitung = {
    };
  }
}
exports.Leitung = Leitung;
