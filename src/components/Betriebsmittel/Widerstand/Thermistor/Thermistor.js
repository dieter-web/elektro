require("use-strict");
const path = require("path");
const { Widerstand } = require(path.resolve(
  "src/components/Betriebsmittel/Widerstand/Widerstand.js"
));

class Thermistor extends Widerstand {
  // constructor (Kennzeichnung, Parameter, Visual) {
  constructor(Kennzeichnung, Parameter) {
    super(Kennzeichnung);
    this.Parameter = Parameter;
    this.visThermistor = {
      path: "",
    };
    // this.Visual = Visual
  }
}

exports.Thermistor = Thermistor;
