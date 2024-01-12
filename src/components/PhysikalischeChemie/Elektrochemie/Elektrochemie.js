require("use-strict");
const path = require("path");
const { PhysikalischeChemie } = require(path.resolve(
  "src/components/PhysikalischeChemie/PhysikalischeChemie.js"
));

class Elektrochemie extends PhysikalischeChemie {
  constructor() {
    super();
    this.Berechnung = {};
  }
}

exports.Elektrochemie = Elektrochemie;
