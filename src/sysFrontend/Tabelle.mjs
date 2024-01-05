// Einzeilige Tabelle (Mit Kopfzeile und einer Bodyzeile)
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

// Tabelle mit einer Kopfspalte und einer Kopfzeile (mehrere Bodyzeilen)
class Tabelle2 {
  constructor(data, id) {
    this.data = data;
    this.id = id;
    this.values = Object.values(data.Parameter); // Werte
    this.space = [" "];
    this.keyss = Object.keys(data.Parameter); // Kopfspalte
    this.keysz = Object.keys(this.values[0]); // Kopfzeile
    this.keyszs = this.space.concat(this.keysz);

    this.table = d3.select(id);
    this.thead = this.table.append("thead");
    this.tbody = this.table.append("tbody");
    this.rows = [];
  }

  createKopfzeile() {
    this.thead
      .append("tr")
      .selectAll("td")
      .data(this.keyszs)
      .enter()
      .append("td")
      .text((d) => {
        return d;
      });
  }

  createBody() {
    let rows = [];
    for (let i = 0; i < this.keyss.length; i++) {
      let tmp = [];
      let col = [];
      tmp.push(this.keyss[i]);
      col = tmp.concat(Object.values(this.values[i]));
      this.rows.push(col);
    }

    this.rows.map((data) => {
      this.tbody
        .append("tr")
        .selectAll("td")
        .data(data)
        .enter()
        .append("td")
        .text((data) => {
          return data;
        });
    });
  }
  tabulate() {
    this.createKopfzeile();
    this.createBody();
  }
}

export { Tabelle, Tabelle2 };
