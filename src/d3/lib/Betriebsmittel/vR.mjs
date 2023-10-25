// function vR(data, element, pos) {
function vR(data) {
  const nr = `${data.Kennzeichnung.Art}${data.Kennzeichnung.Zählnummer}`;

  const Symbol = d3.create("svg:g").attr("id", nr);

  // Layer des Symbols
  Symbol.append("g").attr("id", "hülle");
  Symbol.append("g").attr("id", "shape");
  Symbol.append("g").attr("id", "pins");
  Symbol.append("g").attr("id", "name");
  Symbol.append("g").attr("id", "value");

  Symbol.select("#hülle")
    .append("rect")
    .attr("fill", (d) => {
      return data.visWiderstand.fill;
    })
    .attr("fill-opacity", (d) => {
      return data.visWiderstand.fillopacity;
    })
    .attr("style", (d) => {
      return data.visWiderstand.style;
    })
    .attr("x", data.Parameter.x - 20)
    .attr("y", data.Parameter.y)
    .attr("height", (d) => {
      return data.visWiderstand.height;
    })
    .attr("width", (d) => {
      return data.visWiderstand.width + 40;
    })
    .attr("hidden", "true");

  Symbol.select("#shape")
    .attr("fill", (d) => {
      return data.visWiderstand.fill;
    })
    .attr("fill-opacity", (d) => {
      return data.visWiderstand.fillopacity;
    })
    .attr("style", (d) => {
      return data.visWiderstand.style;
    })
    .append("rect")
    .attr("x", data.Parameter.x)
    .attr("y", data.Parameter.y)
    .attr("height", (d) => {
      return data.visWiderstand.height;
    })
    .attr("width", (d) => {
      return data.visWiderstand.width;
    });

  // Anschlüsse
  Symbol.select("#shape")
    .append("path")
    .attr("fill", (d) => {
      return data.visWiderstand.fill;
    })
    .attr("fill-opacity", (d) => {
      return data.visWiderstand.fillopacity;
    })
    .attr("style", (d) => {
      return data.visWiderstand.style;
    })
    .attr("d", (d) => {
      return data.visWiderstand.path;
    });

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
