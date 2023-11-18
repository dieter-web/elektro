require("use-strict");
const path = require("path");

const { Betriebsmittel } = require(path.resolve(
  "src/components/Betriebsmittel/Betriebsmittel.js"
));

class Magnetspule extends Betriebsmittel {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
    this.Name = "Magnetspule";
  }
}
exports.Magnetspule = Magnetspule;
