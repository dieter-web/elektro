const path = require('path')
const Example = 'src/json/example'

module.exports = {
  a11json: require(path.resolve(`${Example}/aufgabe11.json`)),
  a16json: require(path.resolve(`${Example}/aufgabe16.json`)),

  b11json: require(path.resolve(`${Example}/beispiel11.json`)),
  b12json: require(path.resolve(`${Example}/beispiel12.json`)),
  b111json: require(path.resolve(`${Example}/beispiel111.json`)),

  u14json: require(path.resolve(`${Example}/uebung14.json`)),
  u19json: require(path.resolve(`${Example}/uebung19.json`))
}
