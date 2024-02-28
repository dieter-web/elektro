import { vComponents } from "./components.mjs";

class vBetriebsmittel extends vComponents {
  constructor(data, point) {
    super(data, point);

    // Raster 1.25 mm
    this.Form1 = "M 0 0 l 75 0 l 0 75 l -75 0 l 0 -75";
    this.Form2 = "M 0 0 l 75 0 l 0 50 l -75 0 l 0 -50";
    this.Form3 = ""; // Circle
  }
}
class vBaugruppen extends vBetriebsmittel {
  constructor(data, point) {
    super(data, point);
  }
}

class vZweipole extends vBaugruppen {
  constructor(data, point) {
    super(data, point);
  }
}

class vPassiveZweipole extends vZweipole {
  constructor(data, point) {
    super(data, point);
  }
}

class vElektrischeMaschinen extends vBetriebsmittel {
  constructor(data, point) {
    super(data, point);
  }
}

class vInduktivitaet extends vBetriebsmittel {
  constructor(data, point) {
    super(data, point);
  }
}
class vSpule extends vInduktivitaet {
  constructor(data, point) {
    super(data, point);
    this.shape = `M 0 8
        L 18 8 
        C 18 3.58 21.58 0 26 0 
        C 30.42 0 34 3.58 34 8 
        C 34 3.58 37.58 0 42 0 
        C 46.42 0 50 3.58 50 8 
        C 50 3.58 53.58 0 58 0 
        C 62.42 0 66 3.58 66 8 
        C 66 3.58 69.58 0 74 0 
        C 78.42 0 82 3.58 82 8 
        L 100 8`;
  }

  fshape() {
    this.Symbol.select("#shape")
      .append("path")
      .attr("d", this.shape)
      .attr("fill", "none")
      .attr("stroke", "rgb(240,240,240")
      .attr("stroke-linejoin", "round")
      .attr("stroke-miterlimit", "10")
      .attr("pointer-events", "all")
      .attr("transform", () => {
        let x = this.point.x;
        let y = this.point.y;
        return `translate(${x},${y})`;
      });
  }
}

class vVariometer extends vSpule {
  constructor(data) {
    super(data);
  }
}
class vSpuleOhneKern extends vSpule {
  constructor(data, point) {
    super(data, point);
  }
}

class vZylinderspule extends vSpuleOhneKern {
  constructor(data, point) {
    super(data, point);
  }
}

class vRingspule extends vSpuleOhneKern {
  constructor(data, point) {
    super(data, point);
  }
}

class vMehrlagigeSpule extends vSpuleOhneKern {
  constructor(data, point) {
    super(data, point);
  }
}

class vEinlagigeSpule extends vSpuleOhneKern {
  constructor(data, point) {
    super(data, point);
  }
}

class vAbgeschirmteSpule extends vSpuleOhneKern {
  constructor(data, point) {
    super(data, point);
  }
}
class vSpuleMitKern extends vSpule {
  constructor(data, point) {
    super(data, point);
  }
}

class vMagnetspule extends vSpuleMitKern {
  constructor(data, point) {
    super(data, point);
  }
}

class vKlemmvorrichtung extends vBetriebsmittel {
  constructor(data) {
    super(data);
  }
}

class vKlemme extends vKlemmvorrichtung {
  constructor(data) {
    super(data);
  }
}

class vKlemmleiste extends vKlemme {
  constructor(data) {
    super(data);
  }
}
class vMessgeraete extends vBetriebsmittel {
  constructor(data, point) {
    super(data, point);
  }
}

class vZeitmesser extends vMessgeraete {
  constructor(data, point) {
    super(data, point);
  }
}

class vStrommesser extends vMessgeraete {
  constructor(data, point) {
    super(data, point);
  }
}

class vSpannungsmesser extends vMessgeraete {
  constructor(data, point) {
    super(data, point);
  }
}

class vPhasenwinkelmesser extends vMessgeraete {
  constructor(data, point) {
    super(data, point);
  }
}

class vMagnetischeGroessenmesser extends vMessgeraete {
  constructor(data, point) {
    super(data, point);
  }
}

class vLeistungsmesser extends vMessgeraete {
  constructor(data, point) {
    super(data, point);
  }
}

class vImpedanzmesser extends vMessgeraete {
  constructor(data, point) {
    super(data, point);
  }
}

class vFrequenzmesser extends vMessgeraete {
  constructor(data, point) {
    super(data, point);
  }
}

class vEnergiemesser extends vMessgeraete {
  constructor(data, point) {
    super(data, point);
  }
}

class vSteckvorrichtungen extends vBetriebsmittel {
  constructor(data) {
    super(data);
  }
}

class vUebertragungswege extends vBetriebsmittel {
  constructor(data, point) {
    super(data, point);
  }
}

class vAntenne extends vUebertragungswege {
  constructor(data, point) {
    super(data, point);
  }
}

