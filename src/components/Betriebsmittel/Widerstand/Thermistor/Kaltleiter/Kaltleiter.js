require('use-strict')
const path = require('path')

const { Thermistor } = require(path.resolve(
  'src/components/Betriebsmittel/Widerstand/Thermistor/Thermistor.js'
))

class Kaltleiter extends Thermistor {
  constructor (Kennzeichnung, Parameter, Visual) {
    super(Kennzeichnung)
    this.Parameter = Parameter
    this.Visual = Visual
    this.name = 'Kaltleiter'
  }
}

exports.Kaltleiter = Kaltleiter
