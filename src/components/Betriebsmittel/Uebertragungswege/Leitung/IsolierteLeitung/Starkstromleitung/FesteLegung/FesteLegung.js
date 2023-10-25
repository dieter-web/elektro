require("use-strict");
const path = require("path");
const { Starkstromleitung } = require(path.resolve(
  "src/components/Betriebsmittel/Uebertragungswege/Leitung/IsolierteLeitung/Starkstromleitung/Starkstromleitung.js"
));

class FesteLegung extends Starkstromleitung {
  constructor(Parameter) {
    super(Parameter);
    this.visFesteLegung = {
      //
    };
  }
}
exports.FesteLegung = FesteLegung;
