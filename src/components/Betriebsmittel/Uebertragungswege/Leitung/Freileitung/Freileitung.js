require('use-strict')
const path = require('path')
const { Leitung } = require(path.resolve(
  'src/components/Betriebsmittel/Uebertragungswege/Leitung/Leitung.js'
))

class Freileitung extends Leitung {
  constructor (Kennzeichnung, Parameter, Visual) {
    super(Kennzeichnung, Parameter, Visual)
    this.Kennzeichnung = Kennzeichnung
    this.Parameter = Parameter
    this.Visual = Visual
  }
}
exports.Freileitung = Freileitung
