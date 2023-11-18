require("use-strict");
const path = require("path");

const { Spule } = require(path.resolve(
  "src/components/Betriebsmittel/Induktivitaet/Spule/Spule.js"
));

class SpuleMitKern extends Spule {
  constructor() {
    super();
  }
}
exports.SpuleMitKern = SpuleMitKern;
