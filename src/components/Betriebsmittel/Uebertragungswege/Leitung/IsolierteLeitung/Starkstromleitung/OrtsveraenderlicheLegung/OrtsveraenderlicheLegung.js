require("use-strict");
const path = require("path");
const { Starkstromleitung } = require(path.resolve(
  "src/components/Betriebsmittel/Uebertragungswege/Leitung/IsolierteLeitung/Starkstromleitung/Starkstromleitung.js"
));

class OrtsveraenderlicheLegung extends Starkstromleitung {
  constructor(Parameter) {
    super(Parameter);
    this.visOrtsveraenderlicheLegung = {
      //
    };
  }
}
exports.OrtsveraenderlicheLegung = OrtsveraenderlicheLegung;
