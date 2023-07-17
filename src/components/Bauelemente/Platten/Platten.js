require('use-strict')
const path = require('path')

const { Bauelemente } = require(path.resolve(
  'src/components/Bauelemente/Bauelemente.js'
))

class Platten extends Bauelemente {
  constructor (Kennzeichnung, Parameter) {
    super(Kennzeichnung, Parameter)
    // this.Kennzeichnung = Kennzeichnung
  }
}

exports.Platten = Platten
