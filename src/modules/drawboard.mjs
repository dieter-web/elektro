// function drawboard(id, width, height, backgroundcolor, viewBox)
function drawboard(svg) {
  const can = d3
    .select(svg.id)
    .attr("width", svg.width)
    .attr("height", svg.height)
    .attr("xmlns", "http://www.w3.org/2000/svg")
    .attr("xmlns:link", "http://www.w3.org/1999/link")
    .attr("version", "1.1")
    .style("background-color", svg.backgroundcolor)
    .attr("viewBox", svg.viewBox);

  // const nets = can.append("g");
  // nets.attr("id", "nets");

  // const buses = can.append("g");
  // buses.attr("id", "buses");

  // const pins = can.append("g");
  // pins.attr("id", "pins");

  // const symbols = can.append("g");
  // symbols.attr("id", "symbols");

  // const names = can.append("g");
  // names.attr("id", "names");

  // const values = can.append("g");
  // values.attr("id", "values");

  // const comments = can.append("g");
  // comments.attr("id", "comments");

  // const directives = can.append("g");
  // directives.attr("id", "directives");

  // const shapes = can.append("g");
  // shapes.attr("id", "shapes");

  // return {
  //   nets: nets,
  //   buses: buses,
  //   pins: pins,
  //   symbols: symbols,
  //   names: names,
  //   values: values,
  //   comments: comments,
  //   directives: directives,
  //   shapes: shapes,
  // };

  return can;
}
export { drawboard };
