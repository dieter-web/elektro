require('use-strict')
const path = require('path')
const math = require('mathjs')

const { PassiverZweipol } = require(path.resolve(
  'src/components/Betriebsmittel/Baugruppen/Zweipole/PassiverZweipol/PassiverZweipol.js'
))

const { Stack } = require(path.resolve(
  'src/components/Datenverarbeitung/dynamischeDatenstrukturen/listen/stapel/stack.js'
))

class Reihenschaltung extends PassiverZweipol {
  // mehr als 2 Widerstände
  constructor (Kennzeichnung, Parameter, Visual) {
    super(Kennzeichnung)
    this.Parameter = Parameter
    this.Visual = Visual
    this.Stack = new Stack()

    this.Type = 'group'
  }
}

// 2 Widerstände
class Spannungsteiler extends Reihenschaltung {
  constructor (Kennzeichnung, Parameter, Visual) {
    super(Kennzeichnung)
    this.Parameter = Parameter
    this.Visual = Visual

    this.Parameter.Type = 'group'
  }
}

exports.Reihenschaltung = Reihenschaltung
exports.Spannungsteiler = Spannungsteiler
