require("use-strict");
const path = require("path");
const { Uebertragungswege } = require(path.resolve(
  "src/components/Betriebsmittel/Uebertragungswege/Uebertragungswege.js"
));

class Draht extends Uebertragungswege {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
    this.visDraht = {
      // path: ""
    };
  }
}
exports.Draht = Draht;
