require('use-strict')
const path = require('path')
const { Induktivitaet } = require(path.resolve(
  'src/components/Betriebsmittel/Induktivitaet/Induktivitaet.js'
))

class Spule extends Induktivitaet {
  constructor (Kennzeichnung, Parameter, Visual) {
    super(Visual)
    this.Kennzeichnung = Kennzeichnung
    this.Parameter = Parameter
    this.Visual = Visual
  }
}

class Spulenkoerper extends Spule {
  constructor (Kennzeichnung, Parameter, Visual) {
    super(Visual)
    this.Kennzeichnung = Kennzeichnung
    this.Parameter = Parameter
    this.Visual = Visual
  }
}

exports.Spule = Spule
exports.Spulenkoerper = Spulenkoerper
