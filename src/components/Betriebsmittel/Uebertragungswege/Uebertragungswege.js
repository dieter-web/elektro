require("use-strict");
const path = require("path");

const { Betriebsmittel } = require(path.resolve(
  "src/components/Betriebsmittel/Betriebsmittel.js"
));

class Uebertragungswege extends Betriebsmittel {
  constructor() {
    super();
    this.visUebertragungswege= {
      // path: ""
    };
  }
}

exports.Uebertragungswege = Uebertragungswege;
