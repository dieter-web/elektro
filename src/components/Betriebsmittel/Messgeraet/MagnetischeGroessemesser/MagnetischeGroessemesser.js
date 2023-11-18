require("use-strict");
const path = require("path");

const { Messgeraet } = require(path.resolve(
  "src/components/Betriebsmittel/Messgeraet/Messgeraet.js"
));

class MagnetischeGroessemesser extends Messgeraet {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
exports.MagnetischeGroessemesser = MagnetischeGroessemesser;
