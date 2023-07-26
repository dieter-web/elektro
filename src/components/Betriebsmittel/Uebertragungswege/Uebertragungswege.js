require('use-strict')
const path = require('path')

const { Betriebsmittel } = require(path.resolve(
  'src/components/Betriebsmittel/Betriebsmittel.js'
))

class Uebertragungswege extends Betriebsmittel {
  constructor (Kennzeichnung, Parameter, Visual) {
    super(Visual)
    this.Kennzeichnung = Kennzeichnung
    this.Parameter = Parameter
    this.Visual = Visual
  }
}

exports.Uebertragungswege = Uebertragungswege
