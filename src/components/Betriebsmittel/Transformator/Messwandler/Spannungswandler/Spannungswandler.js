require('use-strict')
const path = require('path')

const { Messwandler } = require(path.resolve(
  'src/components/Betriebsmittel/Transformator/Messwandler/Messwandler.js'
))

class Spannungswandler extends Messwandler {
  constructor (Kennzeichnung, Parameter, Visual) {
    super(Visual)
    this.Kennzeichnung = Kennzeichnung
    this.Parameter = Parameter
    this.Visual = Visual
  }
}

exports.Spannungswandler = Spannungswandler
