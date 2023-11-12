import { Betriebsmittel } from "/d3/lib/Betriebsmittel/Betriebsmittel.mjs";
class vRClass extends Betriebsmittel {
  constructor(data) {
    super(data);
    // this.nr = data.nr;
    // this.Symbol = d3.create("svg:g").attr("id", `${data.Kennzeichnung.Art}${data.Kennzeichnung.Zählnummer}`);
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

  fanschluss() {
    this.Symbol.select("#anschluss")
      .append("path")
      .attr("fill", this.data.vis.fill)
      .attr("fill-opacity", this.data.vis.fillopacity)
      .attr("style", this.data.vis.style)
      .attr("d", this.data.vis.path);
  }
}

export { vRClass };
