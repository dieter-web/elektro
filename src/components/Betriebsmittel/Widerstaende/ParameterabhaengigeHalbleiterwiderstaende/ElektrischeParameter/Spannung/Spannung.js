require("use-strict");
const path = require("path");

const { ElektrischeParameter } = require(path.resolve(
  "src/components/Betriebsmittel/Widerstaende/ParameterabhaengigeHalbleiterwiderstaende/ElektrischeParameter/ElektrischeParameter.js"
));

class Spannung extends ElektrischeParameter {
  constructor() {
    super();
  }
}
exports.Spannung = Spannung;
