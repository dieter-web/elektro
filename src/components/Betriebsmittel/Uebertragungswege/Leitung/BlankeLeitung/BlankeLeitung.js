require("use-strict");
const path = require("path");
const { Leitung } = require(path.resolve(
  "src/components/Betriebsmittel/Uebertragungswege/Leitung/Leitung.js"
));

class BlankeLeitung extends Leitung {
  constructor() {
    super();
    this.vis = {};
  }
}
exports.BlankeLeitung = BlankeLeitung;
