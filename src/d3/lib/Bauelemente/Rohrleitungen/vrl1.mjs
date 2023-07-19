function vrl1 (data, pos) {
  const B1 = d3.create('svg:g')
  B1.selectAll('g')
    .data(data)
    .enter()
    .append('rect')
    .attr('fill', 'gray')
    .attr('fill-opacity', d => d.opacity)
    .attr('style', 'stroke:#999;stroke-width:1.5;')
    .attr('x', pos[0])
    .attr('y', pos[1])
    .attr('height', d => d.height)
    .attr('width', d => d.width)
  B1.selectAll('text')
    .data(data)
    .enter()
    .append('text')
    .attr('y', pos[1] - 10)
    .attr('x', pos[0])
    .text(d => {
      return d.text
    })
  return B1.node()
}
export { vrl1 }