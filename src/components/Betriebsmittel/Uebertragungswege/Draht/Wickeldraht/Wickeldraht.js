require("use-strict");
const path = require("path");
const { Uebertragungswege } = require(path.resolve(
  "src/components/Betriebsmittel/Uebertragungswege/Draht/Draht.js"
));

class Wickeldraht extends Draht {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
    this.visWickeldraht = {
      // path: ""
    };
  }
}
exports.Wickeldraht = Wickeldraht;
