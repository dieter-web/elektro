require("use-strict");
const path = require("path");

const { Transformator } = require(path.resolve(
  "src/components/Betriebsmittel/ElektrischeMaschinen/Starr/RuhendeElektrischeMaschinen/Transformatoren/Transformator/Transformator.js"
));

class Kerntransformator extends Transformator {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}

exports.Kerntransformator = Kerntransformator;
