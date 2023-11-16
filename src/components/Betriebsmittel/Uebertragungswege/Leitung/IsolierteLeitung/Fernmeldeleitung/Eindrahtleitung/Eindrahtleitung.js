require("use-strict");
const path = require("path");

const { Fernmeldeleitung } = require(path.resolve(
  "src/components/Betriebsmittel/Uebertragungswege/Leitung/IsolierteLeitung/Fernmeldeleitung/Fernmeldeleitung.js"
));

class Eindrahtleitung extends Fernmeldeleitung {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
    this.vis = {};
  }
}
exports.Eindrahtleitung = Eindrahtleitung;
