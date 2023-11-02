require("use-strict");
const path = require("path");

const { Widerstaende } = require(path.resolve(
  "src/components/Betriebsmittel/Widerstaende/Widerstaende.js"
));

class Widerstand extends Widerstaende {
  constructor(Parameter) {
    super();
    this.nr = `g${this.Kennzeichnung.Art}${this.Kennzeichnung.Zählnummer}`;
    this.al = 20; // Anschlusslänge
    this.width = 64;
    this.height = 20;

    this.Parameter = Parameter;
    
    this.vis = {
      fill: "none",
      // fillopacity: 1,
      style: "stroke:#ffff; stroke-width: 1.0",

      // Widerstandsrechteck
      width: 64,
      height: 20,

      // Anschlüsse
      path: `M ${this.Parameter.x} ${this.Parameter.y} m 0 ${
        this.height / 2
      } l -${this.al} 0 m ${this.al + this.width} 0 l ${this.al} 0`,
      name: this.Parameter.Name,
      value: this.Parameter.R,

      // Pins
      pins: [
        [`${this.Parameter.x} - ${this.al}`, `${this.height / 2}`],
        [
          `${this.Parameter.x + 2 * this.al + this.width}`,
          `${this.height / 2}`,
        ],
      ],

      // Events
      "pointer-events": "all",
    };
  }

  Symbol() {
    return d3.create("svg:g").attr("id", this.nr);
  }
}

exports.Widerstand = Widerstand;
