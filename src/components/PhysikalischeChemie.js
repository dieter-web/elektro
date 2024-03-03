class PhysikalischeChemie {
  constructor() {}
}

class Elektrochemie extends PhysikalischeChemie {
  constructor() {
    super();
  }
}

class Elektrode extends Elektrochemie {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}

class Elektrolyt extends Elektrochemie {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}

exports.Elektrolyt = Elektrolyt;
exports.Elektrode = Elektrode;
exports.Elektrochemie = Elektrochemie;
exports.PhysikalischeChemie = PhysikalischeChemie;
