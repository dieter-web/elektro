import { vElektrischeAnlagen } from "../ElektrischeAnlagen.mjs";

/** SECTION vVerteilungssysteme */
class vVerteilungssysteme extends vElektrischeAnlagen {
  constructor(data, point) {
    super(data, point);
  }
}

/** SECTION vGleichstromnetz */
class vGleichstromnetz extends vVerteilungssysteme {
  constructor(data, point) {
    super(data, point);
    this.shape = `M 0 75 L 10 75 M 5 0 L 5 10 M 0 5 L 10 5`;
  }
  // hidden Box
  fshape() {
    this.Symbol.select("#shape")
      .append("rect")
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", 70)
      .attr("height", 75)
      .attr("fill", "none")
      .attr("stroke", "none")
      .attr("pointer-events", "all")
      .attr("transform", () => {
        return `translate(${this.point.x},${this.point.y})`;
      });

    // Kreis
    this.Symbol.select("#shape")
      .append("ellipse")
      .attr("cx", 40)
      .attr("cy", 40)
      .attr("rx", 30)
      .attr("ry", 30)
      .attr("fill", "none")
      .attr("stroke", "rgb(240,240,240")
      .attr("pointer-events", "all")
      .attr("transform", () => {
        return `translate(${this.point.x},${this.point.y})`;
      });

    // + -
    this.Symbol.select("#shape")
      .append("path")
      .attr("d", this.shape)
      .attr("fill", "none")
      .attr("stroke", "rgb(240,240,240")
      .attr("stroke-miterlimit", 10)
      .attr("pointer-events", "all")
      .attr("transform", () => {
        return `translate(${this.point.x},${this.point.y})`;
      });
  }
}
/** !SECTION vGleichstromnetz */
/** SECTION vWechselstromnetz */
class vWechselstromnetz extends vVerteilungssysteme {
  constructor(data, point) {
    super(data, point);
  }
}
/** !SECTION vWechselstromnetz */
/** SECTION vDrehstromnetz */
class vDrehstromnetz extends vVerteilungssysteme {
  constructor(data, point) {
    super(data, point);
  }
}
/** !SECTION vDrehstromnetz */
/** !SECTION vVerteilungssysteme */
export { vVerteilungssysteme, vGleichstromnetz, vWechselstromnetz, vDrehstromnetz };
