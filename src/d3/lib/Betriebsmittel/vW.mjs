/*
 * @description Visualisirung einer Leitung (W)
 * @author Dieter Krause
 * @date 21/06/2023
 * @param {*} data
 * @returns {*}
 */
function vW (data) {
  const W = d3.create('svg:g')
  W.selectAll('g')
    .data(data)
    .enter()
    .append('rect')
    .attr('fill', 'brown')
    .attr('fill-opacity', d => d.opacity)
    .attr('style', 'stroke:#999;stroke-width:1.5;')
    .attr('x', d => d.x)
    .attr('y', d => d.y)
    .attr('height', d => d.height)
    .attr('width', d => d.width)
  W.selectAll('text')
    .data(data)
    .enter()
    .append('text')
    .attr('y', d => d.y - 10)
    .attr('x', d => d.x)
    .text(d => {
      return d.text.map(t => t)
    })
  return W.node()
}
export { vW }