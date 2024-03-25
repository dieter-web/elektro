const { ElektrischeAnlagen } = require("../ElektrischeAnlagen.js");

class Verteilungssysteme extends ElektrischeAnlagen {}
class Gleichstromnetz extends Verteilungssysteme {
  constructor(Eigenschaften) {
    super();
    this.Eigenschaften = Eigenschaften;
  }
}

class Wechselstromnetz extends Verteilungssysteme {
  constructor(Eigenschaften) {
    super();
    this.Eigenschaften = Eigenschaften;
  }
}

class Drehstromnetz extends Verteilungssysteme {
  constructor(Eigenschaften) {
    super();
    this.Eigenschaften = Eigenschaften;
  }
}

exports.Verteilungssysteme = Verteilungssysteme;
exports.Gleichstromnetz = Gleichstromnetz;
exports.Wechselstromnetz = Wechselstromnetz;
exports.Drehstromnetz = Drehstromnetz;
