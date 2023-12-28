class vWerkstoff {
  constructor(data) {
    this.data = data;
    this.x = data.Parameter.Position.x;
    this.y = data.Parameter.Position.y;
    this.hx = 10;
    this.hy = 10;
    this.Symbol = d3.create("svg:g").attr("id", `${data.Kennzeichnung.Art}${data.Kennzeichnung.Zählnummer}`);
  }
  finit() {
    this.Symbol.append("g").attr("id", "huelle");
    this.Symbol.append("g").attr("id", "shape");
    this.Symbol.append("g").attr("id", "anschluss");
    this.Symbol.append("g").attr("id", "pins");
    this.Symbol.append("g").attr("id", "name");
    this.Symbol.append("g").attr("id", "value");
  }
  fhuelle() {
    this.Symbol.select("#huelle").append("rect").attr("fill", "none").attr("style", "stroke:#ffffff; stroke-width: 1.0").attr("x", this.x - this.hx).attr("y", this.y - this.hy).attr("height", this.hh).attr("width", this.hw).attr("hidden", "true"); // soll es sichtbar sein --> Zeile ausdokumentieren
  }

  fname() {
    this.Symbol.select("#name").append("text").attr("x", this.x).attr("y", this.y + 50).text(`${this.data.Kennzeichnung.Art} ${this.data.Kennzeichnung.Zählnummer}`);
  }
  fvalue() {
    this.Symbol.select("#value").append("text").attr("x", this.x + 100).attr("y", this.y + 50).text(`${this.data.Parameter.erg}`);
  }
  createNode() {
    this.finit();
    // this.fhuelle();
    this.fshape();
    this.fanschluss();
    this.fname();
    this.fvalue();
    return this.Symbol.node();
  }
}
class vLeiterwerkstoff extends vWerkstoff {
  constructor(data) {
    super(data);
    this.vis = {
      fill: "none",
      style: "stroke:#ffffff; stroke-width:1.0",
      width: 64,
      height: 64,
      al: 20,
      "pointer-events": "all"
    };
  }
  fshape() {
    this.Symbol.select("#shape").attr("fill", this.vis.fill).attr("fill-opacity", this.data.fillopacity).attr("style", this.vis.style).append("rect").attr("x", this.x).attr("y", this.y).attr("height", this.vis.height).attr("width", this.vis.width);
  }
  fanschluss() {
    this.Symbol.select("#anschluss").append("path").attr("fill", this.vis.fill).attr("fill-opacity", this.vis.fillopacity).attr("style", this.vis.style).attr("d", `M ${this.x} ${this.y} m 0 ${this.vis.height / 2} l -${this.vis.al} 0 m ${this.vis.al + this.vis.width} 0 l ${this.vis.al} 0`);
  }
}
export { vWerkstoff, vLeiterwerkstoff };