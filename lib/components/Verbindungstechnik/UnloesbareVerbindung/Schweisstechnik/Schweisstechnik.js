require("use-strict");
const path = require("path");
const {
  UnloesbareVerbindung
} = require(path.resolve("src/components/Verbindungstechnik/UnloesbareVerbindung/UnloesbareVerbindung.js"));
class Schweissen extends UnloesbareVerbindung {
  constructor() {
    super();
  }
}
exports.Schweissen = Schweissen;