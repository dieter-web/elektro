function tabulate1 (data, id) {
  let table = d3.select(id)
  let thead = table.append('thead')
  let tbody = table.append('tbody')

  let theadData = Object.keys(data.Object.Parameter)
  theadData.push(Object.keys(data.Ergebnis))
  let datath = theadData.map(d => {
    let a = []
    a.push(d)
    return a
  })

  let tbodyValues = Object.values(data.Object.Parameter)
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

export { tabulate1 }
