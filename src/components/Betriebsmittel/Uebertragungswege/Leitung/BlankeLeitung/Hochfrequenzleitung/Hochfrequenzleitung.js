require("use-strict");
const path = require("path");
const { Leitung } = require(path.resolve(
  "src/components/Betriebsmittel/Uebertragungswege/Leitung/BlankeLeitung/BlankeLeitung.js"
));

class Hochfrequenzleitung extends UnisolierteLeitung {
  constructor(Parameter) {
    super(Parameter);
    this.visHochfrequenzleitung = {
      //
    };
  }
}
exports.Hochfrequenzleitung = Hochfrequenzleitung;
