require("use-strict");
const path = require("path");
const { BlankeLeitung } = require(path.resolve(
  "src/components/Betriebsmittel/Uebertragungswege/Leitung/BlankeLeitung/BlankeLeitung.js"
));

class Stromschiene extends BlankeLeitung {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
    this.vis = {};
  }
}
exports.Stromschiene = Stromschiene;
