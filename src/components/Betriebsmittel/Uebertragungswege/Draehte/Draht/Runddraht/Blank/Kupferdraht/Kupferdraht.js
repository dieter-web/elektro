require("use-strict");
const path = require("path");
const { Blank } = require(path.resolve(
  "src/components/Betriebsmittel/Uebertragungswege/Draehte/Draht/Runddraht/Blank/Blank.js"
));

class Kupferdraht extends Blank {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
    // this.vis = {
    //   fill: "#ffffff",
    //   fillopacity: 0.5,
    //   style: "stroke:#ffffff; stroke-width: 1.0",
    //   // Drahtrechteck
    //   width: 300, //this.Parameter.l,
    //   height: 10, //this.Parameter.d,
    //   name: this.Parameter.Name,
    //   // Events
    //   "pointer-events": "all",
    // };
  }
}
exports.Kupferdraht = Kupferdraht;