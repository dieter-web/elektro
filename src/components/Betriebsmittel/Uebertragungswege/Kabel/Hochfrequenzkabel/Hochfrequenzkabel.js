require("use-strict");
const path = require("path");

const { Kabel } = require(path.resolve(
  "src/components/Betriebsmittel/Uebertragungswege/Kabel/Kabel.js"
));

class Hochfrequenzkabel extends Kabel {
  constructor(Parameter) {
    super(Parameter);
    this.visHochfrequenzkabel = {
      //
    };
  }
}
exports.Hochfrequenzkabel = Hochfrequenzkabel;
