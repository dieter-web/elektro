function vR (data, pos) {
  const R = d3.create('svg:g')
  R.selectAll('g')
    .data(data)
    .enter()
    .append('rect')
    .attr('fill', 'yellow')
    .attr('fill-opacity', '0.5')
    .attr('style', 'stroke:#fff;stroke-width:2.5;')
    .attr('x', pos[0])
    .attr('y', pos[1])
    .attr('height', d => {
      return d.height
    })
    .attr('width', d => {
      return d.width
    })
  R.selectAll('text')
    .data(data)
    .enter()
    .append('text')
    .attr('x', pos[0])
    .attr('y', pos[1] - 5)
    .text(data => {
      return data.text
    })

  return R.node()
}

export { vR }
