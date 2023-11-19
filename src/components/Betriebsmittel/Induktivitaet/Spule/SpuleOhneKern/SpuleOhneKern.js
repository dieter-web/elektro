require("use-strict");
const path = require("path");

const { Spule } = require(path.resolve(
  "src/components/Betriebsmittel/Induktivitaet/Spule/Spule.js"
));

class SpuleOhneKern extends Spule {
  constructor() {
    super();
  }
}
exports.SpuleOhneKern = SpuleOhneKern;
