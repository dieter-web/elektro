require("use-strict");
const path = require("path");
const {
  Messwandler
} = require(path.resolve("src/components/Betriebsmittel/Transformator/Messwandler/Messwandler.js"));
class Stromwandler extends Messwandler {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
exports.Stromwandler = Stromwandler;