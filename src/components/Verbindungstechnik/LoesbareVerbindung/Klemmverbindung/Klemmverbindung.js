require("use-strict");
const path = require("path");

const { LoesbareVerbindung } = require(path.resolve(
  "src/components/Verbindungstechnik/LoesbareVerbindung/LoesbareVerbindung.js"
));

class Klemmverbindung extends LoesbareVerbindung {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
exports.Klemmverbindung = Klemmverbindung;
