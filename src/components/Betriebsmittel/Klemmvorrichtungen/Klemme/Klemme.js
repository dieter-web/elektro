require("use-strict");
const path = require("path");

const { Klemmvorrichtungen } = require(path.resolve(
  "src/components/Betriebsmittel/Klemme/Klemme.js"
));

class Klemme extends Klemmvorrichtungen {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}

exports.Klemme = Klemme;
