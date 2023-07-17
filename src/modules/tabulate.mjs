function tabulate (data, id) {
  let table = d3.select(id)
  let thead = table.append('thead')
  let tbody = table.append('tbody')

  let th = Object.keys(data.Parameter)

  let tb1 = Object.values(data.Kennzeichnung)
  let tb2 = Object.values(data.Parameter)

  let tb = tb1.concat(tb2)

  thead
    .append('tr')
    .selectAll('td')
    .data(th)
    .enter()
    .append('th')
    .text(d => {
      return d
    })
  tbody
    .append('tr')
    .selectAll('td')
    .data(tb2)
    .enter()
    .append('td')
    .text(d => {
      if (d.mathjs) {
        // return unit(d).toString()
        return d.value + d.unit
      } else return d
    })
}
export { tabulate }
