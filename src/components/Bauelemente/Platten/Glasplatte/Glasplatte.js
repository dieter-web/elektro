require('use-strict')
const path = require('path')

const { Platten } = require(path.resolve(
  'src/components/Bauelemente/Platten/Platten.js'
))

class Glasplatte extends Platten {
  constructor (Parameter) {
    super()
    this.Parameter = parameter
    this.Name = 'Glasplatte'
  }
}

exports.Glasplatte = Glasplatte
