require("use-strict");
const path = require("path");
const {
  Kabel
} = require(path.resolve("src/components/Betriebsmittel/Uebertragungswege/Kabel/Kabel.js"));
class Starkstromkabel extends Kabel {
  constructor(Parameter) {
    super(Parameter);
  }
}
exports.Starkstromkabel = Starkstromkabel;