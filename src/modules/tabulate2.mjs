function tabulate (data, type, id) {
  let table = d3.select(id)
  let thead = table.append('thead')
  let tbody = table.append('tbody')
  let d0 = data.Object.Parameter
  let d1 = data.Ergebnis

  // Head
  let head = []
  let body = []

  // mehrere Objecte
  if (type === 'group') {
    // let d0 = data.Object.Parameter
    // let d1 = data.Ergebnis
    let h1 = Object.keys(d0)
    let h2 = Object.keys(d1)

    let h11 = d0.Objecte.map(R => {
      return R.Kennzeichnung.Art + R.Kennzeichnung.Zaehlnummer
    })

    let h12 = h1[1]
    let h13 = h1[2]

    head = h11.concat(h12).concat(h13).concat(h2)

    // Body
    let b1 = Object.values(d0)
    let b2 = Object.values(d1)

    let b11 = b1[0]
    let b12 = b1[1]
    let b13 = b1[2]

    let b111 = b11.map(R => {
      // [1,2,3]
      return R.Parameter.value
    })

    let body1 = b111.concat(b12).concat(b13)

    let b21 = b2.map(S => {
      return S.value + S.unit
    })

    body = body1.concat(b21)
  }

  // nur ein Object
  if (type === 'single') {
    let h1 = Object.keys(d0)
    let h2 = Object.keys(d1)
    head = h1.concat(h2)

    let b1 = Object.values(d0)
    let b2 = Object.values(d1)
    body = b1.concat(b2[0].value + b2[0].unit)
  }

  thead
    .append('tr')
    .selectAll('th')
    .data(head)
    .enter()
    .append('th')
    .text(d => {
      return d
    })

  tbody
    .append('tr')
    .selectAll('td')
    .data(body)
    .enter()
    .append('td')
    .text(d => {
      return d
    })

  // data.Object.Parameter.Widerstand.map((d, i) => {
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
