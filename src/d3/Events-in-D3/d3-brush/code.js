function init() {
  const brush = d3.brushX();

  svg = d3.select("svg");

  svg.on("mousedown", doit).on("mousemove", moveCursor);

  svg.append("g").attr("class", "brush").call(d3.brush().on("brush", brushed));

  cursor = svg
    .append("circle")
    .attr("r", 10)
    .attr("stroke", "black")
    .attr("stroke-width", 1)
    .attr("fill", "white")
    .attr("transformation", "translate(-100, -100")
    .attr("class", "cursor")
    .on(".brush", brushed);
}

function defaultExtent() {
  var svg = this.ownerSVGElement || this;
  if (svg.hasAttribute("viewBox")) {
    svg = svg.viewBox.baseVal;
    return [
      [svg.x, svg.y],
      [svg.x + svg.width, svg.y + svg.height],
    ];
  }
  return [
    [0, 0],
    [svg.width.baseVal.value, svg.height.baseVal.value],
  ];
}

function moveCursor(data) {
  //   cursor.attr("transform", "translate(" + d3.brush(this) + ")");
  console.log("move");
}

function brushed(data) {
  console.log(data.selection[0], data.selection[1]);
}

function doit() {}
