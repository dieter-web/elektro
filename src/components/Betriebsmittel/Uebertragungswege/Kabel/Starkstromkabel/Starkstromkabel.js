require('use-strict')
const path = require('path')

const { Kabel } = require(path.resolve(
  'src/components/Betriebsmittel/Uebertragungswege/Kabel/Kabel.js'
))

class Starkstromkabel extends Kabel {
  constructor (Kennzeichnung, Parameter, Visual) {
    super(Kennzeichnung)
    this.Kennzeichnung = Kennzeichnung
    this.Parameter = Parameter
    this.Visual = Visual
  }
}
exports.Starkstromkabel = Starkstromkabel
