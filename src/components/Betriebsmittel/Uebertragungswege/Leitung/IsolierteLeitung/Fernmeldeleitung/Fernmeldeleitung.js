require("use-strict");
const path = require("path");
const { IsolierteLeitung } = require(path.resolve(
  "src/components/Betriebsmittel/Uebertragungswege/Leitung/IsolierteLeitung/IsolierteLeitung.js"
));

class Fernmeldeleitung extends IsolierteLeitung {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
    this.vis = {};
  }
}
exports.Fernmeldeleitung = Fernmeldeleitung;
