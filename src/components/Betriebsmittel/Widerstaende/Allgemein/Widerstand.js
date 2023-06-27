require('use-strict')
const path = require('path')

const { Widerstaende } = require(path.resolve(
  'src/components/Betriebsmittel/Widerstaende/Widerstaende.js'
))

class Widerstand extends Widerstaende {
  constructor (Kennzeichnung, Parameter, Visual) {
    super(Kennzeichnung)
    this.Parameter = Parameter // Parameter der Aufgabenstellung (dynamisch)
    this.Vis = {
      Visual: Visual,
      width: 60,
      height: 20
    }
  }
}

exports.Widerstand = Widerstand
