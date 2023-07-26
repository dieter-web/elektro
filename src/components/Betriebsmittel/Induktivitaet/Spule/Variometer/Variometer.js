require('use-strict')
const path = require('path')

const { Spule } = require(path.resolve(
  'src/components/Betriebsmittel/Induktivitaet/Spule/Spule.js'
))

class Variometer extends Spule {
  constructor (Visual) {
    super(Visual)
    this.Visual = Visual
  }
}
exports.Variometer = Variometer
