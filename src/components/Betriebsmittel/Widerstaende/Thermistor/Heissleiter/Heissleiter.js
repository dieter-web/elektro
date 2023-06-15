require('use-strict')
const path = require('path')
const { Thermistor } = require(path.resolve(
  'src/components/Betriebsmittel/Widerstaende/Thermistor/Thermistor.js'
))

class Heissleiter extends Thermistor {
  constructor (Kennzeichnung, Parameter, Visual) {
    super(Kennzeichnung)
    this.Parameter = Parameter
    this.Visual = Visual
  }
}

exports.Heissleiter = Heissleiter
