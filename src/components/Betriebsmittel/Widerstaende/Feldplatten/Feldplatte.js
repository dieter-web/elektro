require('use-strict')
const path = require('path')

const { Widerstaende } = require(path.resolve(
  'src/components/Betriebsmittel/Widerstaende/Widerstaende.js'
))

class Feldplatte extends Widerstaende {
  constructor (Kennzeichnung, Parameter, Visual) {
    super(Kennzeichnung)
    this.Parameter = Parameter
    this.Visual = Visual
  }
}

exports.Feldplatte = Feldplatte
