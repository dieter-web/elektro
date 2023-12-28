function tabulate(data, id) {
  let table = d3.select(id);
  let thead = table.append('thead');
  let tbody = table.append('tbody');

  // Hier gibt es nur einen Objecttyp deswegen [0] möglich !

  let theadParameter = Object.keys(data.Object[0].Parameter);
  let theadErgebnis = Object.keys(data.Ergebnis);
  let theadData = theadParameter.concat(theadErgebnis);
  let tbodyErgebnis = Object.values(data.Ergebnis);
  let tbodyValues = [];
  data.Object.map((d, i) => {
    let t = d.Parameter;
    let tv = Object.values(t);
    let tvg = [];
    for (let x = 0; x < tbodyErgebnis.length; x++) {
      tvg = tvg.concat(tbodyErgebnis[x][i]);
    }
    let tvgg = tv.concat(tvg);
    tbodyValues.push(tvgg);
  });
  thead.append('tr').selectAll('th').data(theadData).enter().append('th').text(d => {
    return d;
  });
  data.Object.map((d, i) => {
    tbody.append('tr').selectAll('td').data(tbodyValues[i]).enter().append('td').text(d => {
      return d;
    });
  });
}
export { tabulate };