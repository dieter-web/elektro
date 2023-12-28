import { vRohrleitungen } from "../Rohrleitungen.mjs";
class vBleirohr extends vRohrleitungen {
  constructor(data, point) {
    super(data, point);
    this.vis = {
      fill: "none",
      "fill-opacity": 1,
      style: "stroke:#ffffff;stroke-width:1.0",
      width: 120,
      height: 20,
      "pointer-events": "all"
    };
  }
  fshape() {
    this.Symbol.select("#shape").attr("fill", this.vis.fill).attr("fill-opacity", this.vis.fillopacity).attr("style", this.vis.style).append("rect").attr("x", this.point.x).attr("y", this.point.y).attr("height", this.vis.height).attr("width", this.vis.width);
  }
}
export { vBleirohr };