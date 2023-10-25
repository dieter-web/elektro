require("use-strict");
const path = require("path");
const { BlankeLeitung } = require(path.resolve(
  "src/components/Betriebsmittel/Uebertragungswege/Leitung/BlankeLeitung/BlankeLeitung.js"
));

class Freileitung extends BlankeLeitung {
  constructor(Parameter) {
    super(Parameter);
    this.visFreileitung = {
      //
    };
  }
}
exports.Freileitung = Freileitung;
