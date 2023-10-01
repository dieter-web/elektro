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

  return can;
}
export { drawboard };
