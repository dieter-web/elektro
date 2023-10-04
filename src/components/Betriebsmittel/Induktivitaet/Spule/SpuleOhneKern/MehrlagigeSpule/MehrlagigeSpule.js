require("use-strict");
const path = require("path");
const { SpuleOhneKern } = require(path.resolve(
  "src/components/Betriebsmittel/Induktivitaet/Spule/SpuleOhneKern/SpuleOhneKern.js"
));

class MehrlagigeSpule extends SpuleOhneKern {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
    this.visMehrlagigeSpule = {
      fill: "black",
      fillopacity: 1,
      style: "stroke:#000000; stroke-width: 1.0",
      width: 64,
      height: 20,
      path: "M 50 50 m 0 10 l -20 0 m 84 0 l 20 0",
      name: "",
      value: "",
      "pointer-events": "all",
    };
  }
}
exports.MehrlagigeSpule = MehrlagigeSpule;
