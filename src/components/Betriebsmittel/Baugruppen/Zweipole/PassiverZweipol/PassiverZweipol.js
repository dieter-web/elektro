require('use-strict')
const math = require('mathjs')
const path = require('path')

const { Zweipole } = require(path.resolve(
  'src/components/Betriebsmittel/Baugruppen/Zweipole/Zweipole.js'
))

class PassiverZweipol extends Zweipole {
  constructor (Kennzeichnung) {
    super(Kennzeichnung)
  }
}
exports.PassiverZweipol = PassiverZweipol
