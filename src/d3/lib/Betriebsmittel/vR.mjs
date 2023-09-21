function vR(data, pos) {
  const R = d3.create("svg:g").attr("id", "symbol");

  R.selectAll("#symbol")
    .data(data)
    .enter()

    .append("rect") // Widerstand
    .attr("fill", (d) => {
      return d.rect.color;
    })
    .attr("fill-opacity", (d) => {
      return d.rect.fillopacity;
    })
    .attr("style", (d) => {
      return d.rect.style;
    })
    .attr("x", pos[0])
    .attr("y", pos[1])
    .attr("height", (d) => {
      return d.rect.height;
    })
    .attr("width", (d) => {
      return d.rect.width;
    });
    
  R.selectAll("text")
    .data(data)
    .enter()
    .append("text")
    .attr("x", pos[0])
    .attr("y", pos[1] - 5)
    .text((d) => {
      return d.rect.text;
    });

  R.selectAll("path")
    .data(data)
    .enter()
    .append("path")
    .attr("fill", (d) => {
      return d.rect.color;
    })
    .attr("fill-opacity", (d) => {
      return d.rect.fillopacity;
    })
    .attr("style", (d) => {
      return d.rect.style;
    })
    .attr("d", (d) => {
      return d.rect.path;
    });

  // TODO: Box hinzufügen
  // d3.create("svg:g").attr("id", "box");

  return R.node();
}

export { vR };
