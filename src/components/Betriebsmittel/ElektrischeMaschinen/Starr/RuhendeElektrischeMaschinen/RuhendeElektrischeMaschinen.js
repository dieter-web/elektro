require("use-strict");
const path = require("path");

const { Starr } = require(path.resolve(
  "src/components/Betriebsmittel/ElektrischeMaschinen/Starr/Starr.js"
));

class RuhendeElektrischeMaschinen extends Starr {
  constructor() {
    super();
  }
}

exports.RuhendeElektrischeMaschinen = RuhendeElektrischeMaschinen;
