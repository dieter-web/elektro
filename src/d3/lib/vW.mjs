/**
 * @description Visualisirung einer Leitung (W)
 * @author Dieter Krause
 * @date 21/06/2023
 * @param {*} data
 * @returns {*}
 */
function vW (data) {
  const W = d3.create('svg:g')
  W.selectAll('g')
    .data([1])
    .enter()
    .append('rect')
    .attr('fill', 'brown')
    .attr('fill-opacity', 0.25)
    .attr('style', 'stroke:#999;stroke-width:1.5;')
    .attr('x', 50)
    .attr('y', 50)
    .attr('height', 9)
    .attr('width', 300)
  W.selectAll('text')
    .data([
      ['W1', 10],
      ['l = 3 km', 100],
      ['d = 0.9 mm', 200],
      ['R = 84.5 ohm', 300]
    ])
    .enter()
    .append('text')
    .attr('y', 40)
    .attr('x', d => d[1])
    .text(d => d[0])
  return W.node()
}
export { vW }
