require("use-strict");
const path = require("path");

const { Betriebsmittel } = require(path.resolve(
  "src/components/Betriebsmittel/Betriebsmittel.js"
));

class Verschiedenes extends Betriebsmittel {
  constructor() {
    super();
    this.visVerschiedenes = {};
  }
}

exports.Verschiedenes = Verschiedenes;
