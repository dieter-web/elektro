require('use-strict')
const path = require('path')
const { SpuleOhneKern } = require(path.resolve(
  'src/components/Betriebsmittel/Induktivitaet/Spule/SpuleOhneKern/SpuleOhneKern.js'
))

class AbgeschirmteSpule extends SpuleOhneKern {
  constructor (Kennzeichnung, Parameter, Visual) {
    super(Visual)
    this.Kennzeichnung = Kennzeichnung
    this.Parameter = Parameter
    this.Visual = Visual
  }
}
exports.AbgeschirmteSpule = AbgeschirmteSpule
