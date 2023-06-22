require('use-strict')
const path = require('path')

const { Betriebsmittel } = require(path.resolve(
  'src/components/Betriebsmittel/Betriebsmittel.js'
))

// const { vW } = require(path.resolve('include/visual'))

class Draht extends Betriebsmittel {
  /**
   *
   * @param {object} Parameter
   * @param {object} Kennzeichnung
   */
  constructor (Kennzeichnung, Parameter, Visual) {
    super(Kennzeichnung)
    this.Parameter = Parameter
    this.Visual = Visual
    this.id = 'Draht'
  }
}
exports.Draht = Draht
