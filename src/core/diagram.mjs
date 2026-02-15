import * as d3 from 'd3';
export class Diagram {
  constructor(selector, width = 800, height = 600) {
    this.svg = d3
      .select(selector)
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    this.layers = {
      background: this.svg.append('g').attr('class', 'layer-bg'),
      main: this.svg.append('g').attr('class', 'layer-main'),
      overlay: this.svg.append('g').attr('class', 'layer-overlay'),
    };

    this.plugins = [];
  }

  add(shape) {
    shape.draw(this.layers.main);
    return this;
  }

  use(plugin) {
    plugin.init(this);
    this.plugins.push(plugin);
    return this;
  }
}
