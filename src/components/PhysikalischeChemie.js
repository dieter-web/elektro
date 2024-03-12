const path = require("path");
const dbJson = require(path.resolve("controllers/dbJson.js"));

class PhysikalischeChemie {
  constructor() {
    this.Berechnung = {};
    this.Kennzeichnung = dbJson.readJSONFile(path.resolve("src/json/Sonstiges/kennzeichnung.json"));
  }
}

class Elektrochemie extends PhysikalischeChemie {
  constructor() {
    super();
  }
}

class Elektrode extends Elektrochemie {
  constructor(Eigenschaften) {
    super();
    this.Eigenschaften = Eigenschaften;
  }
}

class Elektrolyt extends Elektrochemie {
  constructor(Eigenschaften) {
    super();
    this.Eigenschaften = Eigenschaften;
  }
}

exports.Elektrolyt = Elektrolyt;
exports.Elektrode = Elektrode;
exports.Elektrochemie = Elektrochemie;
exports.PhysikalischeChemie = PhysikalischeChemie;
