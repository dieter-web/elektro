require('use-strict');
const path = require('path');
const {
  create,
  all
} = require('mathjs');
const config = {
  epsilon: 1e-12,
  matrix: 'Array',
  number: 'number',
  precision: 64,
  predictable: false,
  randomSeed: null
};
const math = create(all, config);
const {
  run
} = require(path.resolve('src/js/run.js'));
class PlanemetrieKernel {
  constructor(par = {}) {
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
    return run('(PI / 4) * pow(d,2)', this.param);
  }
  KdA() {
    return run('sqrt( 4 / PI * A)', this.param);
  }
  KUd() {
    return run('PI * d', this.param);
  }
  KRADd() {
    return run('(PI / 4) * ( pow(D,2) - pow(d,2))', this.param);
  }
  KAuA() {
    return run('(pow(r) * PI * α) / w360', this.param);
  }
  KAub() {
    return run('(d * PI * α) / w360', this.param);
  }
  KAbA() {
    return run('(pow(r) * PI * α) / w360 - (s * (r - h)) / 2', this.param);
  }
  ElA() {
    return run('D * d * PI / 4', this.param);
  }
  ElU() {
    return run('(D + d) /2 * PI', this.param);
  }
  QUa() {
    return run('4 * l', this.param);
  }
  QAa() {
    return run('l * l', this.param);
  }
  QEa() {
    return run('l * sqrt(2)', this.param);
  }
  RDab() {
    return run('sqrt(pow(g,2) + sqrt(pow(h,2)))', this.param);
  }
  RAgh() {
    return run('g * h', this.param);
  }
  RUgh() {
    return run('2 * ( g + h)', this.param);
  }
  PaA() {
    return run('g * h', this.param);
  }
  PaU() {
    return run('2 * ( g + s)', this.param);
  }
  RoA() {
    return run('l * h', this.param);
  }
  RoU() {
    return run('4 * l', this.param);
  }
  TrA() {
    return run('(l1 + l2) / 2 * h', this.param);
  }
  TrU() {
    return run('l1 + l2 + s1 + s2', this.param);
  }
  DrA() {
    return run('(g * h) / 2', this.param);
  }
  DrU() {
    return run('a + b + g', this.param);
  }
}
exports.PlanemetrieKernel = PlanemetrieKernel;