require('use-strict')
const path = require('path')
const math = require('mathjs')

const { PassiverZweipol } = require(path.resolve(
  'src/components/Betriebsmittel/Baugruppen/Zweipole/PassiverZweipol/PassiverZweipol.js'
))

class Reihenschaltung extends PassiverZweipol {
  // mehr als 2 Widerstände
  constructor (Kennzeichnung, Parameter, Visual) {
    super(Kennzeichnung)
    this.Parameter = Parameter
    this.id = 'Reihenschaltung'
    this.Visual = Visual
    this.id = 'Reihenschaltung'
  }
}

// 2 Widerstände
class Spannungsteiler extends Reihenschaltung {
  constructor (Kennzeichnung, Parameter, Visual) {
    super(Kennzeichnung)
    this.Parameter = Parameter
    this.Visual = Visual
  }
}

exports.Reihenschaltung = Reihenschaltung
exports.Spannungsteiler = Spannungsteiler
