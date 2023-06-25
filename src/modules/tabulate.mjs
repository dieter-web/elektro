// function tabulate (data, columns, id) {
//   let table = d3.select(id)
//   let thead = table.append('thead')
//   let tbody = table.append('tbody')

//   thead
//     .append('tr')
//     .selectAll('th')
//     .data(columns)
//     .enter()
//     .append('th')
//     .text(column => {
//       return column
//     })

//   let row = tbody.selectAll('tr').data(data).enter().append('tr')

//   let cells = row
//     .selectAll('td')
//     // 1 td existiert schon !
//     .data(row => {
//       return columns.map(column => {
//         return { column: column, value: row[column] }
//       })
//     })
//     .enter()
//     .append('td')
//     .text(d => {
//       return d.value
//     })

//   return table
// }
function tabulate (data, id) {
  let table = d3.select(id)
  let thead = table.append('thead')
  let tbody = table.append('tbody')

  let theadData = Object.keys(data.Betriebsmittel.Parameter)
  theadData.push(Object.keys(data.Ergebnis))
  let datath = theadData.map(d => {
    let a = []
    a.push(d)
    return a
  })

  let tbodyValues = Object.values(data.Betriebsmittel.Parameter)
  tbodyValues.push(Object.values(data.Ergebnis))
  let datab = tbodyValues.map(d => {
    let a = []
    a.push(d)
    return a
  })

  thead
    .append('tr')
    .selectAll('th')
    .data(datath) // .data(theadData)
    .enter()
    .append('th')
    .text(d => {
      return d
    })

  tbody
    .append('tr')
    .selectAll('td')
    .data(datab) // .data(tbodyValues)
    .enter()
    .append('td')
    .text(d => {
      return d
    })
}

export { tabulate }
