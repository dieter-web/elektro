class vComponents extends Object {
  constructor(data, point) {
    super()
    this.data = data
    this.point = point
    this.x = 0 // Offsetvariablen für text
    this.y = 30 // TODO: bbox Grafik + Abstand
    this.yoffset = 15 // Verticaler Textabstand

    // <g id="R1" ...>
    // Beinhaltet alle weiteren g
    // --> nur Offsetkoordinaten !!
    this.Symbol = d3
      .create("svg:g")
      .attr("id", `${data.Kennzeichnung.Art}${data.Kennzeichnung.Zählnummer}`)
      .attr("stroke", "rgb(42,42,42")
      .attr("stroke-width", 1.0)
      .attr("stroke-miterlimit", 10)
      .attr("fill", "none")
      .attr("fill-opacity", 1)
      .attr("transform", `translate(${this.point.x},${this.point.y})`)
      .attr("pointer-events", "all");
  }

  finit() {
    this.Symbol.append("g").attr("id", "shape")
    this.Symbol.append("g").attr("id", "anschluss")
    this.Symbol.append("g").attr("id", "pins")
    this.Symbol.append("g").attr("id", "name")
    this.Symbol.append("g").attr("id", "value")
    this.Symbol.append("g").attr("id", "kennzeichnung")
  }

  /**
   * @description Umwandlung eines Objektes in lesbare d3 Daten
   * @author Dieter Krause
   * @date 06/03/2024
   * @param {*} odata
   * @returns {*}
   * @memberof vComponents
   */
  o2d(odata) {
    let adata = []
    JSON.parse(JSON.stringify(odata), (key, value) => {
      adata.push(`${key}=${value}`)
    })
    adata.length = adata.length - 1 // Korrektur
    return adata
  }

  fvalue() {
    this.Symbol.select("#value")
      .selectAll("text")
      .data(this.o2d(this.data.Eigenschaften))
      .enter()
      .append("text")
      .attr("x", 0)
      .attr("dy", (y) => {
        return (this.y += this.yoffset)
      })
      .text((d) => {
        return d
      })
  }

  fname() {
    this.Symbol.select("#name")
      .append("text")
      .attr("x", 0)
      .attr("dy", (y) => {
        return (this.y += this.yoffset)
      })
      .text(`${this.data.Kennzeichnung.Art}${this.data.Kennzeichnung.Zählnummer} `)
  }

  fkennzeichnung() {
    this.Symbol.select("#kennzeichnung")
      .append("text")
      .attr("x", 0)
      .attr("dy", (y) => {
        return (this.y += this.yoffset)
      })
      .text(`Hier steht die Kennzeichnung`)
  }

  createNode() {
    this.finit()
    this.fshape()
    this.fname()
    this.fvalue()
    this.fkennzeichnung()
    this.node = this.Symbol.node()
  }
}

export { vComponents }
