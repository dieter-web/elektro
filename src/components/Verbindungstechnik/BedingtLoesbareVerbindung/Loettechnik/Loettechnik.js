require("use-strict");
const path = require("path");

const { BedingtLoesbareVerbindung } = require(path.resolve(
  "src/components/Verbindungstechnik/BedingtLoesbareVerbindung/BedingtLoesbareVerbindung.js"
));

class Loettechnik extends BedingtLoesbareVerbindung {
  constructor(Kennzeichnung, Parameter, Visual) {
    super(Kennzeichnung, Parameter, Visual);
    this.Kennzeichnung = Kennzeichnung;
    this.Parameter = Parameter;
    this.Visual = Visual;
  }
}
exports.Loettechnik = Loettechnik;
