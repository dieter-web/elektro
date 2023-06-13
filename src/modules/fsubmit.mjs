function fsubmit (data) {
  let f = d3
    .select('#beispiel11')
    .selectAll('button')
    .data(data)
    .enter()
    .append('div')
    .attr('class', 'form-group row')
    .append('div')
    .attr('class', 'col-sm-10')
    .append('button')
    .attr('type', 'submit')
    .attr('class', 'btn btn-success')
    .text('Rechnen')
}

export { fsubmit }
