function finput(data, id) {
  d3.select(id)
    .selectAll("div")
    .data(data)
    .enter()
    .append("div")
    .attr("class", "input-group")
    .append("span")
    .attr("class", "input-group-text")
    .attr("id", "basic-addon1")
    .text((data) => {
      return data.text;
    })
    .append("input")
    .attr("type", "text")
    .attr("class", "form-controll")
    .attr("id", (data) => {
      return data.id;
    })
    .attr("name", (data) => {
      return data.name;
    })
    .attr("value", (data) => {
      return data.value;
    });
}

function fsubmit(data, beispiel) {
  //   let f = d3
  d3.select(beispiel)
    .selectAll("button")
    .data(data)
    .enter()
    .append("div")
    .attr("class", "form-group row")
    .append("div")
    .attr("class", "col-sm-10")
    .append("button")
    .attr("type", "submit")
    .attr("class", "btn btn-success")
    .text((d) => {
      return d;
    });
}

function ftext(data, id) {
  //   let t = d3
  d3.select(id)
    .selectAll("div")
    .data(data)
    .enter()
    .append("div")
    .attr("class", "card")
    .append("div")
    .attr("class", "card-body")
    .append("h5")
    .attr("class", "card-title")
    .text((d) => {
      return d.title;
    })
    .append("h6")
    .attr("class", "card-subtitle text-muted")
    .text((d) => {
      return d.subtitle;
    })
    .append("p")
    .attr("class", "card-text")
    .text((d) => {
      return d.text;
    });
}

/**
 * @description
 * Aus einer auf dem Server gespeicherte
 * JSON Datei die Daten zurückholen
 * @date 25/06/2023
 * @param {*} requestURL - JSON Datei
 * @returns {*}
 */
async function populate(name) {
  const request = new Request(`http://localhost:8000/json/${name}`);
  const response = await fetch(request);
  const text = await response.text();
  const data = JSON.parse(text);
  return data;
}

async function drawkennzeichnung(data, id) {
  d3.select(id)
    .append("text")
    .attr("x", 50)
    .attr("y", 10)
    .text(`${data.Kennzeichnung.Art}${data.Kennzeichnung.Zählnummer}`);
  return 1;
}

export { drawkennzeichnung, populate, ftext, fsubmit, finput };
