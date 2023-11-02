function vrl1(data) {
  // const nr = `g${data.Kennzeichnung.Art}${data.Kennzeichnung.Zählnummer}`;
  const zoomX = 4;
  const zoomY = 100;

  const Symbol = d3.create("svg:g").attr("id", "Bleirohr1"); //nr);

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
    .attr("height", data.vis.height)
    .attr("width", data.vis.width)
    .attr("hidden", "true");

  Symbol.select("#shape")
    .attr("fill", data.vis.fill)
    .attr("fill-opacity", data.vis.fillopacity)
    .attr("style", data.vis.style)
    .append("rect")
    .attr("x", data.Parameter.x)
    .attr("y", data.Parameter.y)
    .attr("height", 3 * zoomX)
    .attr("width", 0.8 * zoomY);

  Symbol.select("#kennzeichnung")
    .append("text")
    .attr("x", data.Parameter.x)
    .attr("y", data.Parameter.y - 5).text(`${data.Parameter.Name},
      ${data.Parameter.Material},
      ${data.Parameter.G},
      ${data.Parameter.d},
      ${data.Parameter.D}`);

  Symbol.select("#parameter")
    .append("text")
    .attr("x", data.Parameter.x)
    .attr("y", data.Parameter.y - 20)
    .text("Parameter");

  return Symbol.node();
}
export { vrl1 };
