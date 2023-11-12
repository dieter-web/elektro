require("use-strict");
const path = require("path");

const { Lampe } = require(path.resolve(
  "src/components/Betriebsmittel/Verschiedenes/Beleuchtung/Lampe/Lampe.js"
));

class Gluehlampe extends Lampe {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
    this.vis = {
      fill: "transparent",
      fillopacity: 1,
      style: "stroke:#ffffff; stroke-width: 1.0",
      rx: 25,
      ry: 25,
    };
  }

  // path() {
  //   return `M 12.2 7.2 L 47.8 42.8 M 47.8 7.2 L 12.2 42.8 M 0 ${this.vis.ry} l 5 0
  //       M 60 ${this.vis.ry} l -5 0`;
  // }
}

exports.Gluehlampe = Gluehlampe;
