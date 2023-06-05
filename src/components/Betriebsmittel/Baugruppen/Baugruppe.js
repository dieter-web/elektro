require('use-strict')
const math = require('mathjs')
const path = require('path')

const { Betriebsmittel } = require(path.resolve(
  'src/components/Betriebsmittel/Betriebsmittel.js'
))

class Baugruppe extends Betriebsmittel {
  constructor (Kennzeichnung) {
    super(Kennzeichnung)
  }
}
exports.Baugruppe = Baugruppe
