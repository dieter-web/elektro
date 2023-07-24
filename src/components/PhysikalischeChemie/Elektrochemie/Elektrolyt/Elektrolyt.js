require('use-strict')
const path = require('path')

const { Elektrochemie } = require(path.resolve(
  'src/components/PhysikalischeChemie/Elektrochemie/Elektrochemie.js'
))

class Elektrolyt extends Elektrochemie {
  constructor (Kennzeichnung, Parameter, Visual) {
    super()
    this.Kennzeichnung = Kennzeichnung
    this.Parameter = Parameter
    this.Visual = Visual
  }
}

exports.Elektrolyt = Elektrolyt
