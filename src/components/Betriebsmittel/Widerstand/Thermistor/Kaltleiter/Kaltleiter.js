require("use-strict");
const path = require("path");

const { Thermistor } = require(path.resolve(
  "src/components/Betriebsmittel/Widerstand/Thermistor/Thermistor.js"
));

class Kaltleiter extends Thermistor {
  // constructor (Kennzeichnung, Parameter, Visual) {
  constructor(Kennzeichnung, Parameter) {
    super(Kennzeichnung);
    this.Parameter = Parameter;
    this.name = "Kaltleiter";
    this.visKaltleiter = {
      path: "M 50 50 l -20 0",
    };
    // visThermistor,
    // visWiderstand,
    // visBetriebsmittel,
  }
}

exports.Kaltleiter = Kaltleiter;
