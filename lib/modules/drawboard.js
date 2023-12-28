// function drawboard(id, width, height, backgroundcolor, viewBox)
// function drawboard(pviewbox = "0 0 200 10") {
function drawboard(pviewbox = [0, 0, 1000, 1000]) {
  const parameter = {
    id: "#grafik",
    width: 640,
    height: 480,
    backgroundcolor: "none",
    viewbox: pviewbox
  };
  function mdown(data) {
    // if (data) {
    //   d3.select(this).remove();
    //   d3.event.stopPropagation();
    // }
    // // console.log("mdown aufgerufen!");
  }
  function mmove(data) {
    // this.attr("transform", "translate(" + d3.mouse(this) + ")");
  }
  const svg = d3.select(`svg${parameter.id}`).attr("width", parameter.width).attr("height", parameter.height).attr("xmlns", "http://www.w3.org/2000/svg").attr("xmlns:link", "http://www.w3.org/1999/link").attr("version", "1.1").style("background-color", parameter.backgroundcolor).attr("viewBox", parameter.viewbox).on("mousedown", mdown).on("mousemove", mmove);

  // svg.on("mousedown", mdown).on("mousemove", mmove);

  return svg;
}
export { drawboard };