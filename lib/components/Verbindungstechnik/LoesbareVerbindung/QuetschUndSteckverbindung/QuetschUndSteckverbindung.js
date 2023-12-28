require("use-strict");
const path = require("path");
const {
  LoesbareVerbindung
} = require(path.resolve("src/components/Verbindungstechnik/LoesbareVerbindung/LoesbareVerbindung.js"));
class Stecker extends LoesbareVerbindung {
  constructor() {
    super();
  }
}
exports.Stecker = Stecker;