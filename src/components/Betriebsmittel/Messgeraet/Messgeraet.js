require("use-strict");
const math = require("mathjs");
const path = require("path");

const { Betriebsmittel } = require(path.resolve(
  "src/components/Betriebsmittel/Betriebsmittel.js"
));

class Messgeraet extends Betriebsmittel {
  constructor() {
    super();
  }
}
exports.Messgeraet = Messgeraet;
