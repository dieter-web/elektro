require('use-strict')
const path = require('path')

const { LoesbareVerbindung } = require(path.resolve(
  'src/components/Verbindungstechnik/LoesbareVerbindung/LoesbareVerbindung.js'
))

class Klemme extends LoesbareVerbindung {
  constructor (Kennzeichnung, extParameter, Visual) {
    super(Kennzeichnung, extParameter, Visual)
    this.Kennzeichnung = Kennzeichnung
    this.extParameter = extParameter
    this.Visual = Visual

    this.Verbindung = {
      ppin: 1,
      npin: 1
    }
  }
}
exports.Klemme = Klemme
