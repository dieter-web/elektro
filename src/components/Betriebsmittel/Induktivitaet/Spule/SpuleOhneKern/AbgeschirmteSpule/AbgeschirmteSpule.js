require("use-strict");
const path = require("path");
const { SpuleOhneKern } = require(path.resolve(
  "src/components/Betriebsmittel/Induktivitaet/Spule/SpuleOhneKern/SpuleOhneKern.js"
));

class AbgeschirmteSpule extends SpuleOhneKern {
  constructor() {
    super();
  }
}
exports.AbgeschirmteSpule = AbgeschirmteSpule;
