require("use-strict");
const path = require("path");
const {
  Verbindungstechnik
} = require(path.resolve("src/components/Verbindungstechnik/Verbindungstechnik.js"));
class UnloesbareVerbindung extends Verbindungstechnik {
  constructor() {
    super();
  }
}
exports.UnloesbareVerbindung = UnloesbareVerbindung;