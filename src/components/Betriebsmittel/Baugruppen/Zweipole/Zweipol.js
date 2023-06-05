require('use-strict')
const math = require('mathjs')
const path = require('path')

const { Baugruppe } = require(path.resolve(
  'src/components/Betriebsmittel/Baugruppen/Baugruppe.js'
))

class Zweipol extends Baugruppe {
  constructor (Kennzeichnung) {
    super(Kennzeichnung)
  }
}

exports.Zweipol = Zweipol
