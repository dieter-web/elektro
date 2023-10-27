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
      fill: "#ffffff",
      fillopacity: 0.5,
      style: "stroke:#ffffff; stroke-width: 1.0",

      // Drahtrechteck
      width: 300,//this.Parameter.l,
      height: 10,//this.Parameter.d,
      name: this.Parameter.Name,

      // Events
      "pointer-events": "all"
    };
  }
}
exports.Draht = Draht;
