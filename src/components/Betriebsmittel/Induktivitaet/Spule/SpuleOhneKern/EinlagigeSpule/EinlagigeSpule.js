require("use-strict");
const path = require("path");
const { SpuleOhneKern } = require(path.resolve(
  "src/components/Betriebsmittel/Induktivitaet/Spule/SpuleOhneKern/SpuleOhneKern.js"
));

class EinlagigeSpule extends SpuleOhneKern {
  constructor(Parameter) {
    super();
    // this.Kennzeichnung = Kennzeichnung
    this.Parameter = Parameter;
    this.visEinlagigeSpule = {};
    // this.Visual = Visual
  }
}
exports.EinlagigeSpule = EinlagigeSpule;
