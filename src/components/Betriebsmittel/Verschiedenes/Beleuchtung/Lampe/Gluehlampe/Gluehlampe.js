require('use-strict')
const path = require('path')

const { Lampe } = require(path.resolve(
  'src/components/Betriebsmittel/Verschiedenes/Beleuchtung/Lampe/Lampe.js'
))

class Gluehlampe extends Lampe {
  constructor (Kennzeichnung, Parameter, Visual) {
    super(Kennzeichnung)
    this.Kennzeichnung = Kennzeichnung
    this.Parameter = Parameter
    this.Visual = Visual
  }
}

exports.Gluehlampe = Gluehlampe
