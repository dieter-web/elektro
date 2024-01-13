class vComponents {
  constructor(data, point) {
    this.data = data;
    this.point = point;
    this.bbox = undefined;
    this.node = undefined;
    this.Symbol = d3.create("svg:g").attr("id", `${data.Kennzeichnung.Art}${data.Kennzeichnung.Zählnummer}`);
  }
  finit() {
    // this.Symbol.append("g").attr("id", "huelle");
    this.Symbol.append("g").attr("id", "shape");
    this.Symbol.append("g").attr("id", "anschluss");
    this.Symbol.append("g").attr("id", "pins");
    this.Symbol.append("g").attr("id", "name");
    this.Symbol.append("g").attr("id", "value");
  }
  fvalue() {
    this.Symbol.select("#value").append("text").attr("x", this.point.x + 50).attr("y", this.point.y + this.vis.height + 20).text(`${this.data.Parameter.erg}`);
    this.Symbol.select("#name").append("text").attr("x", this.point.x).attr("y", this.point.y + this.vis.height + 20).text(`${this.data.Kennzeichnung.Art}${this.data.Kennzeichnung.Zählnummer} `);
  }
  createNode() {
    this.finit();
    this.fshape();
    this.fvalue();
    this.node = this.Symbol.node();
  }
}
export { vComponents };