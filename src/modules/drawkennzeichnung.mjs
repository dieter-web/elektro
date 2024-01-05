async function drawkennzeichnung(data, id) {
  d3.select(id)
    .append("text")
    .attr("x", data.point.x)
    .attr("y", data.point.y)
    .text(`${data.Kennzeichnung.Art}${data.Kennzeichnung.Zählnummer}`);
  return 1;
}

export { drawkennzeichnung };
