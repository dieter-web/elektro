function mainNavbar (dataMain) {
  d3.select('#nav-main')
    .select('.container-fluid')
    .selectAll('a')
    .data(dataMain)
    .enter()
    .append('a')
    .attr('class', function (d) {
      return d.class
    })
    .attr('href', function (d) {
      return d.link
    })
    .text(t => {
      return t.name
    })
    .style('color', 'white')
}

export { mainNavbar }
