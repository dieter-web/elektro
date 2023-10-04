require("use-strict");
const path = require("path");
const dbJson = require(path.resolve("controllers/dbJson.js"));

/**
 * @description
 * Jedes Betriebsmittel muss eine Kennzeichnung besitzen
 * deshalb wird Kennzeichnung bestandteil der Klasse und wird nicht mehr übergeben
 * @author Dieter Krause
 * @date 03/10/2023
 * @class Betriebsmittel
 */
class Betriebsmittel {
  constructor() {
    this.Kennzeichnung = dbJson.readJSONFile(
      path.resolve("src/json/kennzeichnung.json")
    );
    this.visBetriebsmittel = {};
  }
}
exports.Betriebsmittel = Betriebsmittel;
