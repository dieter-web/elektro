const { Verschiedenes } = require("../Verschiedenes.js");

class Elektrode extends Verschiedenes {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}

exports.Elektrode = Elektrode;
