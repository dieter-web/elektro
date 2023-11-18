import { vFernmeldeleitung } from "./../Fernmeldeleitung.mjs";

class vLitzeleitung extends vFernmeldeleitung {
  constructor(data) {
    super(data);
    this.vis = {
      fill: "none",
      fillopacity: "0.2",
      style: "stroke:#ffff; stroke-width: 1.0",
      width: 200,
      height: 10,

      // Anschlüsse

      // Pins

      // Events
      "pointer-events": "all",
    };
  }

  fshape() {
    this.Symbol.select("#shape")
      .attr("fill-opacity", this.vis.fillopacity)
      .attr("style", this.vis.style)
      .append("rect")
      .attr("x", this.data.Parameter.x)
      .attr("y", this.data.Parameter.y)
      .attr("height", this.vis.height)
      .attr("width", this.vis.width);

    this.Symbol.select("#shape")
      .attr("fill-opacity", this.vis.fillopacity)
      .attr("style", this.vis.style)
      .append("circle")
      .attr("cx", this.data.Parameter.x + 300)
      .attr("cy", this.data.Parameter.y)
      .attr("r", 3);
  }

  fanschluss() {}
}

export { vLitzeleitung };
