require('use-strict')
const path = require('path')

const { LoesbareVerbindung } = require(path.resolve(
  'src/components/Verbindungstechnik/LoesbareVerbindung/LoesbareVerbindung.js'
))

class Stecker extends LoesbareVerbindung {
  constructor (Kennzeichnung, Parameter, Visual) {
    super(Kennzeichnung, Parameter, Visual)
    this.Kennzeichnung = Kennzeichnung
    this.Parameter = Parameter
    this.Visual = Visual
  }
}
exports.Stecker = Stecker
