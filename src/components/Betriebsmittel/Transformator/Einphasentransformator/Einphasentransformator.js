require('use-strict')
const path = require('path')

const { Transformator } = require(path.resolve(
  'src/components/Betriebsmittel/Transformator/Transformator.js'
))

class Einphasentransformator extends Transformator {
  constructor (Kennzeichnung, Parameter, Visual) {
    super(Visual)
    this.Kennzeichnung = Kennzeichnung
    this.Parameter = Parameter
    this.Visual = Visual
  }
}

exports.Einphasentransformator = Einphasentransformator
