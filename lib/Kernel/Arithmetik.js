require("use-strict");
const path = require("path");
const { create, all } = require("mathjs");
const config = {
  epsilon: 1e-12,
  matrix: "Array",
  number: "number",
  precision: 64,
  predictable: false,
  randomSeed: null,
};
const math = create(all, config);
const { Kernel } = require(path.resolve("src/Kernel/Kernel.js"));

class Arithmetik extends Kernel {
  constructor() {
    super();
  }
  parameter(obj) {
    this.param = {
      a: obj.a ? math.unit(obj.a) : null,
      // Variable a
      b: obj.b ? math.unit(obj.b) : null,
      // Variable b
      P: obj.P ? math.unit(obj.P) : null,
      // Prozentwert
      p: obj.p ? math.unit(obj.p) : null,
      // Prozentsatz
      G: obj.G ? math.unit(obj.G) : null, // Grundwert
    };
  }

  add() {
    return math.unit(this.run("a + b", this.param));
  }
  sub() {
    return math.unit(this.run("a - b", this.param));
  }
  mul() {
    return math.unit(this.run("a * b", this.param));
  }
  div() {
    return math.unit(this.run("a / b", this.param));
  }

  // mehr als 2 Werte
  // Prozentrechnung

  Prozentwert() {
    return this.run("(p * G) / 100", this.param);
  }
  Prozentsatz() {
    return this.run("(100 * P) / G", this.param);
  }
  Grundwert() {
    return this.run("(P * 100)  / G", this.param);
  }
  // Steigerung des Grundwertes um den Prozentsatz
  Grundwertp() {
    return this.run("G + p", this.param);
  }
}
exports.Arithmetik = Arithmetik;
