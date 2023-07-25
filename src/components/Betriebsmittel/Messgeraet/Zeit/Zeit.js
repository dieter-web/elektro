require('use-strict')
const math = require('mathjs')
const path = require('path')

const { Messgeraet } = require(path.resolve(
  'src/components/Betriebsmittel/Messgeraet/Messgeraet.js'
))

class Zeit extends Messgeraet {
  constructor (Kennzeichnung, Parameter, Visual) {
    super(Visual)
    this.Kennzeichnung = Kennzeichnung
    this.Parameter = Parameter
    this.Visual = Visual
  }
}
exports.Zeit = Zeit
