class Tabelle {
  constructor(data, id) {
    this.id = id;
    this.data = data;

    this.table = d3.select(id);
    this.keys = Object.keys(data.Parameter);
    this.values = Object.values(data.Parameter);
    this.thead = this.table.append("thead");
    this.tbody = this.table.append("tbody");
  }

  createKopfzeile() {
    this.thead
      .append("tr")
      .selectAll("td")
      .data(this.keys)
      .enter()
      .append("td")
      .text((d) => {
        return d;
      });
  }

  createBody() {
    this.tbody
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
    this.createKopfzeile();
    this.createBody();
  }
}

export { Tabelle };
