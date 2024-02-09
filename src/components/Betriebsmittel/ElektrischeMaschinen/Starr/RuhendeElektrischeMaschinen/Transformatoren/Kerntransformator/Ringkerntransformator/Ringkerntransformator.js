require("use-strict");
const path = require("path");

const { Kerntransformator } = require(path.resolve(
  "src/components/Betriebsmittel/ElektrischeMaschinen/Starr/RuhendeElektrischeMaschinen/Transformatoren/Kerntransformator/Kerntransformator.js"
));

class Ringkerntransformator extends Kerntransformator {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}

exports.Ringkerntransformator = Ringkerntransformator;
