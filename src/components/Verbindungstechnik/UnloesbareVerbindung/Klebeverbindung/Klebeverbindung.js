require("use-strict");
const path = require("path");

const { UnloesbareVerbindung } = require(path.resolve(
  "src/components/Verbindungstechnik/UnloesbareVerbindung/UnloesbareVerbindung.js"
));

class Klebeverbindung extends UnloesbareVerbindung {
  constructor() {
    super();
  }
}

exports.Klebeverbindung = Klebeverbindung;
