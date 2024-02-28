class vComponents {
  constructor(data, point) {
    this.data = data;
    this.point = point;
    this.bbox = undefined;
    this.node = undefined;

    this.offx = 20;
    this.offy = 20;

    this.vis = {
      fill: "none",
      "fill-opacity": 1,
      style: "stroke:#ffffff;stroke-width:1.0",
      width: 64,  // Definierte Größe einer Komponente
      height: 20,
      al: 20,     // Linienlänge Anschlüsse
      "pointer-events": "all",
    };

    this.Symbol = d3
      .create("svg:g")
      .attr("id", `${data.Kennzeichnung.Art}${data.Kennzeichnung.Zählnummer}`);
  }

  finit() {
    // this.Symbol.append("g").attr("id", "huelle");
    this.Symbol.append("g").attr("id", "shape");
    this.Symbol.append("g").attr("id", "anschluss");
    this.Symbol.append("g").attr("id", "pins");
    this.Symbol.append("g").attr("id", "name");
    this.Symbol.append("g").attr("id", "value");
  }

  fvalue() {
    this.Symbol.select("#value")
      .append("text")
      .attr("x", this.point.x + this.offx)
      .attr("y", this.point.y + this.vis.height + this.offy)
      .text(`${this.data.Berechnung}`);

    this.Symbol.select("#name")
      .append("text")
      .attr("x", this.point.x)
      .attr("y", this.point.y + this.vis.height + this.offy)
      .text(
        `${this.data.Kennzeichnung.Art}${this.data.Kennzeichnung.Zählnummer} `
      );
  }

  createNode() {
    this.finit();
    this.fshape();
    this.fvalue();
    this.node = this.Symbol.node();
  }
}

export { vComponents };
