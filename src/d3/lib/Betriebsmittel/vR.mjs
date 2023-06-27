function vR (data, pos) {
  const R = d3.create('svg:g')
  R.selectAll('g')
    .data(data)
    .enter()
    .append('rect')
    .attr('fill', 'none')
    .attr('fill-opacity', '0.3')
    .attr('style', 'stroke:#999;stroke-width:2.5;')
    .attr('x', pos[0])
    .attr('y', pos[1])
    .attr('height', data[0])
    .attr('width', data[1])
  R.selectAll('text')
    .data(data)
    .enter()
    .append('text')
    .attr('x', pos[0] + 5)
    .attr('y', pos[1] + data[0] / 2 + 5)
    .text('R')
  return R.node()
}

export { vR }
