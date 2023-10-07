function vW(data, element, pos) {
  const Symbol = d3.create("svg:g").attr("id", "symbol");
  const Name = d3.create("svg:g").attr("id", "name");
  const Value = d3.create("svg:g").attr("id", "value");

  const shape = [];

  // Layer Symbol
  Symbol.selectAll("#symbol")
    .data(element)
    .enter()

    // Symbol
    .append("rect")
    .attr("fill", (d) => {
      return data.visLeitung.fill;
    })
    .attr("fill-opacity", (d) => {
      return data.visLeitung.fillopacity;
    });
}
