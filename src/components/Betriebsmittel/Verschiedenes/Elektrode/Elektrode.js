require("use-strict");
const path = require("path");

const { Verschiedenes } = require(path.resolve(
  "src/components/Betriebsmittel/Verschiedenes/Verschiedenes"
));

class Elektrode extends Verschiedenes {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}

exports.Elektrode = Elektrode;
