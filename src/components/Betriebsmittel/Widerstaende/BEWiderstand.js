require('use-strict')
const path = require('path')

const { Betriebsmittel } = require(path.resolve(
  'src/components/Betriebsmittel/Betriebsmittel.js'
))

class BEWiderstand extends Betriebsmittel {
  constructor (Kennzeichnung, Parameter, Visual) {
    super(Kennzeichnung)
    this.Parameter = Parameter
    this.Visual = Visual
    this.name = 'Widerstand'
  }
}

// BEWiderstand.prototype.pos = function (x, y) {
//   return [x, y]
// }

exports.BEWiderstand = BEWiderstand
