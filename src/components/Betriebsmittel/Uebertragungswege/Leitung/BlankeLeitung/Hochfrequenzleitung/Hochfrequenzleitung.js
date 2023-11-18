require("use-strict");
const path = require("path");
const { BlankeLeitung } = require(path.resolve(
  "src/components/Betriebsmittel/Uebertragungswege/Leitung/BlankeLeitung/BlankeLeitung.js"
));

class Hochfrequenzleitung extends BlankeLeitung {
  constructor(Parameter) {
    super();
  }
}
exports.Hochfrequenzleitung = Hochfrequenzleitung;
