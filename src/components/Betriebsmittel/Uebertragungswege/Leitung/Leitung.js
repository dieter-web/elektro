require("use-strict");
const path = require("path");
const { Uebertragungswege } = require(path.resolve(
  "src/components/Betriebsmittel/Uebertragungswege/Uebertragungswege.js"
));

class Leitung extends Uebertragungswege {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
    this.visLeitung = {
      fill: "#B8733",
      fillopacity: 1,
      style: "stroke:#ffff; strocke-width: 1.0",
      width: this.Parameter.l, // 3 km
      height: this.Parameter.h, // 0.9 mm

      // Anschlüsse
      path: "",
      name: "",
      value: "",

      // Events
      "pointer-events": "all",
    };
  }
}
exports.Leitung = Leitung;
