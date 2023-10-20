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
      return data.visMaterial.fillopacity;
    })
    .attr("style", (d) => {
      return data.visMaterial.style;
    })
    .attr("x", pos[0])
    .attr("y", pos[1])
    .attr("height", (d) => {
      return data.visMaterial.height;
    })
    .attr("width", (d) => {
      return data.visMaterial.width;
    });

  shape.push(Symbol.node());

  Name.selectAll("#name")
    .data(data)
    .enter()
    .append("text")
    .attr("x", pos[0])
    .attr("y", pos[1] - 5)
    .text((d) => {
      return "GoldChrom";
    });

  shape.push(Name.node());

  Value.selectAll("#value")
    .data(element)
    .enter()
    .append("text")
    .attr("x", pos[0] + 50)
    .attr("y", pos[1] - 5)
    .text((d) => {
      return "Value";
    });
  shape.push(Value.node());

  return shape;

  // return M.node();
}

export { material };
