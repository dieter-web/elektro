require("use-strict");
const path = require("path");

const { Kabel } = require(path.resolve(
  "src/components/Betriebsmittel/Uebertragungswege/Kabel/Kabel.js"
));

class Fernmeldekabel extends Kabel {
  constructor() {
    super();
  }
}
exports.Fernmeldekabel = Fernmeldekabel;
