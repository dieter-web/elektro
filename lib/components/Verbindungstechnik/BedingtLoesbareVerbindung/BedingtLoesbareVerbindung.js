require('use-strict');
const path = require('path');
const {
  Verbindungstechnik
} = require(path.resolve('src/components/Verbindungstechnik/Verbindungstechnik'));
class BedingtLoesbareVerbindung extends Verbindungstechnik {
  constructor() {
    super();
  }
}
exports.BedingtLoesbareVerbindung = BedingtLoesbareVerbindung;