import { Betriebsmittel } from "/d3/lib/Betriebsmittel/Betriebsmittel.mjs";

class vCLampe extends Betriebsmittel {
  constructor(data) {
    super(data);
    this.nr = data.nr;
    // this.x = data.Parameter.x;
    // this.y = data.Parameter.y;
    this.rx = data.vis.rx;
    this.ry = data.vis.ry;
    this.a = 15;
    this.Symbol = d3.create("svg:g").attr("id", this.nr);
  }
  fshape() {
    this.Symbol.select("#shape")
      .attr("fill", this.data.vis.fill)
      .attr("fill-opacity", this.data.vis.fillopacity)
      .attr("style", this.data.vis.style)
      .append("ellipse")
      .attr("cx", `${this.data.Parameter.x}`)
      .attr("cy", `${this.data.Parameter.y}`)
      .attr("rx", this.data.vis.rx)
      .attr("ry", this.data.vis.ry);

    this.Symbol.select("#shape")
      // .attr("style", this.data.vis.style)
      .append("path")
      .attr(
        "d",
        `
      M ${this.x - this.rx * 0.707} ${this.y - this.ry * 0.707} 
      l ${this.rx * 1.4} ${this.ry * 1.4}
        
      M ${this.x + this.rx * 0.707} ${this.y - this.ry * 0.707} 
      l -${this.rx * 1.4} ${this.ry * 1.4}
        
      `
      );
  }

  fanschluss() {
    this.Symbol.select("#anschluss")
      .attr("style", this.data.vis.style)
      .append("path")
      .attr("fill", this.data.vis.fill)
      .attr("fill-opacity", this.data.vis.fillopacity)
      .attr("style", this.data.vis.style)
      .attr(
        "d",
        ` M ${this.x - this.rx} ${this.y}
        l ${-this.a} 0
        M ${this.x + this.rx} ${this.y}
        l ${this.a} 0
        `
      );
  }
}
export { vCLampe };
