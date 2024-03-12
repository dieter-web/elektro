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

class Kernel {
  constructor() {
    this.param = {};
  }

  appendParameter(key, value) {
    this.param[`${key}`] = math.unit(value);
  }

  run(code, param) {
    try {
      return math.unit(math.parse(code).compile().evaluate(param)); //.toSI();
    } catch (err) {
      console.error(err);
    }
  }
}

class Arithmetik extends Kernel {
  constructor() {
    super();
  }

  parameter(obj) {
    this.param = {
      a: obj.a ? math.unit(obj.a) : null, // Variable a
      b: obj.b ? math.unit(obj.b) : null, // Variable b
      P: obj.P ? math.unit(obj.P) : null, // Prozentwert
      p: obj.p ? math.unit(obj.p) : null, // Prozentsatz
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

class Elektro extends Kernel {
  constructor(par = {}) {
    super();
    this.param = {};
    this.parameter(par);
  }

  appendParameter(key, value) {
    this.param[`${key}`] = math.unit(value);
  }

  parameter(obj) {
    this.param = {
      Material: obj.Material ? obj.Material : null,
      ρ: obj.ρ ? math.unit(obj.ρ) : null,
      ρ1: obj.ρ1 ? math.unit(obj.ρ1) : null,
      κ: obj.κ ? math.unit(obj.κ) : null,
      κ1: obj.κ1 ? math.unit(obj.κ1) : null,
      A: obj.A ? math.unit(obj.A) : null,
      l: obj.l ? math.unit(obj.l) : null,
      d: obj.d ? math.unit(obj.d) : null,
      Q: obj.Q ? math.unit(obj.Q) : null,
      t: obj.t ? math.unit(obj.t) : null,
      U: obj.U ? math.unit(obj.U) : null,
      U1: obj.U1 ? math.unit(obj.U1) : null,
      Ui: obj.Ui ? math.unit(obj.Ui) : null,
      Ni: obj.Ni ? math.unit(obj.Ni) : null,
      Nsum: obj.Nsum ? math.unit(obj.Nsum) : null,
      R: obj.R ? math.unit(obj.R) : null,
      R1: obj.R1 ? math.unit(obj.R1) : null,
      R20: obj.R20 ? math.unit(obj.R20) : null,
      Rδ2: obj.Rδ2 ? math.unit(obj.Rδ2) : null,
      G: obj.G ? math.unit(obj.G) : null,
      I: obj.I ? math.unit(obj.I) : null,
      I1: obj.I1 ? math.unit(obj.I1) : null,
      S: obj.S ? math.unit(obj.S) : null,
      α20: obj.α20 ? math.unit(obj.α20) : null,
      δ0: obj.δ0 ? math.unit(obj.δ0) : null,
      δ: obj.δ ? math.unit(obj.δ) : null,
      δ1: obj.δ1 ? math.unit(obj.δ1) : null,
      δ2: obj.δ2 ? math.unit(obj.δ2) : null,
      δ20: obj.δ20 ? math.unit(obj.δ20) : null,
    };
  }

  IQt() {
    return this.run("Q / t", this.param);
  }
  IUR() {
    return this.run("U / R", this.param);
  }
  III1() {
    return this.run("I / I1", this.param);
  }
  IρAlU() {
    return this.run("U * (A / (ρ * l))", this.param);
  }
  ΔI() {
    return this.run("(1 - ((1 + α20 * (δ1 - δ20)) / (1 + α20 * (δ2 - δ20)))) * 100", this.param);
  }
  QIt() {
    return this.run("I * t", this.param);
  }
  lρra() {
    return this.run("R * A / ρ", this.param);
  }
  lκra() {
    return this.run("R * A * κ", this.param);
  }
  lκus() {
    return this.run("(U / S) * κ", this.param);
  }
  lρus() {
    return this.run("(U / S) / ρ", this.param);
  }
  AρlR() {
    return this.run("(l * ρ) / R", this.param);
  }
  AρlUI() {
    return this.run("(l * ρ * I) / U", this.param);
  }
  Ad() {
    return this.run(this.Ad.evaluate(this.param));
  }
  κlra() {
    return this.run("l / (R * A)", this.param);
  }
  κlsu() {
    return this.run("(l * S) / U ", this.param);
  }
  GIU() {
    return this.run("I / U", this.param);
  }
  GAρl() {
    return this.run("A / ( ρ * l )", this.param);
  }
  ΦRI() {
    return this.run("R * I", this.param);
  }
  UIR() {
    return this.run("I * R", this.param);
  }
  UIG() {
    return this.run("I / G", this.param);
  }
  UUiNiNsum() {
    return this.run("( Ui * Nsum ) / Ni", this.param);
  }
  ρRAl() {
    return this.run("(R * A) / l", this.param);
  }
  ρUlS() {
    return this.run("U / (l * S)", this.param);
  }
  SIA() {
    return this.run("I / A", this.param);
  }
  SUρl() {
    return this.run("U / (ρ * l)", this.param);
  }
  δM() {
    return this.run("(1 / α20 ) - δ20", this.param);
  }
  δ2() {
    return this.run("(((Rδ2 - R) / R) * (δ0 + δ1)) + δ1", this.param);
  }
  Rδ() {
    return this.run("R20 + R20 *α20 *( δ2 - δ20 )", this.param);
  }

  Rpδ1δ2() {
    return this.run("(1 - ( (1 + α20 * (δ1 - δ20) ) / (1 + α20 * (δ2 - δ20) ) ) ) * 100", this.param);
  }

  Δδρ() {
    return this.run("1 /α20 * ((ρ / ρ1) - 1)", this.param);
  }
  Δδκ() {
    return this.run("1 /α20 * (( κ/ κ1) - 1) ", this.param);
  }
  RρlA() {
    return this.run("( ρ * (l / A))", this.param);
  }
  RUI() {
    return this.run("U / J", this.param);
  }
  RRR1() {
    return this.run("R / R1", this.param);
  }
  UUU1() {
    return this.run("U / U1", this.param);
  }
  α20() {
    return this.run("( (Rδ2 / R20) - 1 ) * (1 / (δ2 - δ20) )", this.param);
  }
}

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
      b: obj.b ? math.unit(obj.b) : null,
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
      d: obj.d ? math.unit(obj.d) : null,
    };
  }

  lAρG() {
    return this.run("A / (ρ * G)", this.param);
  }
}

exports.Rohrleitungstechnik = Rohrleitungstechnik;
exports.Planemetrie = Planemetrie;
exports.Elektro = Elektro;
exports.Arithmetik = Arithmetik;
