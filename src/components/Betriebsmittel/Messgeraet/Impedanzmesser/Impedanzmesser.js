require('use-strict')
const math = require('mathjs')
const path = require('path')

const { Messgeraet } = require(path.resolve(
  'src/components/Betriebsmittel/Messgeraet/Messgeraet.js'
))

class Impedanzmesser extends Messgeraet {
  constructor (Kennzeichnung, Parameter, Visual) {
    super(Visual)
    this.Kennzeichnung = Kennzeichnung
    this.Parameter = Parameter
    this.Visual = Visual
  }
}
exports.Impedanzmesser = Impedanzmesser
