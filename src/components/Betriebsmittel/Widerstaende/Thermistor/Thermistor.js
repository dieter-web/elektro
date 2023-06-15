require('use-strict')
const path = require('path')
const { Widerstaende } = require(path.resolve(
  'src/components/Betriebsmittel/Widerstaende/Widerstaende.js'
))

class Thermistor extends Widerstaende {
  constructor (Kennzeichnung, Parameter, Visual) {
    super(Kennzeichnung)
    this.Parameter = Parameter
    this.Visual = Visual
  }
}

exports.Thermistor = Thermistor
