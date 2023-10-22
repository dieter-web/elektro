require("use-strict");
const path = require("path");
const { Draehte } = require(path.resolve(
  "src/components/Betriebsmittel/Uebertragungswege/Draehte/Draehte.js"
));

class Draht extends Draehte {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
    this.visDraht = {
      // path: ""
    };
  }
}
exports.Draht = Draht;
