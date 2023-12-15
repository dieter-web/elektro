class vBetriebsmittel {
  constructor(data, pos) {
    this.data = data;
    this.pos = pos;
    this.hx = 10;
    this.hy = 10;
    // this.hh = data.vis.height + 20;
    // this.hw = data.vis.width + 20;

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

  fhuelle() {
    this.Symbol.select("#huelle")
      .append("rect")
      .attr("fill", "none")
      .attr("style", "stroke:#ffffff; stroke-width: 1.0")
      .attr("x", this.pos.x - this.hx)
      .attr("y", this.pos.y - this.hy)
      .attr("height", this.hh)
      .attr("width", this.hw)
      .attr("hidden", "true"); // soll es sichtbar sein --> Zeile ausdokumentieren
  }

  fname() {
    //Kennzeichnung
    this.Symbol.select("#name")
      .append("text")
      .attr("x", this.pos.x)
      .attr("y", this.pos.y + 50)
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
      .attr("x", this.pos.x + 50)
      .attr("y", this.pos.y + 50)
      .text(`${this.data.Parameter.erg}`);
  }

  fdraw() {
    this.finit();
    // this.fhuelle();
    this.fshape();
    this.fanschluss();
    this.fname();
    this.fvalue();
    return this.Symbol.node();
  }

  fmove(x, y) {
    this.Symbol.select("#shape");
  }

  fverbinde(obj1, obj2) {}
}

export { vBetriebsmittel };
