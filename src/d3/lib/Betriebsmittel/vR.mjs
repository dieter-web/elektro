function vR(data, pos) {
  const R = d3.create("svg:g");
  R.selectAll("g")
    .data(data)
    .enter()
    .append("rect")
    .attr("fill", (d) => {
      return d.color;
    })
    .attr("fill-opacity", (d) => {
      return d.fillopacity;
    })
    .attr("style", (d) => {
      return d.style;
    })
    .attr("x", pos[0])
    .attr("y", pos[1])
    .attr("height", (d) => {
      return d.height;
    })
    .attr("width", (d) => {
      return d.width;
    });
  R.selectAll("text")
    .data(data)
    .enter()
    .append("text")
    .attr("x", pos[0])
    .attr("y", pos[1] - 5)
    .text((d) => {
      return d.text;
    });

  return R.node();
}

export { vR };
