require('use-strict')
const path = require('path')
const { Betriebsmittel } = require(path.resolve(
  'src/components/Betriebsmittel/Betriebsmittel.js'
))

class Leitung extends Betriebsmittel {
  constructor (Kennzeichnung, Parameter, Visual) {
    super(Kennzeichnung)
    this.Parameter = Parameter
    this.Visual = Visual
    this.Name = 'Leitung'
  }
}
exports.Leitung = Leitung
