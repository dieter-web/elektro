const path = require("path");
const dbJson = require(path.resolve("controllers/dbJson.js"));

class Components extends Object {
  constructor() {
    super();
    this.Berechnung = {};
    this.Parameter = {};
  }
}

exports.Components = Components;
