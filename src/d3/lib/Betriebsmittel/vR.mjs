function vR(data, pos) {
  const R = d3.create("svg:g").attr("id", "symbol");
  // const R = d3
  // .select("g#symbols")
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
    })
    .append("rect");

  R.selectAll("text")
    .data(data)
    .enter()
    .append("text")
    .attr("x", pos[0])
    .attr("y", pos[1] - 5)
    .text((d) => {
      return d.rect.text;
    });

  return R.node();
}

export { vR };
