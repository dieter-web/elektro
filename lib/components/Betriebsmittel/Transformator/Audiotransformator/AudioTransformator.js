require("use-strict");
const path = require("path");
const {
  Transformator
} = require(path.resolve("src/components/Betriebsmittel/Transformator/Transformator.js"));
class AudioTransformator extends Transformator {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
exports.AudioTransformator = AudioTransformator;