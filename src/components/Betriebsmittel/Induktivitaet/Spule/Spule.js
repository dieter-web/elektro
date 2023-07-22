require('use-strict')
const path = require('path')
const { Induktivitaet } = require(path.resolve(
  'src/components/Betriebsmittel/Induktivitaet/Induktivitaet.js'
))

class Spule extends Induktivitaet {
  constructor (Visual) {
    super(Visual)
    this.Visual = Visual
  }
}
exports.Spule = Spule
