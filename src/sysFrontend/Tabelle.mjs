// Einzeilige Tabelle (Mit Kopfzeile und einer Bodyzeile)
class Tabelle {
  constructor(data, id) {
    this.id = id;
    this.data = data;
    this.table = d3.select(id);

    // Kopfzeile
    this.keyss = Object.keys(this.data.Parameter).concat(
      Object.keys(this.data.Berechnung)
    );

    // Bodyzeile
    this.bvalues = Object.values(this.data.Berechnung);
    this.values = Object.values(this.data.Parameter);

    this.thead = this.table.append("thead");
    this.tbody = this.table.append("tbody");
  }

  createKopfzeile() {
    this.thead
      .append("tr")
      .selectAll("td")
      .data(this.keyss)
      .enter()
      .append("td")
      .text((d) => {
        return d;
      });
  }

  // Werte aus this.bvalues werden verwendet
  formatValues() {
    this.erg = [];
    this.len = this.bvalues.length;
    this.i = 0;
    for (this.i; this.i < this.len; this.i++) {
      this.erg.push(
        [
          d3.format(".3E")(this.bvalues[this.i].value),
          this.bvalues[this.i].unit,
        ].join(" ")
      );
    }
    this.valuess = this.values.concat(this.erg);
  }

  createBody() {
    this.tbody
      .append("tr")
      .selectAll("td")
      .data(this.valuess)
      .enter()
      .append("td")
      .text((t) => {
        return t;
      });
  }

  tabulate() {
    this.formatValues();
    this.createKopfzeile();
    this.createBody();
  }
}

// Tabelle mit einer Kopfspalte und einer Kopfzeile (mehrere Bodyzeilen)
class Tabelle2 {
  constructor(data, id) {
    this.id = id;
    this.data = data;
    this.table = d3.select(id);

    this.valuesP = Object.values(data.Parameter); // {Widerstand: '', Spannung: ''} Array(4)
    this.valuesB = Object.values(data.Berechnung); // {Stromstärek: {...}, Leitwert: {...}} Array(4)

    this.space = [" "];

    this.kopfspalte = Object.keys(data.Parameter); // ['R1','R2','R3','R4']

    this.keyszP = Object.keys(this.valuesP[0]); // ['Widerstand','Spannung']
    this.keyszB = Object.keys(this.valuesB[0]);
    this.keyszs = this.space.concat(this.keyszP).concat(this.keyszB); // [' ','Widerstand','Spannung','Stromstärke','Leitwert']

    this.thead = this.table.append("thead");
    this.tbody = this.table.append("tbody");
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
    let tmpB = [];
    let colP = [];
    let colB = [];
    let colBa = [];
    let col = [];
    this.rows = [];

    for (let i = 0; i < this.kopfspalte.length; i++) {
      col = Object.values(this.valuesP[i]);

      colB = tmpB.concat(Object.values(this.valuesB[i]));

      colB.map((a, i) => {
        tmpB = colBa.concat(d3.format(".3E")(a.value) + " " + a.unit);
        colBa = tmpB;
      });

      col.push(tmpB);
      col.unshift(this.kopfspalte[i]);
      col = col.flat();

      this.rows.push(col);

      tmpB = [];
      colP = [];
      colB = [];
      colBa = [];
    }

    this.rows.map((row) => {
      this.tbody
        .append("tr")
        .selectAll("td")
        .data(row)
        .enter()
        .append("td")
        .text((t) => {
          return t;
        });
    });
  }

  tabulate() {
    this.createKopfzeile();
    this.createBody();
  }
}

export { Tabelle, Tabelle2 };
