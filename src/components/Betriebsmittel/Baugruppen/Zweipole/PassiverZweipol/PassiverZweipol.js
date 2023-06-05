require('use-strict')
const math = require('mathjs')
const path = require('path')

const { Zweipol } = require(path.resolve(
  'src/components/Betriebsmittel/Baugruppen/Zweipole/Zweipol.js'
))

class PassiverZweipol extends Zweipol {
  constructor (Kennzeichnung) {
    super(Kennzeichnung)
  }
}
exports.PassiverZweipol = PassiverZweipol
