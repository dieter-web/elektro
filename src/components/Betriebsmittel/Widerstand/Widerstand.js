require('use-strict')
const path = require('path')

const { Betriebsmittel } = require(path.resolve(
  'src/components/Betriebsmittel/Betriebsmittel.js'
))

// const  {Betriebsmittel}  = require(path.resolve('include/system'))

class Widerstand extends Betriebsmittel {
  constructor (Kennzeichnung, Parameter, Visual) {
    super(Kennzeichnung)
    this.Parameter = Parameter
    this.Visual = {
      extvis : Visual,
      width: 50,
      height: 20
    }
  }
}

// BEWiderstand.prototype.pos = function (x, y) {
//   return [x, y]
// }

exports.Widerstand = Widerstand
