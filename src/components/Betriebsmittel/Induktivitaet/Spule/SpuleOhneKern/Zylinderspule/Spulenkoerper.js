require("use-strict");
const path = require("path");
const { Betriebsmittel } = require(path.resolve(
  "src/components/Betriebsmittel/Betriebsmittel.js"
));

// const { Betriebsmittel } = require(path.resolve('include/system'))

class Spulenkoerper extends Betriebsmittel {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
    this.Name = "Spulenkoerper";
  }
}

exports.Spulenkoerper = Spulenkoerper;
