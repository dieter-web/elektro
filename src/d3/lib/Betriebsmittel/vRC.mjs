function vRC(data) {
  this.data = data;
  this.nr = `g${data.Kennzeichnung.Art}${data.Kennzeichnung.Zählnummer}`;

  this.Symbol = d3.create("svg:g").attr("id", this.nr);
}

vRC.prototype.finit = function () {
  this.Symbol.append("g").attr("id", "huelle");
  this.Symbol.append("g").attr("id", "shape");
  this.Symbol.append("g").attr("id", "anschluss");
  this.Symbol.append("g").attr("id", "pins");
  this.Symbol.append("g").attr("id", "name");
  this.Symbol.append("g").attr("id", "value");
};

vRC.prototype.fhuelle = function () {
  this.Symbol.select("#huelle")
    .append("rect")
    .attr("fill", "none")
    .attr("style", "stroke:#ffffff; stroke-width: 1.0")
    .attr("x", this.data.Parameter.x - 20)
    .attr("y", this.data.Parameter.y - 10)
    .attr("height", this.data.vis.height + 20)
    .attr("width", this.data.vis.width + 40)
    .attr("hidden", "true"); // soll es sichtbar sein --> Zeile ausdokumentieren
};

vRC.prototype.fshape = function () {
  this.Symbol.select("#shape")
    .attr("fill", this.data.vis.fill)
    .attr("fill-opacity", this.data.vis.fillopacity)
    .attr("style", this.data.vis.style)
    .append("rect")
    .attr("x", this.data.Parameter.x)
    .attr("y", this.data.Parameter.y)
    .attr("height", this.data.vis.height)
    .attr("width", this.data.vis.width);
};

vRC.prototype.fanschluss = function () {
  this.Symbol.select("#anschluss")
    .append("path")
    .attr("fill", this.data.vis.fill)
    .attr("fill-opacity", this.data.vis.fillopacity)
    .attr("style", this.data.vis.style)
    .attr("d", this.data.vis.path);
};

vRC.prototype.fname = function () {
  this.Symbol.select("#name")
    .append("text")
    .attr("x", this.data.Parameter.x)
    .attr("y", this.data.Parameter.y - 5)
    .text((d) => {
      return this.data.Parameter.Name;
    });
};

vRC.prototype.fvalue = function () {
  this.Symbol.select("#value")
    .append("text")
    .attr("x", this.data.Parameter.x + 50)
    .attr("y", this.data.Parameter.y - 5)
    .text(this.data.Parameter.R);
};

vRC.prototype.fdraw = function () {
  this.finit();
  this.fhuelle();
  this.fshape();
  this.fanschluss();
  this.fname();
  this.fvalue();
  return this.Symbol.node();
};

export { vRC };
