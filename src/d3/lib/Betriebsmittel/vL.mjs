function vL(data, element, pos) {
  //Layer
  const Symbol = d3.create("svg:g").attr("id", "symbol");
  const Name = d3.create("svg:g").attr("id", "name");
  const Value = d3.create("svg:g").attr("id", "value");

  // Shape
  const shape = [];

  //
  // Layer Symbol
  //
  Symbol.selectAll("#symbol")
    .data(element)
    .enter()

    // Widerstandsrechteck
    .append("rect")
    .attr("fill", (d) => {
      return data.visMehrlagigeSpule.fill;
    })
    .attr("fill-opacity", (d) => {
      return data.visMehrlagigeSpule.fillopacity;
    })
    .attr("style", (d) => {
      return data.visMehrlagigeSpule.style;
    })
    .attr("x", pos[0])
    .attr("y", pos[1])
    .attr("height", (d) => {
      return data.visMehrlagigeSpule.height;
    })
    .attr("width", (d) => {
      return data.visMehrlagigeSpule.width;
    });

  // Anschlüsse
  Symbol.selectAll("path")
    .data(element)
    .enter()
    .append("path")
    .attr("fill", (d) => {
      return data.visMehrlagigeSpule.fill;
    })
    .attr("fill-opacity", (d) => {
      return data.visMehrlagigeSpule.fillopacity;
    })
    .attr("style", (d) => {
      return data.visMehrlagigeSpule.style;
    })
    .attr("d", (d) => {
      return data.visMehrlagigeSpule.path;
    });

  shape.push(Symbol.node());

  //
  // Layer Name
  //
  Name.selectAll("#name")
    .data(element)
    .enter()
    .append("text")
    .attr("x", pos[0])
    .attr("y", pos[1] - 5)
    .text((d) => {
      return data.visMehrlagigeSpule.name;
    });

  shape.push(Name.node());

  //
  // Layer Value
  //
  Value.selectAll("#value")
    .data(element)
    .enter()
    .append("text")
    .attr("x", pos[0] + 50)
    .attr("y", pos[1] - 5)
    .text((d) => {
      return data.visMehrlagigeSpule.value;
    });

  shape.push(Value.node());
  return shape;
}

export { vL };
