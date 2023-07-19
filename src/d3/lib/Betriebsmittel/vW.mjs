/*
 * @description Visualisirung einer Leitung (W)
 * @author Dieter Krause
 * @date 21/06/2023
 * @param {*} data
 * @returns {*}
 */
function vW (data, pos) {
  const W = d3.create('svg:g')
  W.selectAll('g')
    .data(data)
    .enter()
    .append('rect')
    .attr('fill', 'brown')
    .attr('fill-opacity', d => d.opacity)
    .attr('style', 'stroke:#999;stroke-width:1.5;')
    .attr('x', pos[0])
    .attr('y', pos[1])
    .attr('height', d => d.height)
    .attr('width', d => d.width)
  W.selectAll('text')
    .data(data)
    .enter()
    .append('text')
    .attr('y', pos[1] - 10)
    .attr('x', pos[0])
    .text(d => {
      return d.text
    })
  return W.node()
}
export { vW }
