/**
 * @description Eingabe Eigenschaften und Parameter getrennt
 * @author Dieter Krause
 * @date 07/03/2024
 * @param {*} data
 * @param {*} id
 */
function finputEP(data, id) {
  d3.select(id)
    .selectAll("div")
    .data(data[0]) // Eigenschaften
    .enter()
    .append("div")
    .attr("class", "input-group")
    .append("span")
    .attr("class", "input-goupt-text")
    .attr("id", "basic-addon1")
    .text((d) => {
      return d.text;
    })
    .append("input")
    .attr("type", "text")
    .attr("class", "form-controll")
    .attr("id", (d) => {
      return d.id;
    })
    .attr("name", (d) => {
      return d.name;
    })
    .attr("value", (d) => {
      return d.value;
    });
  d3.select(id)
    .selectAll("div")
    .data(data[1]) // Parameter -- anfügen !
    // .enter()
    .append("div")
    .attr("class", "input-group")
    .append("span")
    .attr("class", "input-goupt-text")
    .attr("id", "basic-addon1")
    .text((d) => {
      return d.text;
    })
    .append("input")
    .attr("type", "text")
    .attr("class", "form-controll")
    .attr("id", (d) => {
      return d.id;
    })
    .attr("name", (d) => {
      return d.name;
    })
    .attr("value", (d) => {
      return d.value;
    });
}

export { finputEP };
