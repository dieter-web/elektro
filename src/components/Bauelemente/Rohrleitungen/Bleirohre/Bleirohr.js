require('use-strict')
const path = require('path')

const { Rohrleitungen } = require(path.resolve(
  'src/components/Bauelemente/Rohrleitungen/Rohrleitungen.js'
))

class Bleirohr extends Rohrleitungen {
  constructor (Parameter){
  super()
    this.Parameter = Parameter
    this.visBleirohr = {
      fill: "#aaaaaa",
      fillopacity: 0.5,
      style: "stroke:#ffffff; stroke-width: 1.0",
      width: this.Parameter.l,
      height: this.Parameter.D,
      name: this.Parameter.Name,

      // Events
      "pointer-events": "all"
    }
  }
}

exports.Bleirohr = Bleirohr
