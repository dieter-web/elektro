require('use-strict')
const path = require('path')

const { Betriebsmittel } = require(path.resolve(
  'src/components/Betriebsmittel/Betriebsmittel.js'
))

// const  {Betriebsmittel}  = require(path.resolve('include/system'))

class Widerstaende extends Betriebsmittel {
  constructor (Kennzeichnung, Parameter, Visual) {
    super(Kennzeichnung)
    this.Parameter = Parameter
    this.Visual = Visual
  }
}

// BEWiderstand.prototype.pos = function (x, y) {
//   return [x, y]
// }

exports.Widerstaende = Widerstaende
