require("use-strict");
const path = require("path");

const { Kabel } = require(path.resolve(
  "src/components/Betriebsmittel/Uebertragungswege/Kabel/Kabel.js"
));

class Fernmeldekabel extends Kabel {
  constructor(Parameter) {
    super(Parameter);
    this.visFernmeldekabel = {
      //
    };
  }
}
exports.Fernmeldekabel = Fernmeldekabel;
