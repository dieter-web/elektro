require("use-strict");
const path = require("path");

const { Stahlrohre } = require(path.resolve(
  "src/components/Bauelemente/Rohrleitungen/Stahlrohre/Stahlrohre.js"
));

class NahtloseStahlrohre extends Stahlrohre {
  constructor() {
    super();
  }
}

exports.NahtloseStahlrohre = NahtloseStahlrohre;
