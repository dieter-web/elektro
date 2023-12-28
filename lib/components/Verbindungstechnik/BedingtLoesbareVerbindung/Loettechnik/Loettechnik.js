require("use-strict");
const path = require("path");
const {
  BedingtLoesbareVerbindung
} = require(path.resolve("src/components/Verbindungstechnik/BedingtLoesbareVerbindung/BedingtLoesbareVerbindung.js"));
class Loettechnik extends BedingtLoesbareVerbindung {
  constructor() {
    super();
  }
}
exports.Loettechnik = Loettechnik;