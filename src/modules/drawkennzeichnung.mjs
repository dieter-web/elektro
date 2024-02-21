async function drawkennzeichnung(data, id) {
  d3.select(id)
    .append("text")
    .attr("x", 50)
    .attr("y", 10)
    .text(`${data.Kennzeichnung.Art}${data.Kennzeichnung.Zählnummer}`);
  return 1;
}

export { drawkennzeichnung };
