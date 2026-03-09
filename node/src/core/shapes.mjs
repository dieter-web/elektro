import * as d3 from 'd3';

export class Arc {
  constructor(x, y, radius, startAngle, endAngle) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
  }

  draw(layer) {
    const arc = d3
      .arc()
      .innerRadius(0)
      .outerRadius(this.radius)
      .startAngle(this.startAngle)
      .endAngle(this.endAngle);

    layer
      .append('path')
      .attr('d', arc)
      .attr('transform', `translate(${this.x}, ${this.y})`)
      .attr('fill', 'none')
      .attr('stroke', 'black')
      .attr('stroke-width', 2);
  }
}
