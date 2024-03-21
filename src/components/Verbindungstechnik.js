class Verbindungstechnik {
  constructor() {
    this.Kennzeichnung = {};
  }
}

class UnloesbareVerbindung extends Verbindungstechnik {}

class Spleissen extends UnloesbareVerbindung {}

class Schweissen extends UnloesbareVerbindung {}

class Widerstandsschweissen extends Schweissen {}

class Ultraschallschweissen extends Schweissen {}

class Schutzgasschweissen extends Schweissen {}

class Schmelzschweissen extends Schweissen {}

class Pressschweissen extends Schweissen {}

class Mikroplasmaschweissen extends Schweissen {}

class Impulsstromschweissen extends Schweissen {}

class Abbrennstumpfschweissen extends Schweissen {}

class Pressverbindung extends UnloesbareVerbindung {}

class Klebeverbindung extends UnloesbareVerbindung {}

class Bonden extends UnloesbareVerbindung {}

class LoesbareVerbindung extends Verbindungstechnik {}

class SchraubVerbindung extends LoesbareVerbindung {
  constructor(Eigenschaften) {
    super();
    this.Eigenschaften = Eigenschaften;
  }
}

class Steckverbindung extends LoesbareVerbindung {
  constructor(Eigenschaften) {
    super();
    this.Eigenschaften = Eigenschaften;
  }
}

class QuetschUndSteckvergindung extends LoesbareVerbindung {
  constructor(Eigenschaften) {
    super();
    this.Eigenschaften = Eigenschaften;
  }
}

class Klemmverbindung extends LoesbareVerbindung {
  constructor(Eigenschaften) {
    super();
    this.Eigenschaften = Eigenschaften;
  }
}

class Klemme extends Klemmverbindung {
  constructor(Eigenschaften) {
    super();
    this.Eigenschaften = Eigenschaften;
  }
}

class BedingtLoesbareVerbindung extends Verbindungstechnik {}

class Schneidklemmtechnik extends BedingtLoesbareVerbindung {}

class Loettechnik extends BedingtLoesbareVerbindung {}

class Weichloeten extends Loettechnik {}

class Hochtemperaturloeten extends Loettechnik {}

class Hartloeten extends Loettechnik {}

class Einpresstechnik extends BedingtLoesbareVerbindung {}

class Drahtwickeltechnik extends BedingtLoesbareVerbindung {}

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
