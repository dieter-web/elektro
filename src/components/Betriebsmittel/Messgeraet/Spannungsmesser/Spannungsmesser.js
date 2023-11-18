require("use-strict");
const math = require("mathjs");
const path = require("path");

const { Messgeraet } = require(path.resolve(
  "src/components/Betriebsmittel/Messgeraet/Messgeraet.js"
));

class Spannungsmesser extends Messgeraet {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
exports.Spannungsmesser = Spannungsmesser;
