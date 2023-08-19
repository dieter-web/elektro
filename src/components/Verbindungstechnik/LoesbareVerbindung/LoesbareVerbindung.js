require('use-strict')
const path = require('path')

const { Verbindungstechnik } = require(path.resolve(
  'src/components/Verbindungstechnik/Verbindungstechnik.js'
))

class LoesbareVerbindung extends Verbindungstechnik {
  constructor (Kennzeichnung, Parameter, Visual) {
    super(Kennzeichnung, Parameter, Visual)
    this.Kennzeichnung = Kennzeichnung
    this.Parameter = Parameter
    this.Visual = Visual
  }
}

exports.LoesbareVerbindung = LoesbareVerbindung
