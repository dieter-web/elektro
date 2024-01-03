require("use-strict");
const path = require("path");

const { Betriebsmittel } = require(path.resolve(
  "src/components/Betriebsmittel/Betriebsmittel.js"
));

class Widerstaende extends Betriebsmittel {
  constructor() {
    super();
    this.Rmap = new Map();
  }

  //TODO: Rmap Operationen schreiben

}

exports.Widerstaende = Widerstaende;
