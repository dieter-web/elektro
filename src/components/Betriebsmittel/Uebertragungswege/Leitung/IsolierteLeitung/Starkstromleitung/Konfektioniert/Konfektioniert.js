require("use-strict");
const path = require("path");
const { Starkstromleitung } = require(path.resolve(
  "src/components/Betriebsmittel/Uebertragungswege/Leitung/IsolierteLeitung/Starkstromleitung/Starkstromleitung.js"
));

class Konfektioniert extends Starkstromleitung {
  constructor(Parameter) {
    super(Parameter);
    this.visKonfektioniert = {
      //
    };
  }
}
exports.Konfektioniert = Konfektioniert;
