require("use-strict");
const path = require("path");
const { Leitung } = require(path.resolve(
  "src/components/Betriebsmittel/Uebertragungswege/Leitung/IsolierteLeitung/IsolierteLeitung.js"
));

class Starkstromleitung extends IsolierteLeitung {
  constructor(Parameter) {
    super(Parameter);
    this.visStarkstromleitung = {
      //
    };
  }
}
exports.Starkstromleitung = Starkstromleitung;
