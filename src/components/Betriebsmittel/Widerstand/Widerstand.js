require("use-strict");
const path = require("path");

const { Betriebsmittel } = require(path.resolve(
  "src/components/Betriebsmittel/Betriebsmittel.js"
));

// const  {Betriebsmittel}  = require(path.resolve('include/system'))

class Widerstand extends Betriebsmittel {
  constructor(Kennzeichnung, Parameter, Visual) {
    super(Kennzeichnung);
    this.Kennzeichnung = Kennzeichnung;
    this.Parameter = Parameter;

    this.Visual = {
      // eigenschaften
      extvis: Visual, // Widerstandsspezifikationen
      fill: "none",
      fillopacity: 1,
      style: "stroke:#ffff; stroke-width: 1.0",

      // Widerstandsrechteck
      width: 50,
      height: 20,

      // Anschlüsse
      path: "M 50 50 m 0 10 l -20 0 m 84 0 l 20 0",

      // Events
      "pointer-events": "all",
    };
  }
}

// BEWiderstand.prototype.pos = function (x, y) {
//   return [x, y]
// }

exports.Widerstand = Widerstand;
