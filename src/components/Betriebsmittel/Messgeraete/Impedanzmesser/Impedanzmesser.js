require("use-strict");
const path = require("path");

const { Messgeraete } = require(path.resolve(
  "src/components/Betriebsmittel/Messgeraete/Messgeraete.js"
));

class Impedanzmesser extends Messgeraete {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
exports.Impedanzmesser = Impedanzmesser;
