require("use-strict");
const path = require("path");

const { Betriebsmittel } = require(path.resolve(
  "src/components/Betriebsmittel/Betriebsmittel.js"
));

class Widerstaende extends Betriebsmittel {
  constructor() {
    super();
    this.visWiderstaende = {};
  }
}

exports.Widerstaende = Widerstaende;
