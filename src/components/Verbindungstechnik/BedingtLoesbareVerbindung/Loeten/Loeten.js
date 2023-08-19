require('use-strict')
const path = require('path')

const { BedingtLoesbareVerbindung } = require(path.resolve(
  'src/components/Verbindungstechnik/BedingtLoesbareVerbindung/BedingtLoesbareVerbindung.js'
))

class Loeten extends BedingtLoesbareVerbindung {
  constructor (Kennzeichnung, Parameter, Visual) {
    super(Kennzeichnung, Parameter, Visual)
    this.Kennzeichnung = Kennzeichnung
    this.Parameter = Parameter
    this.Visual = Visual
  }
}
exports.Loeten = Loeten