require("use-strict");
const path = require("path");
const { Thermistor } = require(path.resolve(
  "src/components/Betriebsmittel/Widerstand/Thermistor/Thermistor.js"
));

class Heissleiter extends Thermistor {
  // constructor (Kennzeichnung, Parameter, Visual) {
  constructor(Kennzeichnung, Parameter) {
    super(Kennzeichnung);
    this.Parameter = Parameter;
    this.HeissleiterVisual = {
      // path: "M 50 50 ..."
    };
  }
}

exports.Heissleiter = Heissleiter;
