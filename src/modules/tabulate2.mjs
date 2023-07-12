function tabulate (data, type, id) {
  let table = d3.select(id)
  let thead = table.append('thead')
  let tbody = table.append('tbody')

  let head = []

  if (type === 'group') {
    // Object besteht aus mehreren Unterobjecten gleicher Art (also z.B. nur Widerstand)
    let d0 = data.Object.Parameter
    let d1 = data.Ergebnis
    let h1 = Object.keys(d0)
    let h2 = Object.keys(d1)

    head = h1.concat(h2)
  }

  if (type === 'single') {
  }

  // let theadParameter = Object.keys(
  //   data.Object.Parameter //.Widerstaende[0].Parameter
  // )
  // let theadErgebnis = Object.keys(data.Ergebnis)
  // let theadData = theadParameter.concat(theadErgebnis)
  // let tbodyErgebnis = Object.values(data.Ergebnis)

  // let tbodyValues = []

  // data.Object.Parameter.map((d, i) => {
  //   let t = d.Parameter
  //   let tv = Object.values(t)
  //   let tvg = []

  //   for (let x = 0; x < tbodyErgebnis.length; x++) {
  //     tvg = tvg.concat(tbodyErgebnis[x][i])
  //   }
  //   let tvgg = tv.concat(tvg)
  //   tbodyValues.push(tvgg)
  // })

  thead
    .append('tr')
    .selectAll('th')
    .data(head)
    .enter()
    .append('th')
    .text(d => {
      return d
    })

  // data.Object.Parameter.Widerstaende.map((d, i) => {
  //   tbody
  //     .append('tr')
  //     .selectAll('td')
  //     .data(tbodyValues[i])
  //     .enter()
  //     .append('td')
  //     .text(d => {
  //       return d
  //     })
  // })
}

export { tabulate }
