import { vInduktivitaet } from "../Induktivitaet.mjs";

class vSpule extends vInduktivitaet {
  constructor(data) {
    super(data);
    this.vis = {
      fill: "black",
      fillopacity: "1.0",
      style: "stroke:#ffffff; stroke-width: 1.0",
      height: 25,
      width: 75,
      al: 20,
    };
  }
  fshape() {
    this.Symbol.select("#shape")
      .attr("fill", this.vis.fill)
      .attr("fill-opacity", this.vis.fillopacity)
      .attr("style", this.vis.style)
      .append("rect")
      .attr("x", this.data.Parameter.x)
      .attr("y", this.data.Parameter.y)
      .attr("height", this.vis.height)
      .attr("width", this.vis.width);
  }

  fanschluss() {
    this.Symbol.select("#anschluss")
      .append("path")
      .attr("fill", this.vis.fill)
      .attr("fill-opacity", this.vis.fillopacity)
      .attr("style", this.vis.style)
      .attr(
        "d",
        `M ${this.data.Parameter.x} ${this.data.Parameter.y} m 0 ${
          this.vis.height / 2
        } l -${this.vis.al} 0 m ${this.vis.al + this.vis.width} 0 l ${
          this.vis.al
        } 0`
      );
  }
}

export { vSpule };
