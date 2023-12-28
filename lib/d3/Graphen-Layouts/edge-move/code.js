var svg, counter, selectedNode, firstNode;
function init() {
  counter = 0;
  svg = d3.select("svg").on("mousemove", moveNode).on("mouseup", mouseUp);
}
function nextID() {
  return ++counter;
}
function mouseDown(data) {
  selectedNode = data;
  if (!firstNode) firstNode = data;
}
function mouseUp() {
  if (selectedNode) {
    if (firstNode && firstNode !== selectedNode) {
      addLink(firstNode, selectedNode);
      firstNode = null;
    }
  } else {
    addNode(d3.mouse(this));
    firstNode = null;
  }
  selectedNode = null;
}
function addNode(point) {
  var ID = nextID();
  var group = svg.append("g");
  var text = group.append("text").attr("x", 0).attr("y", 0).text(ID);
  var box = text.node().getBBox();
  text.attr("dx", -box.width / 2).attr("dy", box.height / 2);
  box = text.node().getBBox();
  var circle = group.insert("circle", ":last-child").attr("cx", box.x + box.width / 2).attr("cy", box.y + box.height / 2).attr("r", 4 + Math.sqrt(box.width * box.width, box.height * box.height) / 2).attr("fill", "white").attr("stroke", "black");
  var node = {
    id: ID,
    x: point[0],
    y: point[1]
  };
  group.on("mousedown", mouseDown).datum(node);
  draw();
}
function draw() {
  svg.selectAll("g").attr("transform", function (d) {
    return "translate(" + d.x + "," + d.y + ")";
  });
  svg.selectAll("line").attr("x1", function (d) {
    return d.node1.x;
  }).attr("y1", function (d) {
    return d.node1.y;
  }).attr("x2", function (d) {
    return d.node2.x;
  }).attr("y2", function (d) {
    return d.node2.y;
  });
  clearSelection();
}
function moveNode() {
  if (selectedNode) {
    var point = d3.mouse(this);
    // var node = d3.select(selectedNode).datum();
    selectedNode.x = point[0];
    selectedNode.y = point[1];
    draw();
    firstNode = null;
  }
}
function addLink(node1, node2) {
  svg.insert("line", "g").attr("stroke", "black").datum({
    node1: node1,
    node2: node2
  });
  draw();
}
function clearSelection() {
  if (document.selection) {
    document.selection.empty();
  } else if (window.getSelection) {
    window.getSelection().removeAllRanges();
  }
}