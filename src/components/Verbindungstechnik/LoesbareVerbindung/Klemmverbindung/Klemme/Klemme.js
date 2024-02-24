require("use-strict");
const path = require("path");

const { Klemmverbindung } = require(path.resolve(
  "src/components/Verbindungstechnik/LoesbareVerbindung/Klemmverbindung/Klemmverbindung.js"
));

class Klemme extends Klemmverbindung {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
exports.Klemme = Klemme;
