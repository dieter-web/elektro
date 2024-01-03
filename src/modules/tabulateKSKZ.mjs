// Tabelle mit einer Kopfspalte und einer Kopfzeile
function tabulateKSKZ(data, id) {
  let table = d3.select(id);
  let SK = table.append("SK");
  let KZ = table.append("KZ");
  let tbody = table.append("tbody");

  SK.append("tr")
    .selectAll("th")
    .data(data.R)
    .enter()
    .append("th")
    .attr("scope", "col")
    .text((d) => {
      return d;
    });
}
