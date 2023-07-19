function canvas (id, width, height, viewBox) {
  const can = d3
    .select(id)
    .attr('width', width)
    .attr('height', height)
    .attr('xmlns', 'http://www.w3.org/2000/svg')
    .attr('viewBox', viewBox)

  const g = can.append('g')
  return g
}
export { canvas }
