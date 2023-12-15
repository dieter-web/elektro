require("use-strict");
const path = require("path");

const { Klemmvorrichtungen } = require(path.resolve(
  "src/components/Betriebsmittel/Klemmvorrichtungen/Klemmvorrichtungen.js"
));

class Klemmleiste extends Klemmvorrichtungen {
  constructor() {
    super();
  }

  AddKlemme(Klemme) {}
}
exports.Klemmleiste = Klemmleiste;
