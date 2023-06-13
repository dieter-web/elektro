import * as d3 from 'd3'

function chart () {
  let margin = { top: 20, right: 30, bottom: 30, left: 40 }

  let height = 500
  let width = 954

  let x = d3
    .scaleLinear()
    .domain([0, 1])
    .range([margin.left, width - margin.right])

  let y = d3
    .scaleLinear()
    .domain([0, 1])
    .range([height - margin.bottom, margin.top])

  let xAxis = g =>
    g
      .attr('transform', `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x))

  let yAxis = g =>
    g.attr('transform', `translate(${margin.left},0)`).call(d3.axisLeft(y))

  //TODO: An Frontend übergeben  wie ?

  return {
    margin: margin,
    height: height,
    width: width,
    x: x,
    y: y,
    xAxis: xAxis,
    yAxis: yAxis
    //   const svg = d3.create('svg').attr('viewBox', [0, 0, width, height])
    //   svg.append('g').call(xAxis)
    //   svg.append('g').call(yAxis)
    //   return svg.node()
  }
}
console.log(chart())
