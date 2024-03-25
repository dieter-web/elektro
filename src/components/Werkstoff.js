const path = require("path")
const dbJson = require(path.resolve("controllers/dbJson.js"))

class Werkstoff {
  constructor() {
    this.Kennzeichnung = {}
    this.Berechnung = {}
  }
}

class Eisenwerkstoff extends Werkstoff {
  constructor() {
    super()
    this.Werkstoffnummern = {
      Werkstoffhauptgruppe: [], //1
      Trennzeichen: ".",
      Sortennummern: [], // 2,3,4,5
      Trennzeichen: ".",
      Anhaengezahlen: [], // 6,7
    }
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
    }
  }
}

class Baustahl extends Eisenwerkstoff {}

class Automatenstahl extends Eisenwerkstoff {}

class Einsatzstahl extends Eisenwerkstoff {}

class Verguetungsstahl extends Eisenwerkstoff {}

class Werkzeugstahl extends Eisenwerkstoff {}

class Leiterwerkstoff extends Werkstoff {
  constructor(Material) {
    super()
    this.Eigenschaften = Material
    this.Parameter = dbJson.readJSONFile(path.resolve("src/json/Sonstiges/Leiterwerkstoffe.json"))[
      this.Eigenschaften.Material
    ]
  }

  fρ(name) {
    return this.Parameter.ρ[0]
  }

  fκ(name) {
    return this.Parameter.κ[0]
  }

  fδ0(name) {
    return this.Parameter.δ0[0]
  }

  fα20() {
    return this.Parameter.α20[0]
  }

  fβ20(name) {
    return this.Parameter.β20[0]
  }

  color(name) {
    return this.Material.color
  }
}

class MagnetischerWerkstoff extends Werkstoff {}

exports.Werkstoff = Werkstoff
exports.Eisenwerkstoff = Eisenwerkstoff
exports.Baustahl = Baustahl
exports.Automatenstahl = Automatenstahl
exports.Einsatzstahl = Einsatzstahl
exports.Verguetungsstahl = Verguetungsstahl
exports.Werkzeugstahl = Werkzeugstahl
exports.Leiterwerkstoff = Leiterwerkstoff
exports.MagnetischerWerkstoff = MagnetischerWerkstoff
