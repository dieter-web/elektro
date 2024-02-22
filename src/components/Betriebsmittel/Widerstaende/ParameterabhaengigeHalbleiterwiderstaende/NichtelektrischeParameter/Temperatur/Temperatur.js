require("use-strict");
const path = require("path");

const { NichtelektrischeParameter } = require(path.resolve(
  "src/components/Betriebsmittel/Widerstaende/ParameterabhaengigeHalbleiterwiderstaende/NichtelektrischeParameter/NichtelektrischeParameter.js"
));

class Temperatur extends NichtelektrischeParameter {
  constructor() {
    super();
  }
}

exports.Temperatur = Temperatur;
