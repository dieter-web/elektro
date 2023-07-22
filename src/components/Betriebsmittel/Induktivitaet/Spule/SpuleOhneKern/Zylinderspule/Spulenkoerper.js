require('use-strict')
const path = require('path')
const { Betriebsmittel } = require(path.resolve(
  'src/components/Betriebsmittel/Betriebsmittel.js'
))

// const { Betriebsmittel } = require(path.resolve('include/system'))

class Spulenkoerper extends Betriebsmittel {
  constructor (Kennzeichnung, Parameter, Visual) {
    super(Kennzeichnung)
    this.Parameter = Parameter
    this.Visual = Visual
    this.Name = 'Spulenkoerper'
  }
}

exports.Spulenkoerper = Spulenkoerper
