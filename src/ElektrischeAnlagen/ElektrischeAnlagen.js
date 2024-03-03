const path = require("path");
const dbJson = require(path.resolve("controllers/dbJson.js"));

class ElektrischeAnlagen {
  constructor() {
    this.Berechnung = {};

    this.Kennzeichnung = dbJson.readJSONFile(path.resolve("src/json/Sonstiges/kennzeichnung.json"));
  }
}

exports.ElektrischeAnlagen = ElektrischeAnlagen;
