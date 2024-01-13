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
class Planemetrie extends Kernel {
  constructor(par = {}) {
    super();
    this.param = {};
    this.parameter(par);
  }
  parameter(obj) {
    this.param = {
      w360: obj.w360 ? math.unit(obj.w360) : null,
      A: obj.A ? math.unit(obj.A) : null,
      d: obj.d ? math.unit(obj.d) : null,
      D: obj.D ? math.unit(obj.D) : null,
      α: obj.α ? math.unit(obj.α) : null,
      r: obj.r ? math.unit(obj.r) : null,
      s: obj.s ? math.unit(obj.s) : null,
      s1: obj.s1 ? math.unit(obj.s1) : null,
      s2: obj.s2 ? math.unit(obj.s2) : null,
      g: obj.g ? math.unit(obj.g) : null,
      h: obj.h ? math.unit(obj.h) : null,
      l: obj.l ? math.unit(obj.l) : null,
      l1: obj.l1 ? math.unit(obj.l1) : null,
      l2: obj.l2 ? math.unit(obj.l2) : null,
      a: obj.a ? math.unit(obj.a) : null,
      b: obj.b ? math.unit(obj.b) : null
    };
  }
  KAd() {
    return this.run("(PI / 4) * pow(d,2)", this.param);
  }
  KdA() {
    return this.run("sqrt( 4 / PI * A)", this.param);
  }
  KUd() {
    return this.run("PI * d", this.param);
  }
  KRADd() {
    return this.run("(PI / 4) * ( pow(D,2) - pow(d,2))", this.param);
  }
  KAuA() {
    return this.run("(pow(r) * PI * α) / w360", this.param);
  }
  KAub() {
    return this.run("(d * PI * α) / w360", this.param);
  }
  KAbA() {
    return this.run("(pow(r) * PI * α) / w360 - (s * (r - h)) / 2", this.param);
  }
  ElA() {
    return this.run("D * d * PI / 4", this.param);
  }
  ElU() {
    return this.run("(D + d) /2 * PI", this.param);
  }
  QUa() {
    return this.run("4 * l", this.param);
  }
  QAa() {
    return this.run("l * l", this.param);
  }
  QEa() {
    return this.run("l * sqrt(2)", this.param);
  }
  RDab() {
    return this.run("sqrt(pow(g,2) + sqrt(pow(h,2)))", this.param);
  }
  RAgh() {
    return this.run("g * h", this.param);
  }
  RUgh() {
    return this.run("2 * ( g + h)", this.param);
  }
  PaA() {
    return this.run("g * h", this.param);
  }
  PaU() {
    return this.run("2 * ( g + s)", this.param);
  }
  RoA() {
    return this.run("l * h", this.param);
  }
  RoU() {
    return this.run("4 * l", this.param);
  }
  TrA() {
    return this.run("(l1 + l2) / 2 * h", this.param);
  }
  TrU() {
    return this.run("l1 + l2 + s1 + s2", this.param);
  }
  DrA() {
    return this.run("(g * h) / 2", this.param);
  }
  DrU() {
    return this.run("a + b + g", this.param);
  }
}
exports.Planemetrie = Planemetrie;