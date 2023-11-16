require("use-strict");
const path = require("path");

const { Leitung } = require(path.resolve(
  "src/components/Betriebsmittel/Uebertragungswege/Leitung/Leitung.js"
));

class IsolierteLeitung extends Leitung {
  constructor() {
    super();
    this.visIsolierteLeitung = {};
  }
}
exports.IsolierteLeitung = IsolierteLeitung;
