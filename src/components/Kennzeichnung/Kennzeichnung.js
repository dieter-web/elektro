require('use-strict')
const path = require('path')
class Kennzeichnung {
  constructor (Anlage, Ort, Art, Zaehlnummer, Funktion, Anschlussart, Anzahl) {
    this.Anlage = Anlage
    this.Ort = Ort
    this.Art = Art
    this.Zaehlnummer = Zaehlnummer
    this.Funktion = Funktion
    this.Anschlussart = Anschlussart
    this.Anschluesse = Anzahl
  }
}
