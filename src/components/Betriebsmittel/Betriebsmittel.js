require("use-strict");
const path = require("path");

const { Components } = require(path.resolve("src/components/components.js"));

const dbJson = require(path.resolve("controllers/dbJson.js"));

/**
 * @description
 * Jedes Betriebsmittel muss eine Kennzeichnung besitzen
 * deshalb wird Kennzeichnung bestandteil der Klasse und wird nicht mehr übergeben
 * @author Dieter Krause
 * @date 03/10/2023
 * @class Betriebsmittel
 */
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
