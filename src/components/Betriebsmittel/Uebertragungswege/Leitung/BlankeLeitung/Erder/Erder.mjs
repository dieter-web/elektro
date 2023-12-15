import { vBlankeleitung } from "./../Blankeleitung.mjs";

class vErder extends vBlankeleitung {
  constructor(data) {
    super(data);

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
      .attr("x", this.data.Position.x)
      .attr("y", this.data.Position.y)
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
        `M ${this.data.Position.x} ${this.data.Position.y} 
        m 0 ${this.vis.height / 2} 
        l -${this.vis.al} 0 
        m ${this.vis.al + this.vis.width} 0 
        l ${this.vis.al} 0`
      );
  }
}

export { vErder };
