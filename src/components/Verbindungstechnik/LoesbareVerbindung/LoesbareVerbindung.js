require('use-strict')
const path = require('path')

const { Verbindungstechnik } = require(path.resolve(
  'src/components/Verbindungstechnik/Verbindungstechnik.js'
))

class LoesbareVerbindung extends Verbindungstechnik {
  constructor () {
    super()
    this.Kennzeichnung = {}
    this.Vis = {}
  }
}

exports.LoesbareVerbindung = LoesbareVerbindung
