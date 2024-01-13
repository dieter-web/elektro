require("use-strict");
const path = require("path");

const { Components } = require(path.resolve("src/components/components.js"));

const dbJson = require(path.resolve("controllers/dbJson.js"));

class Betriebsmittel extends Components {
  constructor() {
    super();
    this.Kennzeichnung = dbJson.readJSONFile(
      path.resolve("src/json/Sonstiges/kennzeichnung.json")
    );
    this.Berechnung = {};
  }
}
exports.Betriebsmittel = Betriebsmittel;
