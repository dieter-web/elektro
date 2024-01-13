require("use-strict");
const path = require("path");
const {
  Rohrleitungen
} = require(path.resolve("src/components/Bauelemente/Rohrleitungen/Rohrleitungen.js"));
class Stahlrohre extends Rohrleitungen {
  constructor() {
    super();
  }
}
exports.Stahlrohre = Stahlrohre;