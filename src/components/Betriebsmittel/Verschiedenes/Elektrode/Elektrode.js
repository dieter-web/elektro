require('use-strict')
const path = require('path')

const { Verschiedenes } = require(path.resolve(
  'src/components/Betriebsmittel/Verschiedenes/Verschiedenes'
))

class Elektrode extends Verschiedenes {
  constructor (Kennzeichnung, Parameter, Visual) {
    super(Visual)
    this.Kennzeichnung = Kennzeichnung
    this.Parameter = Parameter
    this.Visual = Visual
  }
}

exports.Elektrode = Elektrode
