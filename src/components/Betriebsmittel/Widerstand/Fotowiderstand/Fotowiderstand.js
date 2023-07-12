require('use-strict')
const path = require('path')

const { Widerstand } = require(path.resolve(
  'src/components/Betriebsmittel/Widerstand/Widerstand.js'
))

class Fotowiderstand extends Widerstand {
  constructor (Kennzeichnung, Parameter, Visual) {
    super(Kennzeichnung)
    this.Parameter = Parameter
    this.Visual = Visual
  }
}

exports.Fotowiderstand = Fotowiderstand
