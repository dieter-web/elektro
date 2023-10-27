function vrl1(data) {
  const nr = `g${data.Kennzeichnung.Art}${data.Kennzeichnung.Zählnummer}`;

  const Symbol = d3.create("svg:g").attr("id", nr);

  // Layer einer Rohrleitung
  Symbol.append("g").attr("id", "huelle");
  Symbol.append("g").attr("id", "shape");
  Symbol.append("g").attr("id", "kennzeichnung");
  Symbol.append("g").attr("id", "parameter");

  Symbol.select("#huelle")
    .append("rect")
    .attr("fill", "none")
    .attr("style", "stroke:#ffffff; stroke-width: 1.0")
    .attr("x", data.Parameter.x)
    .attr("y", data.Parameter.y)
    .attr("height", data.visBleirohr.height)
    .attr("width", data.visBleirohr.width)
    .attr("hidden", "true");

  Symbol.select("#shape");

  Symbol.select("#kennzeichnung");

  Symbol.select("parameter")
    .append("text")
    .attr("x", data.Parameter.x)
    .attr("y", data.Parameter.y - 5)
    .text(data.Parameter.Name);

  return Symbol.node();
}
export { vrl1 };
