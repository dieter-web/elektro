function vW(data, element, pos) {
  const Symbol = d3.create("svg:g").attr("id", "symbol");
  const Name = d3.create("svg:g").attr("id", "name");
  const Value = d3.create("svg:g").attr("id", "value");

  const shape = [];

  // Layer Symbol
  Symbol.selectAll("#symbol")
    .data(element)
    .enter()

    // Leitung
    .append("rect")
    .attr("fill", (d) => {
      return data.visLeitung.fill;
    })
    .attr("fill-opacity", (d) => {
      return data.visLeitung.fillopacity;
    })
    .attr("style", (d) => {
      return data.visLeitung.style;
    })
    .attr("x", pos[0])
    .attr("y", pos[1])
    .attr("height", (d) => {
      return data.visLeitung.height;
    })
    .attr("width", (d) => {
      return data.visLeitung.width;
    });

  shape.push(Symbol.node());

  // Layer Name
  Name.selectAll("#name")
    .data(element)
    .enter()
    .append("text")
    .attr("x", pos[0])
    .attr("y", pos[1] - 5)
    .text((d) => {
      return data.visLeitung.name;
    });

  shape.push(Name.node());

  // Layer Value
  Value.selectAll("#value")
    .data(element)
    .enter()
    .append("text")
    .attr("x", pos[0] + 50)
    .attr("y", pos[1] - 5)
    .text((d) => {
      return data.visLeitung.value;
    });

  shape.push(Value.node());

  return shape;
}

export { vW };
