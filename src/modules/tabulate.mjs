function tabulate (data, id) {
  let table = d3.select(id)
  let thead = table.append('thead')
  let tbody = table.append('tbody')

  // Hier gibt es nur einen Objecttyp deswegen [0] möglich !
  let theadParameter = Object.keys(data.Object[0].Parameter)
  let theadErgebnis = Object.keys(data.Ergebnis)
  let theadData = theadParameter.concat(theadErgebnis)

  let tbodyValues = []
  data.Object.map((d, i) => {
    let t = d.Parameter
    let tv = Object.values(t)
    
    // TODO: Jedes Ergebnis eintragen, muss er aber selbst finden !!
    let I = data.Ergebnis.I[i]
    let G = data.Ergebnis.G[i]

    let tvg = tv.concat(I).concat(G)
    tbodyValues.push(tvg)
  })
  console.log(tbodyValues)

  thead
    .append('tr')
    .selectAll('th')
    .data(theadData)
    .enter()
    .append('th')
    .text(d => {
      return d
    })

  data.Object.map((d, i) => {
    tbody
      .append('tr')
      .selectAll('td')
      .data(tbodyValues[i])
      .enter()
      .append('td')
      .text(d => {
        return d
      })
  })
}
export { tabulate }
