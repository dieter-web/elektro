function tabulate(data, id) {
  let table = d3.select(id);
  let thead = table.append("thead");
  let tbody = table.append("tbody");

  let dth = Object.keys(data.Parameter);

  // let tb1 = Object.values(data.Kennzeichnung);
  let tb = Object.values(data.Parameter);

  // let tb = tb1.concat(tb2)

  thead
    .append("tr")
    .selectAll("td")
    .data(dth)
    .enter()
    .append("th")
    .text((d) => {
      return d;
    });
  tbody
    .append("tr")
    .selectAll("td")
    .data(tb)
    .enter()
    .append("td")
    .text((d) => {
      return d;
    });
}
export { tabulate };
