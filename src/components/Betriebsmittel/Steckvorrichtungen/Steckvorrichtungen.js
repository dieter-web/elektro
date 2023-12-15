require("use-strict");
const path = require("path");

const { Betriebsmittel } = require(path.resolve(
  "src/components/Betriebsmittel/Betriebsmittel.js"
));

class Steckvorrichtungen extends Betriebsmittel {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}

exports.Steckvorrichtungen = Steckvorrichtungen;
