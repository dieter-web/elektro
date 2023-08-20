require('use-strict')
const path = require('path')

const { LoesbareVerbindung } = require(path.resolve(
  'src/components/Verbindungstechnik/LoesbareVerbindung/LoesbareVerbindung.js'
))

class Klemme extends LoesbareVerbindung {
  constructor (Kennzeichnung, Parameter, Visual) {
    super(Kennzeichnung, Parameter, Visual)
    this.Kennzeichnung = Kennzeichnung
    this.Parameter = Parameter
    this.Visual = Visual

    this.Verbindung = {
      ppin: 1,
      npin: 1
    }
  }
}
exports.Klemme = Klemme
