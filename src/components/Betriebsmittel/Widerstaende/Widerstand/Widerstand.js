require("use-strict");
const path = require("path");

const { Widerstaende } = require(path.resolve(
  "src/components/Betriebsmittel/Widerstaende/Widerstaende.js"
));

class Widerstand extends Widerstaende {
  constructor(Parameter) {
    super();    
    this.Parameter = Parameter;
  }

  add(name,Parameter) {
    this.Rmap.set(name,Parameter)
  }

}

exports.Widerstand = Widerstand;
