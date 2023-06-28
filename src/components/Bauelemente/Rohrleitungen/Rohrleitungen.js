require('use-strict')
const path = require('path')

// const {Bauelemente} = require(path.resolve('include/system'))
const { Bauelemente } = require(path.resolve(
  'src/components/Bauelemente/Bauelemente.js'
))

class Rohrleitungen extends Bauelemente {
  constructor (Kennzeichnung) {
    super(Kennzeichnung)
  }
}

exports.Rohrleitungen = Rohrleitungen
