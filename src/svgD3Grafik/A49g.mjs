import * as d3 from 'd3';

// Teil von createSVGD3Html
export function createGrafik(document, width, height, centerX, centerY) {
  let R = 10;

  const svg = d3
    .select(document.body)
    .append('svg')
    .attr('width', width)
    .attr('height', height);

  // Inhalt einfügen
  svg.selectAll('*').remove();

  // Halbkugel
  svg
    .append('path')
    .attr(
      'd',
      d3.arc()({
        innerRadius: 0,
        outerRadius: R,
        startAngle: -Math.PI / 2,
        endAngle: Math.PI / 2,
      })
    )
    .attr('transform', `translate(${centerX},${centerY}) scale(1,-1)`)
    .attr('class', 'halbkugel');

  // Stromlinien (radial)
  const nStrom = 12;
  for (let k = 0; k < nStrom; k++) {
    const angle = Math.PI + (k / (nStrom - 1)) * Math.PI;
    const x1 = centerX + R * Math.cos(angle);
    const y1 = centerY - R * Math.sin(angle);
    const x2 = centerX + 250 * Math.cos(angle);
    const y2 = centerY - 250 * Math.sin(angle);

    svg
      .append('line')
      .attr('x1', x1)
      .attr('y1', y1)
      .attr('x2', x2)
      .attr('y2', y2)
      .attr('class', 'stromlinie')
      .style('stroke', 'steelblue')
      .style('stroke-width', '1.5px');
  }

  // Potentiallinien (konzentrische Kreise)
  const nPot = 5;
  for (let j = 1; j <= nPot; j++) {
    svg
      .append('circle')
      .attr('cx', centerX)
      .attr('cy', centerY)
      .attr('r', (R + j) * 10)
      .attr('class', 'Potentiallinie')
      .style('stroke', 'red')
      .style('stroke-width', '2.5px')
      .style('fill', 'none');
  }
}
