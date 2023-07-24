require('use-strict')
const path = require('path')

const { Beleuchtung } = require(path.resolve(
  'src/components/Betriebsmittel/Verschiedenes/Beleuchtung/Beleuchtung.js'
))

class Lampe extends Beleuchtung {
  constructor (Kennzeichnung, Parameter, Visual) {
    super(Kennzeichnung)
    this.Kennzeichnung = Kennzeichnung
    this.Parameter = Parameter
    this.Visual = Visual
  }
}

exports.Lampe = Lampe
