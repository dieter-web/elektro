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

exports.Kernel = Kernel;
