require("use-strict");
const path = require("path");
const { Uebertragungswege } = require(path.resolve(
  "src/components/Betriebsmittel/Uebertragungswege/Uebertragungswege.js"
));

class Draehte extends Uebertragungswege {
  constructor() {
    super();
    this.Kennzeichnung = {};
    this.visDraehte = {};
  }
}
exports.Draehte = Draehte;
