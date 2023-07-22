require('use-strict')
const math = require('mathjs')
const path = require('path')

const { Baugruppen } = require(path.resolve(
  'src/components/Betriebsmittel/Baugruppen/Baugruppen.js'
))

class Zweipole extends Baugruppen {
  constructor (Kennzeichnung) {
    super(Kennzeichnung)
  }
}

exports.Zweipole = Zweipole
