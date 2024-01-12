require("use-strict");
const path = require("path");

// const {Bauelemente} = require(path.resolve('include/system'))
const { Bauelemente } = require(path.resolve(
  "src/components/Bauelemente/Bauelemente.js"
));

const DN = [
  10,
  15,
  20,
  25,
  32,
  40,
  50,
  60,
  65,
  80,
  100,
  125,
  150,
  200,
  250,
  300,
  350,
  400,
  450,
  500,
  600,
  700,
  800,
  900,
  1000,
  1100,
  1200,
  1400,
  1500,
  1600,
  1800,
  2000,
  2200,
  2400,
  2600,
  2800,
  3000,
  3200,
  3400,
  3600,
  3800,
  4000,
];

const PN = [2.5, 6, 10, 16, 25, 40, 63, 100];

class Rohrleitungen extends Bauelemente {
  constructor() {
    super();
  }
  //TODO: schreiben!
  getDN() {}
  getPN() {}
}

exports.Rohrleitungen = Rohrleitungen;
