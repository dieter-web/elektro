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
    this.Symbol.append("g").attr("id", "kennzeichnung");
  }

  o2d(odata) {
    let adata = [];
    JSON.parse(JSON.stringify(odata), (key, value) => {
      adata.push(`${key}=${value}`);
    });
    adata.length = adata.length - 1; // Korrektur
    return adata;
  }

  fvalue() {
    let y = this.point.y;
    this.Symbol.select("#value")
      .selectAll("text")
      .data(this.o2d(this.data.Parameter))
      .enter()
      .append("text")
      .attr("x", this.point.x)
      .attr("y", () => {
        return (y += 16);
      })
      .text((d) => {
        return d;
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

  fkennzeichnung() {
    this.Symbol.select("#kennzeichnung")
      .append("text")
      .attr("x", this.point.x)
      .attr("y", this.point.y)
      .text(`Hier steht die Kennzeichnung`);
  }

  createNode() {
    this.finit();
    this.fshape();
    this.fname();
    this.fvalue();
    this.fkennzeichnung();
    this.node = this.Symbol.node();
  }
}

export { vElektrischeAnlagen };
