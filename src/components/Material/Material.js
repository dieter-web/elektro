require('use-strict')
const path = require('path')
const dbJson = require(path.resolve('controllers/dbJson.js'))

class Material {
  constructor (Name, Parameter, Visual) {
    this.Name = Name
    this.Parameter = Parameter
    this.Visual = Visual
    this.data = dbJson.readJSONFile(path.resolve('src/json/Tafel11.json'))[
      this.Name
    ]
  }

  fρ (name) {
    return this.data.ρ[0]
  }

  fκ (name) {
    return this.data.κ[0]
  }

  fδ0 (name) {
    return this.data.δ0[0]
  }

  fα20 (name) {
    return this.data.α20[0]
  }

  fβ20 (name) {
    return this.data.β20[0]
  }
}

exports.Material = Material
