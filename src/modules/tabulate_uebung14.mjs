function tabulate (data, id) {
  let table = d3.select(id)
  let thead = table.append('thead')
  let tbody = table.append('tbody')

  let dp = data.Object.Parameter
  let de = data.Ergebnis

  let th1 = Object.keys(data.Object)
  let th11 = Object.keys(data.Ergebnis)

  let th = th1.concat(th11)

  let tb1 = Object.values(data.Object.Kennzeichnung)
  let tb2 = Object.values(data.Object.Parameter)
  let tb3 = Object.values(data.Ergebnis)

  let tb = tb1.concat(tb2).concat(tb3)

  thead
    .append('tr')
    .selectAll('td')
    .data(tb)
    .append('th')
    .text(d => {
      return d
    })
}
export { tabulate }
