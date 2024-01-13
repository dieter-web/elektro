require("use-strict");
const path = require("path");
const {
  create,
  all
} = require("mathjs");
const config = {
  epsilon: 1e-12,
  matrix: "Array",
  number: "number",
  precision: 64,
  predictable: false,
  randomSeed: null
};
const math = create(all, config);
const {
  Kernel
} = require(path.resolve("src/Kernel/Kernel.js"));
class Rohrleitungstechnik extends Kernel {
  constructor(par = {}) {
    super();
    this.param = {};
    this.parameter(par);
  }
  parameter(obj) {
    this.param = {
      Material: obj.Material ? Material : null,
      A: obj.A ? math.unit(obj.A) : null,
      ρ: obj.ρ ? math.unit(obj.ρ) : null,
      G: obj.G ? math.unit(obj.G) : null,
      D: obj.D ? math.unit(obj.D) : null,
      d: obj.d ? math.unit(obj.d) : null
    };
  }
  lAρG() {
    return this.run("A / (ρ * G)", this.param);
  }
}
exports.Rohrleitungstechnik = Rohrleitungstechnik;