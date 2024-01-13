require("use-strict");
const path = require("path");
const {
  Draht
} = require(path.resolve("src/components/Betriebsmittel/Uebertragungswege/Draehte/Draht/Draht.js"));
class Wickeldraht extends Draht {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
exports.Wickeldraht = Wickeldraht;