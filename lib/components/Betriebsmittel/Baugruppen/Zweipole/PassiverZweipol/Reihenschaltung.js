require("use-strict");
const path = require("path");
// const math = require('mathjs')

const {
  PassiverZweipol
} = require(path.resolve("src/components/Betriebsmittel/Baugruppen/Zweipole/PassiverZweipol/PassiverZweipol.js"));
class Reihenschaltung extends PassiverZweipol {
  // mehr als 2 Widerstände
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}

// 2 Widerstände
class Spannungsteiler extends Reihenschaltung {
  constructor(Parameter) {
    super(Parameter);
  }
}
exports.Reihenschaltung = Reihenschaltung;
exports.Spannungsteiler = Spannungsteiler;