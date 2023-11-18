require("use-strict");
const math = require("mathjs");
const path = require("path");

const { Betriebsmittel } = require(path.resolve(
  "src/components/Betriebsmittel/Betriebsmittel.js"
));

class Baugruppen extends Betriebsmittel {
  constructor() {
    super();
  }
}
exports.Baugruppen = Baugruppen;
