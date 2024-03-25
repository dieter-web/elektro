class Tabelle {
  constructor(data, id) {
    this.id = id
    this.data = data
    this.table = d3.select(id)
    this.thead = this.table.append("thead")
    this.tbody = this.table.append("tbody")
  }

  createKopfzeile() {
    this.thead
      .append("tr")
      .selectAll("td")
      .data(this.dth)
      .enter()
      .append("td")
      .text((d) => {
        return d
      })
  }

  createBody() {
    this.tbody
      .append("tr")
      .selectAll("td")
      .data(this.dtd)
      .enter()
      .append("td")
      .text((d) => {
        return d
      })
  }

  tabulate() {
    this.createKopfzeile()
    this.createBody()
  }
}
// Einzeilige Tabelle (Mit Kopfzeile und einer Bodyzeile) Bestehend aus Parameter und Berechnung
class Tabelle1 extends Tabelle {
  constructor(data, id) {
    super(data, id)

    this.dthK = Object.keys(this.data.Kennzeichnung)
    this.dthE = Object.keys(this.data.Eigenschaften)
    this.dthP = Object.keys(this.data.Parameter)
    this.dthB = Object.keys(this.data.Berechnung)

    this.dth = this.dthK.concat(this.dthE, this.dthP, this.dthB)

    this.dtdK = Object.values(this.data.Kennzeichnung)
    this.dtdE = Object.values(this.data.Eigenschaften)
    this.dtdP = Object.values(this.data.Parameter)

    this.dtdBA = []
    this.dtdB = Object.values(this.data.Berechnung)
    this.dtdB.map((b) => {
      this.dtdBA.push(`${d3.format(".3E")(b.value)} ${b.unit}`)
    })

    this.dtd = this.dtdK.concat(this.dtdE, this.dtdP, this.dtdBA)
  }
}

// Tabelle mit einer Kopfspalte und einer Kopfzeile (mehrere g l e i c h e Betriebsmittel)
class Tabelle2 {
  constructor(data, id) {
    this.data = data
    this.id = id
    this.table = d3.select(id)
    this.thead = this.table.append("thead")
    this.tbody = this.table.append("tbody")
    this.datalength = data.length - 1
    this.dtr = []

    this.dthK = Object.keys(this.data[0].Kennzeichnung)
    this.dthP = Object.keys(this.data[0].Parameter)
    this.dthE = Object.keys(this.data[0].Eigenschaften)
    this.dthB = Object.keys(this.data[0].Berechnung)

    this.dth = this.dthK.concat(this.dthP, this.dthE, this.dthB)

    for (let i = 0; i <= this.datalength; i++) {
      this.dtdK = Object.values(this.data[i].Kennzeichnung)
      this.dtdP = Object.values(this.data[i].Parameter)
      this.dtdW = Object.values(this.data[i].Eigenschaften)
      // this.dtd = this.dtdK.concat(this.dtdP);

      this.dtd = this.dtdK.concat(this.dtdP, this.dtdW)

      this.dtdB = Object.values(this.data[i].Berechnung)

      this.dtdBA = []
      this.dtdB.map((b) => {
        this.dtdBA.push(`${d3.format(".3E")(b.value)} ${b.unit}`)
      })
      this.dtd = this.dtd.concat(this.dtdBA)

      this.dtr.push(this.dtd)
    }
  }

  createKopfzeile() {
    this.thead
      .append("tr")
      .selectAll("td")
      .data(this.dth)
      .enter()
      .append("td")
      .text((d) => {
        return d
      })
  }

  createBody() {
    for (let i = 0; i <= this.datalength; i++) {
      this.tbody
        .append("tr")
        .selectAll("td")
        .data(this.dtr[i])
        .enter()
        .append("td")
        .text((d) => {
          return d
        })
    }
  }

  tabulate() {
    this.createKopfzeile()
    this.createBody()
  }
}

// Tabelle ohne Parameter und Berechnung  nur mit Eigenschaften
class Tabelle3 extends Tabelle {
  constructor(data, id) {
    super(data, id)

    this.dthK = Object.keys(this.data.Kennzeichnung)
    this.dthE = Object.keys(this.data.Eigenschaften)
    this.dthB = Object.keys(this.data.Berechnung)

    this.dth = this.dthK.concat(this.dthE, this.dthB)

    this.dtdK = Object.values(this.data.Kennzeichnung)
    this.dtdE = Object.values(this.data.Eigenschaften)
    this.dtdB = Object.values(this.data.Berechnung)

    this.dtd = this.dtdK.concat(this.dtdE, this.dtdB)
  }
}

export { Tabelle, Tabelle1, Tabelle2, Tabelle3 }
