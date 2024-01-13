require("use-strict");
const path = require("path");
const {
  Blankeleitung
} = require(path.resolve("src/components/Betriebsmittel/Uebertragungswege/Leitung/Blankeleitung/Blankeleitung.js"));
class Hochfrequenzleitung extends Blankeleitung {
  constructor(Parameter) {
    super();
  }
}
exports.Hochfrequenzleitung = Hochfrequenzleitung;