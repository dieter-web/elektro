function canvas(id, width, height, viewBox) {
  const can = d3
    .select(id)
    .attr("width", width)
    .attr("height", height)
    .attr("xmlns", "http://www.w3.org/2000/svg")
    .attr("xmlns:link", "http://www.w3.org/1999/link")
    .style("background-color", "none")
    .attr("viewBox", viewBox);

  const nets = can.append("g");
  const buses = can.append("g");
  const pins = can.append("g");
  const symbols = can.append("g");
  const names = can.append("g");
  const values = can.append("g");
  const comments = can.append("g");
  const directives = can.append("g");
  const shapes = can.append("g");

  return {
    nets: nets,
    buses: buses,
    pins: pins,
    symbols: symbols,
    names: names,
    values: values,
    comments: comments,
    directives: directives,
    shapes: shapes,
  };
}
export { canvas };
