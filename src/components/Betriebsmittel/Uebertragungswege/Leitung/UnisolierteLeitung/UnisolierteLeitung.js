require("use-strict");
const path = require("path");
const { Leitung } = require(path.resolve(
  "src/components/Betriebsmittel/Uebertragungswege/Leitung/Leitung.js"
));

class UnisolierteLeitung extends Leitung {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
    this.visUnisolierteLeitung = {};
  }
}
exports.UnisolierteLeitung = UnisolierteLeitung;
