require("use-strict");
const path = require("path");

const { UnloesbareVerbindung } = require(path.resolve(
  "src/components/Verbindungstechnik/UnloesbareVerbindung/UnloesbareVerbindung.js"
));

class Pressverbindung extends UnloesbareVerbindung {
  constructor() {
    super();
  }
}

exports.Pressverbindung = Pressverbindung;
