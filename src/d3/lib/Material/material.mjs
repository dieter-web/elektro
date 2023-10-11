function material(data, element, pos) {
   // Layer des shape
  const Symbol = d3.create("svg:g").attr("id", "symbol");
  const Name = d3.create("svg:g").attr("id", "name");
  const Value = d3.create("svg:g").attr("id", "value");

  // Shape
  const shape = [];

  Symbol.selectAll("#symbol")
    .data(element)
    .enter()

    .append("rect")
    .attr("fill", (d) => {
      return data.visMaterial.fill;
    })
    .attr("fill-opacity", (d) => {
      return d.fillopacity;
    })
    .attr("style", (d) => {
      return d.style;
    })
    .attr("x", pos[0])
    .attr("y", pos[1])
    .attr("height", (d) => {
      return d.height;
    })
    .attr("width", (d) => {
      return d.width;
    });
  M.selectAll("text")
    .data(data)
    .enter()
    .append("text")
    .attr("x", pos[0])
    .attr("y", pos[1] - 5)
    .text((d) => {
      return d.text;
    });

  return M.node();
}

export { material };
