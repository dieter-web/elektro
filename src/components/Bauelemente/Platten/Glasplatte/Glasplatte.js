require('use-strict')
const path = require('path')

const { Platten } = require(path.resolve(
  'src/components/Bauelemente/Platten/Platten.js'
))

class Glasplatte extends Platten {
  constructor (kennzeichnung, parameter, views) {
    super(kennzeichnung)
    this.Parameter = parameter
    this.Views = views
    this.Name = 'Glasplatte'
  }
}

exports.Glasplatte = Glasplatte
