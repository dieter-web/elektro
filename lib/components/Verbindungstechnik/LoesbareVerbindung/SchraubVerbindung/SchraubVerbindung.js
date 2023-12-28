import { vLoesbareVerbindung } from "./../LoesbareVerbindung.mjs";
class vSchraubverbindung extends vLoesbareVerbindung {
  // data Schraubverbindung, data1 zu Verbindung1, data2 zu Verbindung2
  constructor(data, data1, data2) {
    super(data);
    this.vis = {
      fill: "none",
      fillopacity: "1.0",
      style: "stroke:#ffffff; stroke-width:1.0",
      r: 2.5,
      al: 2,
      "pointer-events": "all"
    };
    this.data1 = data1;
    this.data2 = data2;
    this.pins = {
      // Ausgang ist horizontale Lage
      // Durch drehen in eine Andere Lage bringen möglich ?
      1: {
        x: data.pos.x - 2,
        y: data.pos.y
      },
      2: {
        x: data.pos.x + 2,
        y: data.pos.y
      }
    };
  }
  fshape() {
    this.Symbol.select("#shape").attr("fill", this.vis.fill).attr("fill-opacity", this.vis.fillopacity).attr("style", this.vis.style).append("circle").attr("cx", this.point.x).attr("cy", this.point.y).attr("r", this.vis.r);
  }

  // Verbindung 1 zu dem shapeverbinder
  v1(data1) {
    this.Symbol.select("#anschluss").append("path");
  }

  // Verbindung2 zu dem shapeverbinder
  v2(data2) {
    this.Symbol.select("#anschluss").append("path");
  }
  fanschluss() {
    this.Symbol.select("#anschluss").append("path").attr("fill", this.vis.fill).attr("fill-opacity", this.vis.fillopacity).attr("style", this.vis.style).attr("d", `M ${this.point.x - 2} ${this.point.y}
        l -${this.vis.al} 0 
        M ${this.point.x + 2} ${this.point.y} 
        l ${this.vis.al} 0`);
  }
}
export { vSchraubverbindung };