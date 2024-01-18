require("use-strict");
const path = require("path");

const { RuhendeElektrischeMaschinen } = require(path.resolve(
  "src/components/Betriebsmittel/ElektrischeMaschinen/Starr/RuhendeElektrischeMaschinen/RuhendeElektrischeMaschinen.js"
));

class Transformatoren extends RuhendeElektrischeMaschinen {
  constructor() {
    super();
  }
}

exports.Transformatoren = Transformatoren;
