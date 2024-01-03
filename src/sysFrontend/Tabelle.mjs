class Tabelle {
  constructor(data, id) {
    this.id = id;
    this.data = data;

    this.table = d3.select(id);
    this.keys = Object.keys(data.Parameter);
    this.values = Object.values(data.Parameter);
  }

  // für einzeiligen Head
  createThead() {
    let thead = this.table.append("thead");
    thead
      .append("th")
      .selectAll("td")
      .data(this.keys)
      .enter()
      .append("th")
      .text((d) => {
        return d;
      });
  }

  // für einzeilige Tabelle
  createTBody() {
    let tbody = this.table.append("tbody");
    tbody
      .append("tr")
      .selectAll("td")
      .data(this.values)
      .enter()
      .append("td")
      .text((d) => {
        return d;
      });
  }

  tabulate() {
    this.createThead();
    this.createTBody();
  }
}

export { Tabelle };
