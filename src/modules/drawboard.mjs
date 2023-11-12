// function drawboard(id, width, height, backgroundcolor, viewBox)
function drawboard(pviewbox = "0 0 200 10") {
  const parameter = {
    id: "#grafik",
    width: 928,
    height: 500,
    backgroundcolor: "none",
    viewbox: [0, 0, 928, 500],
  };

  const can = d3
    .select(parameter.id)
    .attr("width", parameter.width)
    .attr("height", parameter.height)
    .attr("xmlns", "http://www.w3.org/2000/svg")
    .attr("xmlns:link", "http://www.w3.org/1999/link")
    .attr("version", "1.1")
    .style("background-color", parameter.backgroundcolor)
    .attr("viewBox", parameter.viewBox);

  return can;
}
export { drawboard };
