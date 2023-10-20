function vR(data, element, pos) {
  // Layer des shape
  const Symbol = d3.create("svg:g").attr("id", "symbol");
  // const Symbol = d3
  //   .create("svg:g")
  //   .attr("id", `${data.Kennzeichnung.Art}${data.Kennzeichnung.Zählnummer}`);
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

    // Widerstand

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
    .attr("x", pos[0])
    .attr("y", pos[1])
    .attr("height", (d) => {
      return data.visWiderstand.height;
    })
    .attr("width", (d) => {
      return data.visWiderstand.width;
    });

  // Anschlüsse
  Symbol.selectAll("path")
    .data(element)
    .enter()
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
      return data.visWiderstand.name;
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
      return data.visWiderstand.value;
    });

  shape.push(Value.node());

  // return [Symbol.node(), Value.node(), Name.node()];
  return shape;
}

export { vR };
