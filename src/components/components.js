const path = require("path");
const dbJson = require(path.resolve("controllers/dbJson.js"));

class Components {
  constructor() {
    this.Berechnung = {};
    this.Parameter = {};
    // this.Kennzeichnung = dbJson.readJSONFile(
    //   path.resolve("src/json/Sonstiges/kennzeichnung.json")
    // );
  }
}

exports.Components = Components;
