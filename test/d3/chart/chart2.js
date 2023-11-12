function x(d) {
  return d[0];
}

function y(d) {
  return d[1];
}

function x(d) {
  return d[0];
}

function init() {
  const l = [
    [0, 0],
    [5, 0],
    [5, 5],
    [0, 5],
    [0, 0],
    [5, 5],
    [0, 5],
    [5, 0],
  ];

  const width = 100;
  const height = 100;

  const l1 = d3.line();

  const svg = d3
    .create("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("viewbox", [0, 0, width, height])
    .attr("style", "max-width: 100%; height: auto");
}
