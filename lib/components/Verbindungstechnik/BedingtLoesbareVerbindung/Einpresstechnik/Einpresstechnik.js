require('use-strict');
const path = require('path');
const {
  BedingtLoesbareVerbindung
} = require(path.resolve('src/components/Verbindungstechnik/BedingtLoesbareVerbindung/BedingtLoesbareVerbindung.js'));
class Einpresstechnik extends BedingtLoesbareVerbindung {
  constructor() {
    super();
  }
}
exports.Einpresstechnik = Einpresstechnik;