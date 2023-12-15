require("use-strict");
const path = require("path");

const { Betriebsmittel } = require(path.resolve(
  "src/components/Betriebsmittel/Betriebsmittel.js"
));

class Klemmvorrichtungen extends Betriebsmittel {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}

exports.Klemmvorrichtungen = Klemmvorrichtungen;
