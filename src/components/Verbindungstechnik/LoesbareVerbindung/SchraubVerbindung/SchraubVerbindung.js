require("use-strict");
const path = require("path");
const dbJson = require(path.resolve("controllers/dbJson.js"));

const { LoesbareVerbindung } = require(path.resolve(
  "src/components/Verbindungstechnik/LoesbareVerbindung/LoesbareVerbindung.js"
));

class SchraubVerbindung extends LoesbareVerbindung {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }

  
}

exports.SchraubVerbindung = SchraubVerbindung;
