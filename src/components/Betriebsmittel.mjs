import { vComponents } from "./components.mjs";

/** SECTION vBetriebsmittel */
class vBetriebsmittel extends vComponents {
  constructor(data, point) {
    super(data, point);

    // Raster 1.25 mm
    this.Form1 = "M 0 0 l 75 0 l 0 75 l -75 0 l 0 -75";
    this.Form2 = "M 0 0 l 75 0 l 0 50 l -75 0 l 0 -50";
    this.Form3 = ""; // Circle
  }
}

/** SECTION  vBaugruppen*/
class vBaugruppen extends vBetriebsmittel {
  constructor(data, point) {
    super(data, point);
  }
}

/** SECTION  vZweipole*/
class vZweipole extends vBaugruppen {
  constructor(data, point) {
    super(data, point);
  }
}

/** SECTION  vPassiveZweipole*/
class vPassiveZweipole extends vZweipole {
  constructor(data, point) {
    super(data, point);
  }
}
/** !SECTION  vPassiveZweipole*/
/** !SECTION  vZweipole */
/** !SECTION  vBaugruppen */

/** SECTION  vElektrischeMaschinen*/
class vElektrischeMaschinen extends vBetriebsmittel {
  constructor(data, point) {
    super(data, point);
  }
}
/** !SECTION  vElektrischeMaschinen*/
/** SECTION  vInduktivitaet*/
class vInduktivitaet extends vBetriebsmittel {
  constructor(data, point) {
    super(data, point);
  }
}

/** SECTION vSpule */
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

