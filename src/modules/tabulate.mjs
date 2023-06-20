function tabulate (data, columns, id) {
  let table = d3.select(id)
  let thead = table.append('thead')
  let tbody = table.append('tbody')

  thead
    .append('tr')
    .selectAll('th')
    .data(columns)
    .enter()
    .append('th')
    .text(column => {
      return column
    })

  let row = tbody.selectAll('tr').data(data).enter().append('tr')

  let cells = row
    .selectAll('td')
    .data(row => {
      return columns.map(column => {
        return { column: column, value: row[column] }
      })
    })
    .enter()
    .append('td')
    .text(d => {
      return d.value
    })

  return table
}
export { tabulate }
