import { vBlankeleitung } from "./../Blankeleitung.mjs";

class vErder extends vBlankeleitung {
  constructor(data, point) {
    super(data, point);

    this.vis = {
      fill: "none",
      fillopacity: "1.0",
      style: "stroke:#ffffff; stroke-width:1.0",
      width: 200,
      height: 10,
      al: 10,
      "pointer-events": "all",
    };
  }

  fshape() {
    this.Symbol.select("#shape")
      .attr("fill", this.vis.fill)
      .attr("fill-opacity", this.vis.fillopacity)
      .attr("style", this.vis.style)
      .append("rect")
      .attr("x", this.point.x)
      .attr("y", this.point.y)
      .attr("height", this.vis.height)
      .attr("width", this.vis.width);

    this.Symbol.select("#anschluss")
      .append("path")
      .attr("fill", this.vis.fill)
      .attr("fill-opacity", this.vis.fillopacity)
      .attr("style", this.vis.style)
      .attr(
        "d",
        `M ${this.point.x} ${this.point.y} 
        m 0 ${this.vis.height / 2} 
        l -${this.vis.al} 0 
        m ${this.vis.al + this.vis.width} 0 
        l ${this.vis.al} 0`
      );
  }
}

export { vErder };
