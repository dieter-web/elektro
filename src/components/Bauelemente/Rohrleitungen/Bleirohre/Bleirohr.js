require('use-strict')
const path = require('path')

const { Rohrleitungen } = require(path.resolve(
  'src/components/Bauelemente/Rohrleitungen/Rohrleitungen.js'
))

class Bleirohr extends Rohrleitungen {
  constructor (Parameter){
  super()
    this.Parameter = Parameter;
    
  }
}

exports.Bleirohr = Bleirohr
