import { Betriebsmittel } from "/d3/lib/Betriebsmittel/Betriebsmittel.mjs";

class Material extends Betriebsmittel {
  constructor(data) {
    super();
    this.data = data;
  }

  fshape() {
    this.Symbol.select("#shape")
      .attr("fill", this.data.vis.fill)
      .attr("fill-opacity", this.data.vis.fillopacity)
      .attr("style", this.data.vis.style)
      .append("rect")
      .attr("x", this.data.Parameter.x)
      .attr("y", this.data.Parameter.y)
      .attr("height", this.data.vis.height)
      .attr("width", this.data.vis.width);
  }
}

export { Material };
