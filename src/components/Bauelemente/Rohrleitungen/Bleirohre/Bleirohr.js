require('use-strict')
const path = require('path')

const { Rohrleitungen } = require(path.resolve(
  'src/components/Bauelemente/Rohrleitungen/Rohrleitungen.js'
))

class Bleirohr extends Rohrleitungen {
  constructor (Kennzeichnung, Parameter, Views) {
    super(Kennzeichnung)
    this.Parameter = Parameter
    this.Views = Views
  }
}

exports.Bleirohr = Bleirohr
