import { vTransformatoren } from "../Transformatoren.mjs";

class vTransformator extends vTransformatoren {
  constructor(data, point) {
    super(data, point);

    this.vis = {
      fill: "black",
      "fill-opacity": 1,
      style: "stroke:#000000;stroke-width:1.0",
      width: 20,
      height: 64,
      al: 20, // Anschlusslänge
    };
  }

  fshape() {
    // Primärwicklung
    let w1 = this.Symbol.select("#shape")
      .attr("fill", this.vis.fill)
      .attr("fill-opacity", this.vis.fillopacity)
      .attr("style", this.vis.style)
      .append("rect")
      .attr("x", this.point.x)
      .attr("y", this.point.y)
      .attr("height", this.vis.height)
      .attr("width", this.vis.width);

    // Eisenkern
    let e1 = this.Symbol.select("#shape")
      .attr("fill", this.vis.fill)
      .attr("fill-opacity", this.vis.fillopacity)
      .attr("style", this.vis.style)
      .append("rect")
      .attr("x", this.point.x + 25)
      .attr("y", this.point.y)
      .attr("height", this.vis.height)
      .attr("width", 2);

    // Sekundärwicklung
    let w2 = this.Symbol.select("#shape")
      .attr("fill", this.vis.fill)
      .attr("fill-opacity", this.vis.fillopacity)
      .attr("style", this.vis.style)
      .append("rect")
      .attr("x", this.point.x + 32)
      .attr("y", this.point.y)
      .attr("height", this.vis.height)
      .attr("width", this.vis.width);

    // Anschlüsse zeichen
    
  }
}

export { vTransformator };
