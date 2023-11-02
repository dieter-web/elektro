require("use-strict");
const path = require("path");

const { LoesbareVerbindung } = require(path.resolve(
  "src/components/Verbindungstechnik/LoesbareVerbindung/LoesbareVerbindung.js"
));

class Klemmverbindung extends LoesbareVerbindung {
  constructor(Parameter) {
    super();

    this.r = 3;

    this.Parameter = Parameter;
    this.vis = {
      fill: "none",
      style: "stroke:#ffffff; stroke-width: 1.0",
      
    };
  }
}
exports.Klemmverbindung = Klemmverbindung;
