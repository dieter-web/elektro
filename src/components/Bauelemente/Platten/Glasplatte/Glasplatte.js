require('use-strict')
const path = require('path')

const { Bauelemente } = require(path.resolve(
  'src/components/Bauelemente/Bauelemente.js'
))

class BEGlasplatte extends Bauelemente {
  constructor (kennzeichnung, parameter, views) {
    super(kennzeichnung)
    this.Parameter = parameter
    this.Views = views
    this.Name = 'Glasplatte'
  }
}

exports.BEGlasplatte = BEGlasplatte
