require("use-strict");
const path = require("path");
const { IsolierteLeitung } = require(path.resolve(
  "src/components/Betriebsmittel/Uebertragungswege/Leitung/IsolierteLeitung/IsolierteLeitung.js"
));

class Starkstromleitung extends IsolierteLeitung {
  constructor() {
    super();
    this.vis = {};
  }
}
exports.Starkstromleitung = Starkstromleitung;
