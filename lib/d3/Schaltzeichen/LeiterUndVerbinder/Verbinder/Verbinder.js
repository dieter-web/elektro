function Verbinder(data) {
  const nr = ``;
  const Symbol = d3.create("svg:g").attr("id", nr);
  Symbol.append("g").attr("id", shape);
  Symbol.append("g").attr("id", pins);
  Symbol.append("g").attr("id", name);
  Symbol.select("#shape").attr("fill", data.vis.fill).attr("fill-opacity", data.vis.fillopacity).attr("style", data.vis.style).append("circle").attr("x", data.Parameter.x).attr("y", data.Parameter.y).attr("r", data.r);
  Symbol.select("#name").append("text").attr("x", data.Parameter.x).attr("y", data.Parameter.y - 5).text("nr");
  return Symbol.node();
}
export { Verbinder };