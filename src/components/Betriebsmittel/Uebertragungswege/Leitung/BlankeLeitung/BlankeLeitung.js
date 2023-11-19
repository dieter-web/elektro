require("use-strict");
const path = require("path");
const { Leitung } = require(path.resolve(
  "src/components/Betriebsmittel/Uebertragungswege/Leitung/Leitung.js"
));

class Blankeleitung extends Leitung {
  constructor() {
    super();
    this.visBlankeleitung = {};
  }
}
exports.Blankeleitung = Blankeleitung;
