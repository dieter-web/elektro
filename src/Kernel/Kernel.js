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

const { run } = require(path.resolve("src/js/run.js"));

class Kernel {
  constructor() {
    this.param = {};
  }
  appendParameter(key, value) {
    this.param[`${key}`] = math.unit(value);
  }
}

exports.Kernel = Kernel;
