require("use-strict");
const path = require("path");
const dbJson = require(path.resolve("controllers/dbJson.js"));

class Werkstoff {
  constructor() {
    this.Kennzeichnung = require(path.resolve(
      "src/json/Bezeichnungssysteme/Material.json"
    ));
  }
}

class Eisenwerkstoff extends Werkstoff {
  constructor() {
    super();
    this.Werkstoffnummern = {
      Werkstoffhauptgruppe: [], //1
      Trennzeichen: ".",
      Sortennummern: [], // 2,3,4,5
      Trennzeichen: ".",
      Anhaengezahlen: [], // 6,7
    };
    this.Kurznamen = {
      // Stahl mit Angaben der Gebrauchseigenschaft
      Gebrauchseigenschaft: {
        Gusszeichen: "", // 1
        Trennzeichen: "-",
        Erschmelzung: "",
        "Besondere Eigenschaften aus Erschmelzung": "",
        Gebrauchseigenschaften: "",
        Guetegruppe: "-",
        Gewaehrleistung: ".",
        Behandlung: "",
        "Besondere Eigenschaften aus Behandlung": "",
      },
      // Stahl mit Angaben der Zusammensetzung
      Zusammensetzung: {
        Gusszeichen: "",
        Trennzeichen: "-",
        "Kennzeichnung fuer hochleg. Stahl": "",
        "Chemische Zusammensetzung": "",
        Leerzeichen: " ",
        "Guetegruppe Werkzeugstahl": "",
        Leerzeichen: " ",
        Behandlung: "",
        "Besondere Eigenschaften aus Behandlung": "",
      },
    };
  }
}

class Baustahl extends Eisenwerkstoff {
  constructor() {
    super();
  }
}

class Automatenstahl extends Eisenwerkstoff {
  constructor() {
    super();
  }
}

class Einsatzstahl extends Eisenwerkstoff {
  constructor() {
    super();
  }
}

class Verguetungsstahl extends Eisenwerkstoff {
  constructor() {
    super();
  }
}

class Werkzeugstahl extends Eisenwerkstoff {
  constructor() {
    super();
  }
}

class Leiterwerkstoff extends Werkstoff {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;

    this.data = dbJson.readJSONFile(
      path.resolve("src/json/Sonstiges/Leiterwerkstoffe.json")
    )[Parameter.Material];
  }

  fρ(name) {
    return this.data.ρ[0];
  }

  fκ(name) {
    return this.data.κ[0];
  }

  fδ0(name) {
    return this.data.δ0[0];
  }

  fα20(name) {
    return this.data.α20[0];
  }

  fβ20(name) {
    return this.data.β20[0];
  }

  color(name) {
    return this.data.color;
  }
}

class MagnetischerWerkstoff extends Werkstoff {
  constructor() {
    super();
  }
}

exports.Werkstoff = Werkstoff;
exports.Eisenwerkstoff = Eisenwerkstoff;
exports.Baustahl = Baustahl;
exports.Automatenstahl = Automatenstahl;
exports.Einsatzstahl = Einsatzstahl;
exports.Verguetungsstahl = Verguetungsstahl;
exports.Werkzeugstahl = Werkzeugstahl;

exports.Leiterwerkstoff = Leiterwerkstoff;
exports.MagnetischerWerkstoff = MagnetischerWerkstoff;
