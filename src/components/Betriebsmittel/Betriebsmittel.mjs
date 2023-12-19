class vBetriebsmittel {
  constructor(data, point) {
    this.data = data;
    this.point = point;
    this.bbox = undefined;
    this.node = undefined;

    this.Symbol = d3
      .create("svg:g")
      .attr("id", `${data.Kennzeichnung.Art}${data.Kennzeichnung.Zählnummer}`);
  }

  finit() {
    this.Symbol.append("g").attr("id", "huelle");
    this.Symbol.append("g").attr("id", "shape");
    this.Symbol.append("g").attr("id", "anschluss");
    this.Symbol.append("g").attr("id", "pins");
    this.Symbol.append("g").attr("id", "name");
    this.Symbol.append("g").attr("id", "value");
  }

  // fhuelle() {
  //   this.Symbol.select("#huelle")
  //     .append("rect")
  //     .attr("fill", "none")
  //     .attr("style", "stroke:#ffffff; stroke-width: 1.0")
  //     .attr("x", this.pos.x - this.hx)
  //     .attr("y", this.pos.y - this.hy)
  //     .attr("height", this.hh)
  //     .attr("width", this.hw)
  //     .attr("hidden", "true"); // soll es sichtbar sein --> Zeile ausdokumentieren
  // }

  fname() {
    //Kennzeichnung
    this.Symbol.select("#name")
      .append("text")
      .attr("x", this.point.x)
      .attr("y", this.point.y + 50)
      .text(
        `${this.data.Kennzeichnung.Art} ${this.data.Kennzeichnung.Zählnummer}`
      );
    // TODO: Name ist nicht für alle Betriebsmittel relevant !!
    //   //Name
    //   this.Symbol.select("#name")
    //     .append("text")
    //     .attr("x", this.x)
    //     .attr("y", this.y + 100)
    //     .text(`${this.data.Bezeichnung}`);
  }

  fvalue() {
    this.Symbol.select("#value")
      .append("text")
      .attr("x", this.point.x + 50)
      .attr("y", this.point.y + 50)
      .text(`${this.data.Parameter.erg}`);
  }

  createNode() {
    this.finit();
    this.fshape();
    this.fanschluss();
    this.fname();
    this.fvalue();

    this.node = this.Symbol.node();
    this.bbox = this.node.getBBox();

    return this.node;
  }
}

export { vBetriebsmittel };
