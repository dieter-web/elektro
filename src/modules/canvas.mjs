function canvas (width, height, id) {
  const can = d3.select(id).attr('width', width).attr('height', height)
  const g = can.append('g')
  return g
}
export { canvas }
