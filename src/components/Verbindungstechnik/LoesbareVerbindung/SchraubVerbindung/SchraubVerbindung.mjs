import { vLoesbareVerbindung } from "./../LoesbareVerbindung.mjs";

class vSchraubverbindung extends vLoesbareVerbindung {
  constructor(data) {
    super(data);

    this.vis = {
      fill: "none",
      fillopacity: "1.0",
      style: "stroke:#ffffff; stroke-width:1.0",
      width: 5,
      height: 5,
      al: 10,
      "pointer-events": "all",
    };
  }

  fshape() {
    this.Symbol.select("#shape")
      .attr("fill", this.vis.fill)
      .attr("fill-opacity", this.vis.fillopacity)
      .attr("style", this.vis.style)
      .append("circle")
      .attr("cx", this.data.Position.x)
      .attr("cy", this.data.Position.y)
      .attr("r", this.vis.width);
  }

  fanschluss() {
    this.Symbol.select("#anschluss")
      .append("path")
      .attr("fill", this.vis.fill)
      .attr("fill-opacity", this.vis.fillopacity)
      .attr("style", this.vis.style)
      .attr(
        "d",
        `M ${this.data.Position.x} ${this.data.Position.y} m 0 ${
          this.vis.height / 2
        } l -${this.vis.al} 0 m ${this.vis.al + this.vis.width} 0 l ${
          this.vis.al
        } 0`
      );
  }
}

export { vSchraubverbindung };
