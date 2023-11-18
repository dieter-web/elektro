require("use-strict");
const path = require("path");

const { Transformator } = require(path.resolve(
  "src/components/Betriebsmittel/Transformator/Transformator.js"
));

class Dreiphasentransformator extends Transformator {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}

exports.Dreiphasentransformator = Dreiphasentransformator;
