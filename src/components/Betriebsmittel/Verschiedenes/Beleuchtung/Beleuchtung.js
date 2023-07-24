require('use-strict')
const path = require('path')

const { Verschiedenes } = require(path.resolve(
  'src/components/Betriebsmittel/Verschiedenes/Verschiedenes.js'
))

class Beleuchtung extends Verschiedenes {
  constructor (Kennzeichnung, Parameter, Visual) {
    super(Kennzeichnung)
    this.Kennzeichnung = Kennzeichnung
    this.Parameter = Parameter
    this.Visual = Visual
  }
}

exports.Beleuchtung = Beleuchtung
