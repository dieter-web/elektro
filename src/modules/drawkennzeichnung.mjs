function drawkennzeichnung(data, id) {
  d3.select(id)
    .append("text")
    .attr("x", data.Parameter.x)
    .attr("y", data.Parameter.y)
    .text(`${data.Kennzeichnung.Art}${data.Kennzeichnung.Zählnummer}`);
}

export { drawkennzeichnung };
