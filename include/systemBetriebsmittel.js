require('use-strict')
const path = require('path')

const R2 = require(path.resolve('include/routenBetriebsmittel'))

module.exports = {
  Betriebsmittel: require(path.resolve(`${R2.r2}/Betriebsmittel.js`)).Object
}
