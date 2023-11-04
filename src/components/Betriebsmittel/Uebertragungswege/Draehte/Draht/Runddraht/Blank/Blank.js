require("use-strict");
const path = require("path");
const { Runddraht } = require(path.resolve(
  "src/components/Betriebsmittel/Uebertragungswege/Draehte/Draht/Runddraht/Runddraht.js"
));

class Blank extends Runddraht {
  constructor(Parameter) {
    super(Parameter);
    this.visBlank = {
      // fill: "#ffffff",
      // fillopacity: 0.5,
      // style: "stroke:#ffffff; stroke-width: 1.0",
      // // Drahtrechteck
      // width: 300, //this.Parameter.l,
      // height: 10, //this.Parameter.d,
      // name: this.Parameter.Name,
      // // Events
      // "pointer-events": "all",
    };
  }
}
exports.Blank = Blank;