class vSpulenkoerper extends vSpule {
  constructor(data, point) {
    super(data, point);
    this.shape = `M 0 6 
    l 100 0 
    l 0 -4
    l -100 0
    l 0 4
    `;
  }
  fshape() {
    this.Symbol.select("#shape")
      .append("path")
      .attr("d", this.shape)
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

/** SECTION  vVariometer*/
class vVariometer extends vSpule {
  constructor(data) {
    super(data);
  }
}
/** !SECTION  vVariometer*/
/** SECTION  vSpuleOhneKern*/
class vSpuleOhneKern extends vSpule {
  constructor(data, point) {
    super(data, point);
  }
}

/** SECTION  vZylinderspule*/
class vZylinderspule extends vSpuleOhneKern {
  constructor(data, point) {
    super(data, point);
  }
}
/** !SECTION  vZylinderspule*/

/** SECTION  vRingspule*/
class vRingspule extends vSpuleOhneKern {
  constructor(data, point) {
    super(data, point);
  }
}
/** !SECTION  vRingspule*/

/** SECTION  vMehrlagigeSpule*/
class vMehrlagigeSpule extends vSpuleOhneKern {
  constructor(data, point) {
    super(data, point);
  }
}
/** !SECTION  vMehrlagigeSpule*/
/** SECTION  vEinlagigeSpule*/
class vEinlagigeSpule extends vSpuleOhneKern {
  constructor(data, point) {
    super(data, point);
  }
}
/** !SECTION  vEinlagigeSpule*/
/** SECTION  vAbgeschirmteSpule*/
class vAbgeschirmteSpule extends vSpuleOhneKern {
  constructor(data, point) {
    super(data, point);
  }
}
/** !SECTION  vAbgeschirmteSpule*/
/** !SECTION  vSpuleOhneKern*/

/** SECTION  vSpuleMitKern*/
class vSpuleMitKern extends vSpule {
  constructor(data, point) {
    super(data, point);
  }
}
/** SECTION  vMagnetspule*/
class vMagnetspule extends vSpuleMitKern {
  constructor(data, point) {
    super(data, point);
  }
}
/** !SECTION  vMagnetspule*/
/** !SECTION  vSpuleMItKern*/
/** !SECTION  vSpule*/
/** !SECTION  vInduktivitaet*/

/** SECTION vKlemmvorrichtung */
class vKlemmvorrichtung extends vBetriebsmittel {
  constructor(data) {
    super(data);
  }
}
/** SECTION  vKlemme*/
class vKlemme extends vKlemmvorrichtung {
  constructor(data) {
    super(data);
  }
}
/** SECTION  vKlemmleiste*/
class vKlemmleiste extends vKlemme {
  constructor(data) {
    super(data);
  }
}
/** !SECTION  vKlemmleiste*/
/** !SECTION  vKlemme*/
/** !SECTION  vKlemmvorrichtung*/

/** SECTION  vMessgeraete*/
class vMessgeraete extends vBetriebsmittel {
  constructor(data, point) {
    super(data, point);
  }
}

/** SECTION  vZeitmesser*/
class vZeitmesser extends vMessgeraete {
  constructor(data, point) {
    super(data, point);
  }
}
/** !SECTION  vZeitmesser*/
/** SECTION  vStrommesser*/
class vStrommesser extends vMessgeraete {
  constructor(data, point) {
    super(data, point);
  }
}
/** !SECTION  vStrommesser*/
/** SECTION  vSpannungsmesser*/
class vSpannungsmesser extends vMessgeraete {
  constructor(data, point) {
    super(data, point);
  }
}
/** !SECTION  vSpannungsmesser*/
/** SECTION  vPhasenwinkelmesser*/
class vPhasenwinkelmesser extends vMessgeraete {
  constructor(data, point) {
    super(data, point);
  }
}
/** !SECTION  vPhasenwinkelmesser*/
/** SECTION  vMagnetischeGroessenmesser*/
class vMagnetischeGroessenmesser extends vMessgeraete {
  constructor(data, point) {
    super(data, point);
  }
}
/** !SECTION  vMagnetischeGroessenmesser*/
/** SECTION  vLeistungsmesser*/
class vLeistungsmesser extends vMessgeraete {
  constructor(data, point) {
    super(data, point);
  }
}
/** !SECTION  vLeistungsmesser*/
/** SECTION  vImpedanzmesser*/
class vImpedanzmesser extends vMessgeraete {
  constructor(data, point) {
    super(data, point);
  }
}
/** !SECTION  vImpedanzmesser*/
/** SECTION  vFrequenzmesser*/
class vFrequenzmesser extends vMessgeraete {
  constructor(data, point) {
    super(data, point);
  }
}
/** !SECTION  vFrequenzmesser*/
/** SECTION  vEnergiemesser*/
class vEnergiemesser extends vMessgeraete {
  constructor(data, point) {
    super(data, point);
  }
}
/** !SECTION  vEnergiemesser*/
/** !SECTION  vMessgeraete*/

/** SECTION  vSteckvorrichtungen*/
class vSteckvorrichtungen extends vBetriebsmittel {
  constructor(data) {
    super(data);
  }
}
/** !SECTION  vSteckvorrichtungen*/
/** SECTION  vUebertragungswege*/
class vUebertragungswege extends vBetriebsmittel {
  constructor(data, point) {
    super(data, point);
  }
}
/** SECTION  vAntenne*/
class vAntenne extends vUebertragungswege {
  constructor(data, point) {
    super(data, point);
  }
}
/** !SECTION  vAntenne*/
/** SECTION  vDraehte*/
class vDraehte extends vUebertragungswege {
  constructor(data, point) {
    super(data, point);
  }
}
/** !SECTION  vDraehte*/
/** SECTION  vDraht*/
class vDraht extends vDraehte {
  constructor(data, point) {
    super(data, point);
    this.shape = `M 0 0 L 100 0`;
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
/** !SECTION  vDraht*/
/** SECTION  vKabel*/
class vKabel extends vUebertragungswege {
  constructor(data, point) {
    super(data, point);
  }
}

/** SECTION  vStarkstromkabel*/
class vStarkstromkabel extends vKabel {
  constructor(data, point) {
    super(data, point);
  }
}
/** !SECTION  vStarkstromkabel*/
/** SECTION  vHochfrequenzkabel*/
class vHochfrequenzkabel extends vKabel {
  constructor(data, point) {
    super(data, point);
  }
}
/** !SECTION  vHochfrequenzkabel*/
/** SECTION  vFernmeldekabel*/
class vFernmeldekabel extends vKabel {
  constructor(data, point) {
    super(data, point);
  }
}
/** !SECTION  vFernmeldekabel*/
/** !SECTION  vKabel */

/** SECTION  vLeitung*/
class vLeitung extends vUebertragungswege {
  constructor(data, point) {
    super(data, point);

    this.shape = `M 0 0 L 200 0 `;
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

/** SECTION  vBlankeleitung*/
class vBlankeleitung extends vLeitung {
  constructor(data, point) {
    super(data, point);
  }
}

/** SECTION  vErder*/
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
/** !SECTION  vErder*/
/** !SECTION  vBlankeleitung*/

/** SECTION  vIsolierteleitung*/
class vIsolierteleitung extends vLeitung {
  constructor(data) {
    super(data);
  }
}
/** !SECTION  vIsolierteleitung*/
/** !SECTION  vIsolierteleitung*/
/** !SECTION  vLeitung*/

/** SECTION Verschiedenes */
class vVerschiedenes extends vBetriebsmittel {
  constructor(data, point) {
    super(data, point);
  }
}

/** SECTION Verbraucher */

class vVerbraucher extends vVerschiedenes {
  constructor(data, point) {
    super(data, point);
  }
  fshape() {
    this.Symbol.select("#shape")
      .append("path")
      .attr("d", this.Form1)
      .attr("fill", "none")
      .attr("stroke", "rgb(240,240,240")
      .attr("stroke-linejoin", "round")
      .attr("stroke-miterlimit", "10")
      .attr("pointer-events", "all")
      .attr("transform", () => {
        return `translate(${this.point.x},${this.point.y})`;
      });
  }
}
/** !SECTION Verbraucher */

/** !SECTION Verschiedenes */

/** SECTION  vWiderstaende*/
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

/** SECTION  vWiderstand*/
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
/** !SECTION  vWiderstand*/
/** !SECTION  vWiderstaende*/
/** !SECTION vBetriebsmittel */

export {
  vVerschiedenes,
  vVerbraucher,
  vWiderstand,
  vBetriebsmittel,
  vBaugruppen,
  vZweipole,
  vPassiveZweipole,
  vElektrischeMaschinen,
  vInduktivitaet,
  vSpule,
  vSpulenkoerper,
  vVariometer,
  vSpuleOhneKern,
  vZylinderspule,
  vRingspule,
  vMehrlagigeSpule,
  vEinlagigeSpule,
  vAbgeschirmteSpule,
  vSpuleMitKern,
  vMagnetspule,
  vKlemmvorrichtung,
  vKlemme,
  vKlemmleiste,
  vMessgeraete,
  vZeitmesser,
  vStrommesser,
  vSpannungsmesser,
  vPhasenwinkelmesser,
  vMagnetischeGroessenmesser,
  vLeistungsmesser,
  vImpedanzmesser,
  vFrequenzmesser,
  vEnergiemesser,
  vSteckvorrichtungen,
  vUebertragungswege,
  vAntenne,
  vDraehte,
  vDraht,
  vKabel,
  vStarkstromkabel,
  vHochfrequenzkabel,
  vFernmeldekabel,
  vLeitung,
  vBlankeleitung,
  vErder,
  vIsolierteleitung,
  vWiderstaende,
};
