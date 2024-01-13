require("use-strict");
const math = require("mathjs");
const path = require("path");

const { Messgeraete } = require(path.resolve(
  "src/components/Betriebsmittel/Messgeraete/Messgeraete.js"
));

class Spannungsmesser extends Messgeraete {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
exports.Spannungsmesser = Spannungsmesser;
