class Betriebsmittel {
  constructor(data) {
    this.data = data;
  }

  finit() {
    this.Symbol.append("g").attr("id", "huelle");
    this.Symbol.append("g").attr("id", "shape");
    // this.Symbol.append("g").attr("id", "anschluss");
    this.Symbol.append("g").attr("id", "pins");
    this.Symbol.append("g").attr("id", "name");
    this.Symbol.append("g").attr("id", "value");
  }

  fhuelle() {
    this.Symbol.select("#huelle")
      .append("rect")
      .attr("fill", "none")
      .attr("style", "stroke:#ffffff; stroke-width: 1.0")
      .attr("x", this.data.Parameter.x - 20)
      .attr("y", this.data.Parameter.y - 10)
      .attr("height", this.data.vis.height + 20)
      .attr("width", this.data.vis.width + 40)
      .attr("hidden", "true"); // soll es sichtbar sein --> Zeile ausdokumentieren
  }

  fname() {
    this.Symbol.select("#name")
      .append("text")
      .attr("x", this.data.Parameter.x)
      .attr("y", this.data.Parameter.y - 5)
      .text(this.data.vis.name);
  }

  fvalue() {
    this.Symbol.select("#value")
      .append("text")
      .attr("x", this.data.Parameter.x + 50)
      .attr("y", this.data.Parameter.y - 5)
      .text(this.data.vis.value);
  }

  fdraw() {
    this.finit();
    this.fhuelle();
    this.fshape();
    // this.fanschluss();
    this.fname();
    this.fvalue();
    return this.Symbol.node();
  }
}

export { Betriebsmittel };
