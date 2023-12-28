import { Betriebsmittel } from "/d3/lib/Betriebsmittel/Betriebsmittel.mjs";
class vMaterial extends Betriebsmittel {
  constructor(data) {
    super(data);
    this.nr = data.nr;
    this.Symbol = d3.create("svg:g").attr("id", this.nr);
  }
  fshape() {
    this.Symbol.select("#shape").attr("fill", this.data.vis.fill).attr("fill-opacity", this.data.vis.fillopacity).attr("style", this.data.vis.style).append("rect").attr("x", this.data.Parameter.x).attr("y", this.data.Parameter.y).attr("height", this.data.vis.height).attr("width", this.data.vis.width);
  }
}
export { vMaterial };