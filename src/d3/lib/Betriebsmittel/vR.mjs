// function vR(data, element, pos) {
function vR(data) {
  const nr = `g${data.Kennzeichnung.Art}${data.Kennzeichnung.Zählnummer}`;

  const Symbol = d3.create("svg:g").attr("id", nr);

  // Layer eines Widerstandes
  Symbol.append("g").attr("id", "huelle");
  Symbol.append("g").attr("id", "shape");
  Symbol.append("g").attr("id", "pins");
  Symbol.append("g").attr("id", "name");
  Symbol.append("g").attr("id", "value");

  Symbol.select("#huelle")
    .append("rect")
    .attr("fill", "none")
    .attr("style","stroke:#ffffff; stroke-width: 1.0")
    .attr("x", data.Parameter.x - 20)
    .attr("y", data.Parameter.y)
    .attr("height",data.visWiderstand.height)
    .attr("width",data.visWiderstand.width + 40)
    .attr("hidden", "true");

  Symbol.select("#shape")
    .attr("fill", data.visWiderstand.fill)
    .attr("fill-opacity",data.visWiderstand.fillopacity)
    .attr("style", data.visWiderstand.style)
    .append("rect")
    .attr("x", data.Parameter.x)
    .attr("y", data.Parameter.y)
    .attr("height", data.visWiderstand.height)
    .attr("width", data.visWiderstand.width);

  // Anschlüsse
  Symbol.select("#shape")
    .append("path")
    .attr("fill", data.visWiderstand.fill)
    .attr("fill-opacity", data.visWiderstand.fillopacity)
    .attr("style", data.visWiderstand.style)
    .attr("d", data.visWiderstand.path);

  Symbol.select("#name")
    .append("text")
    .attr("x", data.Parameter.x)
    .attr("y", data.Parameter.y - 5)
    .text((d) => {
      return data.Parameter.Name;
    });

  Symbol.select("#value")
    .append("text")
    .attr("x", data.Parameter.x + 50)
    .attr("y", data.Parameter.y - 5)
    .text((d) => {
      return data.Parameter.R;
    });

  // Symbol.select("#pins")
  //   .selectAll("circle")
  //   .data(data.visWiderstand.pins)
  //   .enter()
  //   .append("circle")
  //   .attr("cx", (d) => {
  //     return d[0];
  //   })
  //   .attr("cy", (d) => {
  //     return d[1];
  //   })
  //   .attr("r", "10");

  return Symbol.node();
}

export { vR };
