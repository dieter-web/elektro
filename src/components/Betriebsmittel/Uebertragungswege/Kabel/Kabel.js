require('use-strict')
const path = require('path')

const { Uebertragungswege } = require(path.resolve(
  'src/components/Betriebsmittel/Uebertragungswege/Uebertragungswege.js'
))

class Kabel extends Uebertragungswege {
  constructor (Kennzeichnung, Parameter, Visual) {
    super(Kennzeichnung)
    this.Kennzeichnung = Kennzeichnung
    this.Parameter = Parameter
    this.Visual = Visual
  }
}
exports.Kabel = Kabel
