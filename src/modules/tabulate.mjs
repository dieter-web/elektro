function tabulate (data, id) {
  let table = d3.select(id)
  let thead = table.append('thead')
  let tbody = table.append('tbody')

  let theadParameter = Object.keys(data.Object[0].Parameter)
  let theadErgebnis = Object.keys(data.Ergebnis)
  let theadData = theadParameter.concat(theadErgebnis).map(d => {
    let a = []
    a.push(d)
    return a
  })

  let tbodyValues = Object.values(data.Object[0].Parameter)
  let tbodyErgebnis = Object.values(data.Ergebnis)
  let tbodyData = tbodyValues.concat(tbodyErgebnis).map(d => {
    let a = []
    a.push(d)
    return a
  })

  thead
    .append('tr')
    .selectAll('th')
    .data(theadData)
    .enter()
    .append('th')
    .text(d => {
      return d
    })

  tbody
    .append('tr')
    .selectAll('td')
    .data(tbodyData)
    .enter()
    .append('td')
    .text(d => {
      return d
    })
}

export { tabulate }
