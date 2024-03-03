class vElektrischeAnlagen {
  constructor(data, point) {
    this.data = data;
    this.point = point;

    this.vis = {
      fill: "none",
      "fill-opacity": 1,
      style: "stroke:#ffffff;stroke-width:1.0",
      "pointer-events": "all",
    };

    this.Symbol = d3.create("svg:g").attr("id", `${data.Kennzeichnung.Art}${data.Kennzeichnung.Zählnummer}`);
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
      .attr("x", this.point.x)
      .attr("y", this.point.y)
      .text((t) => {
        this.data.Berechunung.map((s) => {
          return s;
        });
      });
    // `${this.data.Berechnung}`);
  }

  fname() {
    this.Symbol.select("#name")
      .append("text")
      .attr("x", this.point.x)
      .attr("y", this.point.y)
      .text(`${this.data.Kennzeichnung.Art}${this.data.Kennzeichnung.Zählnummer} `);
  }

  createNode() {
    this.finit();
    this.fshape();
    // this.fvalue();
    this.fname();
    this.node = this.Symbol.node();
  }
}

export { vElektrischeAnlagen };
