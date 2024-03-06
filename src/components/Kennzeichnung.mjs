import { vComponents } from "./components.mjs";

class vKennzeichnung extends vComponents {
  constructor(data, point) {
    super(data, point);
  }

  fshape() {
    let y = this.point.y;
    this.Symbol.select("#kennzeichnung")
      .selectAll("text")
      .data(this.o2d(data.Kennzeichnung))
      .enter()
      .append("text")
      .attr("x", this.point.x)
      .attr("y", () => {
        return (y += 20);
      })
      .text((d) => {
        return d;
      });
  }
}

export { vKennzeichnung };
