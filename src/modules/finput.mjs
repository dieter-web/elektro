function finput (data, id) {
  let f = d3
    .select(id)
    .selectAll('div')
    .data(data)
    .enter()
    .append('div')
    .attr('class', 'input-group')
    .append('div')
    .attr('class', 'input-group')
    .append('span')
    .attr('class', 'input-group-text')
    .attr('id', 'basic-addon1')
    .text(data => {
      return data.text
    })
    .append('input')
    .attr('type', 'text')
    .attr('aria-label', '1')
    .attr('class', 'form-controll')
    .attr('placehoder', 'Wert eingeben')
    .attr('aria-label', 'Wert eingeben')
    .attr('aria-roledescription', 'basic-addon1')
    .attr('aria-required', 'true')
    .attr('id', data => {
      return data.id
    })
    .attr('name', data => {
      return data.name
    })
    .attr('value', data => {
      return data.value
    })
}
export { finput }
