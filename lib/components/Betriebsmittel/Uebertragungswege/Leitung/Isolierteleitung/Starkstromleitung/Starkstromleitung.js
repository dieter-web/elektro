require("use-strict");
const path = require("path");
const {
  Isolierteleitung
} = require(path.resolve("src/components/Betriebsmittel/Uebertragungswege/Leitung/Isolierteleitung/Isolierteleitung.js"));
class Starkstromleitung extends Isolierteleitung {
  constructor() {
    super();
  }
}
exports.Starkstromleitung = Starkstromleitung;