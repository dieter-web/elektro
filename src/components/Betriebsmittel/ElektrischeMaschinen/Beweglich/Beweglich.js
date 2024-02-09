require("use-strict");
const path = require("path");

const { ElektrischeMaschinen } = require(path.resolve(
  "src/components/Betriebsmittel/ElektrischeMaschinen/ElektrischeMaschinen.js"
));

class Beweglich extends ElektrischeMaschinen {
  constructor() {
    super();
  }
}

exports.Beweglich = Beweglich;
