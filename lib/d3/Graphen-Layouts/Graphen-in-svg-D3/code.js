var svg, linkStart;
function init() {
  svg = d3.select("svg").on("click", addNode);
}
function findNodes(ID, selector) {
  return svg.selectAll(selector || "circle").filter(function (d) {
    return d === ID;
  });
}
function findLinks(from, to) {
  return svg.selectAll("line").filter(function (d) {
    return d.indexOf(from) != -1 && (!to || d.indexOf(to) != -1);
  });
}
function getID() {
  var ID = 1;
  var data = svg.selectAll("circle").data();
  while (true) {
    if (data.indexOf(ID) === -1) return ID;
    ID++;
  }
}
function removeNode() {
  var data = d3.select(this).datum();
  findNodes(data, "*").remove();
  findLinks(data).remove();
  if (data === linkStart) linkStart = undefined;
  d3.event.preventDefault();
}
function maybeAddLink(data) {
  if (linkStart && data !== linkStart) {
    if (findLinks(linkStart, data).empty()) {
      var from = findNodes(linkStart);
      var to = findNodes(data);
      svg.insert("line", ":first-child").attr("x1", from.attr("cx")).attr("y1", from.attr("cy")).attr("x2", to.attr("cx")).attr("y2", to.attr("cy")).attr("stroke", "black").datum([linkStart, data]);
    }
    linkStart = undefined;
  } else {
    linkStart = data;
  }
  d3.event.stopPropagation();
}
function addNode() {
  var ID = getID();
  var point = d3.mouse(this);
  let text = svg.append("text").attr("x", point[0]).attr("y", point[1]).style("pointer-events", "none").datum(ID).text(ID);
  var box = text.node().getBBox();
  text.attr("dx", -box.width / 2).attr("dy", box.height / 2);
  box = text.node().getBBox();
  var circle = svg.insert("circle", ":last-child").attr("cx", box.x + box.width / 2).attr("cy", box.y + box.height / 2).attr("r", 4 + Math.sqrt(box.width * box.width, box.height * box.height) / 2).attr("fill", "white").attr("stroke", "black").datum(ID).on("click", maybeAddLink).on("contextmenu", removeNode);
  linkStart = undefined;
}