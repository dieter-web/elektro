import { vComponents } from "../components.mjs";

class vWerkstoff extends vComponents {
  constructor(data, pos) {
    super(data, pos);
  }
}

class vLeiterwerkstoff extends vWerkstoff {
  constructor(data, pos) {
    super(data, pos);
    this.vis = {
      fill: "yellow",
      style: "stroke:#ffffff; stroke-width:1.0",
      width: 64,
      height: 64,
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
      .attr("x", this.pos.x)
      .attr("y", this.pos.y)
      .attr("height", this.vis.height)
      .attr("width", this.vis.width);

    this.Symbol.select("#anschluss")
      .append("path")
      .attr("fill", this.vis.fill)
      .attr("fill-opacity", this.vis.fillopacity)
      .attr("style", this.vis.style)
      .attr(
        "d",
        `M ${this.pos.x} ${this.pos.y} m 0 ${this.vis.height / 2} l -${
          this.vis.al
        } 0 m ${this.vis.al + this.vis.width} 0 l ${this.vis.al} 0`
      );
  }
}

class vEisenwerkstoff extends vWerkstoff {
  constructor(data, pos) {
    super(data, pos);
    this.vis = {};
  }
  fshape() {}
}
class vBaustahl extends vWerkstoff {
  constructor(data, pos) {
    super(data, pos);
    this.vis = {};
  }
  fshape() {}
}
class vAutomatenstahl extends vWerkstoff {
  constructor(data, pos) {
    super(data, pos);
    this.vis = {};
  }
  fshape() {}
}
class vEinsatzstahl extends vWerkstoff {
  constructor(data, pos) {
    super(data, pos);
    this.vis = {};
  }
  fshape() {}
}
class vVerguetungsstahl extends vWerkstoff {
  constructor(data, pos) {
    super(data, pos);
    this.vis = {};
  }
  fshape() {}
}
class vWerkzeugstahl extends vWerkstoff {
  constructor(data, pos) {
    super(data, pos);
    this.vis = {};
  }
  fshape() {}
}

export {
  vWerkstoff,
  vLeiterwerkstoff,
  vEisenwerkstoff,
  vBaustahl,
  vAutomatenstahl,
  vEinsatzstahl,
  vVerguetungsstahl,
  vWerkzeugstahl,
};
