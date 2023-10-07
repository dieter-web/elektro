require("use-strict");
const path = require("path");
const { Leitung } = require(path.resolve(
  "src/components/Betriebsmittel/Uebertragungswege/Leitung/UnisolierteLeitung/UnisolierteLeitung.js"
));

class Freileitung extends UnisolierteLeitung {
  constructor(Parameter) {
    super(Parameter);
    this.visFreileitung = {
      //
    };
  }
}
exports.Freileitung = Freileitung;
