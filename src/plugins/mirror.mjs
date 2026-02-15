import * as d3 from 'd3';
export const MirrorPlugin = {
  init(diagram) {
    diagram.mirror = function (shape, axis = 'vertical') {
      const factor = axis === 'vertical' ? -1 : 1;
      const transform = (axis = 'vertical' ? `scale(-1,1)` : `scale(1,-1)`);

      diagram.layers.main.selectAll('path').attr('transform', function () {
        const old = d3.select(this).attr('transform') || '';
        return old + ' ' + transform;
      });

      return diagram;
    };
  },
};
