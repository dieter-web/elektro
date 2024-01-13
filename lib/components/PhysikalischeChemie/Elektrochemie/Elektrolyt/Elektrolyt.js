require("use-strict");
const path = require("path");
const {
  Elektrochemie
} = require(path.resolve("src/components/PhysikalischeChemie/Elektrochemie/Elektrochemie.js"));
class Elektrolyt extends Elektrochemie {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
exports.Elektrolyt = Elektrolyt;