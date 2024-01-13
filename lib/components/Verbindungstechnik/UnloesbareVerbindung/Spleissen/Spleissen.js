require("use-strict");
const path = require("path");
const {
  UnloesbareVerbindung
} = require(path.resolve("src/components/Verbindungstechnik/UnloesbareVerbindung/UnloesbareVerbindung.js"));
class Spleissen extends UnloesbareVerbindung {
  constructor() {
    super();
  }
}
exports.Spleissen = Spleissen;