import { vWiderstaende } from "../Widerstaende.mjs";

class vWiderstand extends vWiderstaende {
  constructor(data) {
    super(data);

    this.vis = {
      fill: "none",
      style: "stroke:#ffffff;stroke-width:1.0",
      width: 64,
      height: 20,
      al: 20,
      "pointer-events": "all",
    };
  }

  fshape() {
    this.Symbol.select("#shape")
      .attr("fill", this.vis.fill)
      .attr("fill-opacity", this.data.fillopacity)
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

export { vWiderstand };
