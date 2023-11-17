require("use-strict");
const path = require("path");

const { Fernmeldeleitung } = require(path.resolve(
  "src/components/Betriebsmittel/Uebertragungswege/Leitung/IsolierteLeitung/Fernmeldeleitung/Fernmeldeleitung.js"
));

class Litzeleitung extends Fernmeldeleitung {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
    this.vis = {
      fill: "none",
      fillopacity: "0.2",
      style: "stroke:#ffff; stroke-width: 1.0",
      width: 200,
      height: 10,

      // Anschlüsse

      // Pins

      // Events
      "pointer-events": "all",
    };
  }
}
exports.Litzeleitung = Litzeleitung;
