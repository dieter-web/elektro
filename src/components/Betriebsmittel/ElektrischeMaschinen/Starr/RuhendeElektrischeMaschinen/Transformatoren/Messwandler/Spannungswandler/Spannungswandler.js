require("use-strict");
const path = require("path");

const { Messwandler } = require(path.resolve(
  "src/components/Betriebsmittel/ElektrischeMaschinen/Starr/RuhendeElektrischeMaschinen/Transformatoren/Messwandler/Messwandler.js"
));

class Spannungswandler extends Messwandler {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}

exports.Spannungswandler = Spannungswandler;
