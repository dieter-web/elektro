function fsubmit (data) {
  let f = d3
    .select('#beispiel11')
    .selectAll('button')
    .data(data)
    .enter()
    .append('button')
    .text('Rechnen')
}

export { fsubmit }
