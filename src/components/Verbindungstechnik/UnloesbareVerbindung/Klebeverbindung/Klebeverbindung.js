require('use-strict')
const path = require('path')

const { UnloesbareVerbindung } = require(path.resolve(
  'src/components/Verbindungstechnik/UnloesbareVerbindung/UnloesbareVerbindung.js'
))

class Klebeverbindung extends UnloesbareVerbindung {
  constructor (Kennzeichnung, Parameter, Visual) {
    super(Kennzeichnung, Parameter, Visual)
    this.Kennzeichnung = Kennzeichnung
    this.Parameter = Parameter
    this.Visual = Visual
  }
}

exports.Klebeverbindung = Klebeverbindung