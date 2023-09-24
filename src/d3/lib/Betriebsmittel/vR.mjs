function vR(data, pos) {
  // Layer des shape
  const Symbol = d3.create("svg:g").attr("id", "symbol");
  const Name = d3.create("svg:g").attr("id", "name");
  const Value = d3.create("svg:g").attr("id", "value");

  // Shape
  const shape = [];

  //
  // Layer Symbol
  //
  Symbol.selectAll("#symbol")
    .data(data)
    .enter()

    // Widerstandsrechteck
    .append("rect")
    .attr("fill", (d) => {
      return d.Widerstand.fill;
    })
    .attr("fill-opacity", (d) => {
      return d.Widerstand.fillopacity;
    })
    .attr("style", (d) => {
      return d.Widerstand.style;
    })
    .attr("x", pos[0])
    .attr("y", pos[1])
    .attr("height", (d) => {
      return d.Widerstand.height;
    })
    .attr("width", (d) => {
      return d.Widerstand.width;
    });

  // Anschlüsse
  Symbol.selectAll("path")
    .data(data)
    .enter()
    .append("path")
    .attr("fill", (d) => {
      return d.Widerstand.fill;
    })
    .attr("fill-opacity", (d) => {
      return d.Widerstand.fillopacity;
    })
    .attr("style", (d) => {
      return d.Widerstand.style;
    })
    .attr("d", (d) => {
      return d.Widerstand.path;
    });

  shape.push(Symbol.node());

  //
  // Layer Name
  //
  Name.selectAll("#name")
    .data(data)
    .enter()
    .append("text")
    .attr("x", pos[0])
    .attr("y", pos[1] - 5)
    .text((d) => {
      return d.Widerstand.name;
    });

  shape.push(Name.node());

  //
  // Layer Value
  //
  Value.selectAll("#value")
    .data(data)
    .enter()
    .append("text")
    .attr("x", pos[0] + 50)
    .attr("y", pos[1] - 5)
    .text((d) => {
      return d.Widerstand.value;
    });

  shape.push(Value.node());

  // return [Symbol.node(), Value.node(), Name.node()];
  return shape;
}

export { vR };
