import { vFernmeldeleitung } from "./../Fernmeldeleitung.mjs";

class vLitzeleitung extends vFernmeldeleitung {
  constructor(data) {
    super(data);
  }

  fshape() {
    this.Symbol.select("#shape")
      .attr("fill-opacity", this.data.vis.fillopacity)
      .attr("style", this.data.vis.style)
      .append("rect")
      .attr("x", this.data.Parameter.x)
      .attr("y", this.data.Parameter.y)
      .attr("height", this.data.vis.height)
      .attr("width", this.data.vis.width);

    this.Symbol.select("#shape")
      .attr("fill-opacity", this.data.vis.fillopacity)
      .attr("style", this.data.vis.style)
      .append("circle")
      .attr("cx", this.data.Parameter.x + 300)
      .attr("cy", this.data.Parameter.y)
      .attr("r", 3);
  }

  fanschluss() {}
}

export { vLitzeleitung };
