class vComponents {
  constructor(data, point) {
    this.data = data;
    this.point = point;
    this.bbox = undefined;
    this.node = undefined;

    this.offx = 20;
    this.offy = 20;

    this.y = point.y + 16;

    this.vis = {
      fill: "none",
      "fill-opacity": 1,
      style: "stroke:#ffffff;stroke-width:1.0",
      width: 64, // Definierte Größe einer Komponente
      height: 20,
      al: 20, // Linienlänge Anschlüsse
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

  /**
   * @description Umwandlung eines Objektes in lesbare d3 Daten
   * @author Dieter Krause
   * @date 06/03/2024
   * @param {*} odata
   * @returns {*}
   * @memberof vComponents
   */
  o2d(odata) {
    let adata = [];
    JSON.parse(JSON.stringify(odata), (key, value) => {
      adata.push(`${key}=${value}`);
    });
    adata.length = adata.length - 1; // Korrektur
    return adata;
  }

  fvalue() {
    this.Symbol.select("#value")
      .selectAll("text")
      .data(this.o2d(this.data.Eigenschaften))
      .enter()
      .append("text")
      .attr("x", this.point.x)
      .attr("y", () => {
        return (this.y += 16);
      })
      .text((d) => {
        return d;
      });
  }

  fname() {
    this.Symbol.select("#name")
      .append("text")
      .attr("x", this.point.x)
      .attr("y", () => {
        return (this.y += 16);
      })
      .text(`${this.data.Kennzeichnung.Art}${this.data.Kennzeichnung.Zählnummer} `);
  }

  fkennzeichnung() {
    this.Symbol.select("#kennzeichnung")
      .append("text")
      .attr("x", this.point.x)
      .attr("y", () => {
        return (this.y += 16);
      })
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

export { vComponents };
