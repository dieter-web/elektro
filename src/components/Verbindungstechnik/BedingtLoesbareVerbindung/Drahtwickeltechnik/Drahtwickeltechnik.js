require("use-strict");
const path = require("path");

const { BedingtLoesbareVerbindung } = require(path.resolve(
  "src/components/Verbindungstechnik/BedingtLoesbareVerbindung/BedingtLoesbareVerbindung.js"
));

class Drahtwickeltechnik extends BedingtLoesbareVerbindung {
  constructor() {
    super();
  }
}
exports.Drahtwickeltechnik = Drahtwickeltechnik;
