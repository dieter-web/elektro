const { Lampe } = require("../Lampe.js");

class Gluehlampe extends Lampe {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
exports.Gluehlampe = Gluehlampe;