class vDraehte extends vUebertragungswege {
  constructor(data, point) {
    super(data, point);
  }
}

class vDraht extends vDraehte {
  constructor(data, point) {
    super(data, point);
  }
}

class vKabel extends vUebertragungswege {
  constructor(data, point) {
    super(data, point);
  }
}

class vStarkstromkabel extends vKabel {
  constructor(data, point) {
    super(data, point);
  }
}

class vHochfrequenzkabel extends vKabel {
  constructor(data, point) {
    super(data, point);
  }
}

class vFernmeldekabel extends vKabel {
  constructor(data, point) {
    super(data, point);
  }
}

class vLeitung extends vUebertragungswege {
  constructor(data, point) {
    super(data, point);

    this.shape = `M 0 0 L 100 0 `;
  }

  fshape() {
    this.Symbol.select("#shape")
      .append("path")
      .attr("d", this.shape)
      .attr("stroke", "rgb(240,240,240")
      .attr("transform", () => {
        return `translate(${this.point.x},${this.point.y})`;
      });
  }
}
class vBlankeleitung extends vLeitung {
  constructor(data, point) {
    super(data, point);
  }
}

class vErder extends vBlankeleitung {
  constructor(data, point) {
    super(data, point);

    this.shape = `M 25 5 
    L 50 5 
    M 27 7.5 
    L 48 7.5 
    M 29 10 
    L 46 10 
    M 33.25 15 
    L 41.75 15 
    M 35.25 17.5 
    L 39.75 17.5 
    M 37.5 0 
    L 37.5 5 
    M 31.25 12.5 
    L 43.75 12.5 
    M 37.25 20 
    L 37.75 20
    M 0 20 
    L 80 20
    `;
  }

  fshape() {
    this.Symbol.select("#shape")
      .append("path")
      .attr("d", this.shape)
      .attr("stroke", "rgb(240,240,240")
      .attr("transform", () => {
        return `translate(${this.point.x},${this.point.y})`;
      });
  }
}

class vIsolierteleitung extends vLeitung {
  constructor(data) {
    super(data);
  }
}

class vWiderstaende extends vBetriebsmittel {
  constructor(data, point) {
    super(data, point);
    this.counter = 0;
    this.firstNode = undefined;
    this.selectedNode = undefined;
  }

  nextID() {
    return ++this.counter;
  }

  addNode(point) {
    let ID = nextID();
    let group = this.Symbol;
  }
}

class vWiderstand extends vWiderstaende {
  constructor(data, point) {
    super(data, point);
  }
  fshape() {
    this.Symbol.select("#shape")
      .append("rect")
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", 100)
      .attr("height", 20)
      .attr("fill", "none")
      .attr("stroke", "none")
      .attr("pointer-events", "all")
      .attr("transform", () => {
        return `translate(${this.point.x},${this.point.y})`;
      });
    this.Symbol.select("#shape")
      .append("rect")
      .attr("x", 18)
      .attr("y", 0)
      .attr("width", 64)
      .attr("height", 20)
      .attr("fill", "none")
      .attr("stroke", "rgb(42,42,42)")
      .attr("pointer-events", "all")
      .attr("transform", () => {
        return `translate(${this.point.x},${this.point.y})`;
      });
    this.Symbol.select("#shape")
      .append("path")
      .attr("d", "M 0 10 L 18 10 M 82 10 L 100 10")
      .attr("fill", "none")
      .attr("stroke", "rgb(42, 42, 42)")
      .attr("stroke-miterlimit", 10)
      .attr("pointer-events", "all")
      .attr("transform", () => {
        return `translate(${this.point.x},${this.point.y})`;
      });
  }
}

export { vWiderstand };
export { vBetriebsmittel };
export { vBaugruppen };
export { vZweipole };
export { vPassiveZweipole };
export { vElektrischeMaschinen };
export { vInduktivitaet };
export { vSpule };
export { vVariometer };
export { vSpuleOhneKern };
export { vZylinderspule };
export { vRingspule };
export { vMehrlagigeSpule };
export { vEinlagigeSpule };
export { vAbgeschirmteSpule };
export { vSpuleMitKern };
export { vMagnetspule };
export { vKlemmvorrichtung };
export { vKlemme };
export { vKlemmleiste };
export { vMessgeraete };
export { vZeitmesser };
export { vStrommesser };
export { vSpannungsmesser };
export { vPhasenwinkelmesser };
export { vMagnetischeGroessenmesser };
export { vLeistungsmesser };
export { vImpedanzmesser };
export { vFrequenzmesser };
export { vEnergiemesser };
export { vSteckvorrichtungen };
export { vUebertragungswege };
export { vAntenne };
export { vDraehte };
export { vDraht };
export { vKabel };
export { vStarkstromkabel };
export { vHochfrequenzkabel };
export { vFernmeldekabel };
export { vLeitung };
export { vBlankeleitung };
export { vErder };
export { vIsolierteleitung };
export { vWiderstaende };
