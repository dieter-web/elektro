class Verbindungstechnik {
  constructor() {
    this.Kennzeichnung = {};
  }
}

class UnloesbareVerbindung extends Verbindungstechnik {
  constructor() {
    super();
  }
}

class Spleissen extends UnloesbareVerbindung {
  constructor() {
    super();
  }
}

class Schweissen extends UnloesbareVerbindung {
  constructor() {
    super();
  }
}

class Widerstandsschweissen extends Schweissen {
  constructor() {
    super();
  }
}

class Ultraschallschweissen extends Schweissen {
  constructor() {
    super();
  }
}

class Schutzgasschweissen extends Schweissen {
  constructor() {
    super();
  }
}

class Schmelzschweissen extends Schweissen {
  constructor() {
    super();
  }
}

class Pressschweissen extends Schweissen {
  constructor() {
    super();
  }
}

class Mikroplasmaschweissen extends Schweissen {
  constructor() {
    super();
  }
}

class Impulsstromschweissen extends Schweissen {
  constructor() {
    super();
  }
}

class Abbrennstumpfschweissen extends Schweissen {
  constructor() {
    super();
  }
}

class Pressverbindung extends UnloesbareVerbindung {
  constructor() {
    super();
  }
}

class Klebeverbindung extends UnloesbareVerbindung {
  constructor() {
    super();
  }
}

class Bonden extends UnloesbareVerbindung {
  constructor() {
    super();
  }
}

class LoesbareVerbindung extends Verbindungstechnik {
  constructor() {
    super();
  }
}

class SchraubVerbindung extends LoesbareVerbindung {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}

class Steckverbindung extends LoesbareVerbindung {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}

class QuetschUndSteckvergindung extends LoesbareVerbindung {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}

class Klemmverbindung extends LoesbareVerbindung {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}

class Klemme extends Klemmverbindung {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}

class BedingtLoesbareVerbindung extends Verbindungstechnik {
  constructor() {
    super();
  }
}

class Schneidklemmtechnik extends BedingtLoesbareVerbindung {
  constructor() {
    super();
  }
}

class Loettechnik extends BedingtLoesbareVerbindung {
  constructor() {
    super();
  }
}

class Weichloeten extends Loettechnik {
  constructor() {
    super();
  }
}

class Hochtemperaturloeten extends Loettechnik {
  constructor() {
    super();
  }
}

class Hartloeten extends Loettechnik {
  constructor() {
    super();
  }
}

class Einpresstechnik extends BedingtLoesbareVerbindung {
  constructor() {
    super();
  }
}

class Drahtwickeltechnik extends BedingtLoesbareVerbindung {
  constructor() {
    super();
  }
}
exports.Drahtwickeltechnik = Drahtwickeltechnik;
exports.Einpresstechnik = Einpresstechnik;
exports.Weichloeten = Weichloeten;
exports.Hochtemperaturloeten = Hochtemperaturloeten;
exports.Hartloeten = Hartloeten;
exports.Loettechnik = Loettechnik;
exports.Schneidklemmtechnik = Schneidklemmtechnik;
exports.BedingtLoesbareVerbindung = BedingtLoesbareVerbindung;
exports.Klemme = Klemme;
exports.Klemmverbindung = Klemmverbindung;
exports.QuetschUndSteckvergindung = QuetschUndSteckvergindung;
exports.SchraubVerbindung = SchraubVerbindung;
exports.LoesbareVerbindung = LoesbareVerbindung;
exports.Steckverbindung = Steckverbindung;
exports.Bonden = Bonden;
exports.Klebeverbindung = Klebeverbindung;
exports.Pressverbindung = Pressverbindung;
exports.Schweissen = Schweissen;
exports.Spleissen = Spleissen;
exports.UnloesbareVerbindung = UnloesbareVerbindung;
exports.Widerstandsschweissen = Widerstandsschweissen;
exports.Ultraschallschweissen = Ultraschallschweissen;
exports.Schutzgasschweissen = Schutzgasschweissen;
exports.Schmelzschweissen = Schmelzschweissen;
exports.Pressschweissen = Pressschweissen;
exports.Mikroplasmaschweissen = Mikroplasmaschweissen;
exports.Impulsstromschweissen = Impulsstromschweissen;
exports.Abbrennstumpfschweissen = Abbrennstumpfschweissen;
exports.Verbindungstechnik = Verbindungstechnik;
