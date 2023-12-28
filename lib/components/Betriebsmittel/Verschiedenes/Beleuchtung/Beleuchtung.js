require("use-strict");
const path = require("path");
const {
  Verschiedenes
} = require(path.resolve("src/components/Betriebsmittel/Verschiedenes/Verschiedenes.js"));
class Beleuchtung extends Verschiedenes {
  constructor() {
    super();
  }
}
exports.Beleuchtung = Beleuchtung;