require("use-strict");
const path = require("path");

const { Transformatoren } = require(path.resolve(
  "src/components/Betriebsmittel/ElektrischeMaschinen/Starr/RuhendeElektrischeMaschinen/Transformatoren/Transformatoren.js"
));

class Transaktor extends Transformatoren {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}

exports.Transaktor = Transaktor;
