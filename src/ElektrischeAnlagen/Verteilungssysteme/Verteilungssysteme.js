const { ElektrischeAnlagen } = require("../ElektrischeAnlagen.js");

class Verteilungssysteme extends ElektrischeAnlagen {
  constructor() {
    super();
  }
}

class Gleichstromnetz extends Verteilungssysteme {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}

class Wechselstromnetz extends Verteilungssysteme {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}

class Drehstromnetz extends Verteilungssysteme {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}

exports.Verteilungssysteme = Verteilungssysteme;
exports.Gleichstromnetz = Gleichstromnetz;
exports.Wechselstromnetz = Wechselstromnetz;
exports.Drehstromnetz = Drehstromnetz;
