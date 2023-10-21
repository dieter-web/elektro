require("use-strict");
const path = require("path");

const { Widerstaende } = require(path.resolve(
  "src/components/Betriebsmittel/Widerstaende/Widerstaende.js"
));

class Widerstand extends Widerstaende {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;

    this.visWiderstand = {
      fill: "none",
      fillopacity: 1,
      style: "stroke:#ffff; stroke-width: 1.0",

      // Widerstandsrechteck
      width: 64,
      height: 20,

      // Anschlüsse
      path: `M ${this.Parameter.x} ${this.Parameter.y} m 0 10 l -20 0 m 84 0 l 20 0`,
      name: this.Parameter.Name,
      value: this.Parameter.R,

      // Events
      "pointer-events": "all",
    };
  }
}

Widerstand.prototype.pos = function (x, y) {
  return [x, y];
};

exports.Widerstand = Widerstand;
