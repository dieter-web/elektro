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
function run(code, param) {
  try {
    return math.parse(code).compile().evaluate(param);
  } catch (err) {
    console.error(err);
  }
}
exports.run = run;