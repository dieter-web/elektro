import { vComponents } from "./components.mjs";

/** SECTION vBetriebsmittel */
class vBetriebsmittel extends vComponents
{
  constructor ( data, point )
  {
    super( data, point );

    // Raster 1.25 mm
    this.Form1 = "M 0 0 l 75 0 l 0 75 l -75 0 l 0 -75";
    this.Form2 = "M 0 0 l 75 0 l 0 50 l -75 0 l 0 -50";
    this.Form3 = ""; // Circle
  }
}

/** SECTION  vBaugruppen*/
class vBaugruppen extends vBetriebsmittel{}

/** SECTION  vZweipole*/
class vZweipole extends vBaugruppen{}

/** SECTION  vPassiveZweipole*/
class vPassiveZweipole extends vZweipole{}

/** !SECTION  vPassiveZweipole*/
/** !SECTION  vZweipole */
/** !SECTION  vBaugruppen */

/** SECTION  vElektrischeMaschinen*/
class vElektrischeMaschinen extends vBetriebsmittel{}

/** SECTION Starr */
class vStarr extends vElektrischeMaschinen {}

/** SECTION  Ruhende Elektrische Maschinen*/
class vRuhendeElektrischeMaschinen extends vStarr {}

/** SECTION Transformatoren */
class vTransformatoren extends vRuhendeElektrischeMaschinen {}

/** SECTION Transformator  */
class vTransformator extends vTransformatoren {
  constructor(data, point) {
    super(data,point);
     this.shape = `M 0 60 
     L 0 46 
     C 0 41.58 3.58 38 8 38 
     C 12.42 38 16 41.58 16 46 
     C 16 41.58 19.58 38 24 38 
     C 28.42 38 32 41.58 32 46 
     C 32 41.58 35.58 38 40 38 
     C 44.42 38 48 41.58 48 46 
     C 48 41.58 51.58 38 56 38 
     C 60.42 38 64 41.58 64 46 
     L 64 60 M 0 32 
     L 64 32 M 0 30 
     L 64 30 M 0 28 
     L 64 28 M 0 0 
     L 0 14 
     C 0 18.42 3.58 22 8 22 
     C 12.42 22 16 18.42 16 14 
     C 16 18.42 19.58 22 24 22 
     C 28.42 22 32 18.42 32 14 
     C 32 18.42 35.58 22 40 22 
     C 44.42 22 48 18.42 48 14 
     C 48 18.42 51.58 22 56 22 
     C 60.42 22 64 18.42 64 14 
     L 64 0`;

        // <rect x="0" y="0" width="64" height="60" fill="none" stroke="none" pointer-events="all"/><path d="" fill="none" stroke="rgb(240, 240, 240)" stroke-linejoin="round" stroke-miterlimit="10" pointer-events="all"/></g></svg>
  }
   fshape ()
  {
    this.Symbol.select( "#shape" )
      .append( "path" )
      .attr( "d", this.shape )
      .attr( "fill", "none" )
      .attr( "stroke", "rgb(240,240,240" )
      .attr( "stroke-linejoin", "round" )
      .attr( "stroke-miterlimit", "10" )
      .attr( "pointer-events", "all" )
      .attr( "transform", () =>{return `translate(${ this.point.x },${ this.point.y })`;} );
  }
}
/** !SECTION vTransformator  */
/** !SECTION vTransformatoren  */
/** !SECTION vRuhendeElektrischeMaschinen  */
/** !SECTION vstart  */
/** !SECTION  vElektrischeMaschinen*/
/** SECTION  vInduktivitaet*/
class vInduktivitaet extends vBetriebsmittel{}

/** SECTION vSpule */
class vSpule extends vInduktivitaet
{
  constructor ( data, point )
  {
    super( data, point );
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

  fshape ()
  {
    this.Symbol.select( "#shape" )
      .append( "path" )
      .attr( "d", this.shape )
      .attr( "fill", "none" )
      .attr( "stroke", "rgb(240,240,240" )
      .attr( "stroke-linejoin", "round" )
      .attr( "stroke-miterlimit", "10" )
      .attr( "pointer-events", "all" )
      .attr( "transform", () =>
      {
        return `translate(${ this.point.x },${ this.point.y })`;
      } );
  }
}

class vSpulenkoerper extends vSpule
{
  constructor ( data, point )
  {
    super( data, point );
    this.shape = `M 0 6 
    l 100 0 
    l 0 -4
    l -100 0
    l 0 4
    `;
  }
  fshape ()
  {
    this.Symbol.select( "#shape" )
      .append( "path" )
      .attr( "d", this.shape )
      .attr( "stroke", "rgb(240,240,240" )
      .attr( "stroke-linejoin", "round" )
      .attr( "stroke-miterlimit", "10" )
      .attr( "pointer-events", "all" )
      .attr( "transform", () =>
      {
        return `translate(${ this.point.x },${ this.point.y })`;
      } );
  }
}

/** SECTION  vVariometer*/
class vVariometer extends vSpule{}

/** !SECTION  vVariometer*/
/** SECTION  vSpuleOhneKern*/
class vSpuleOhneKern extends vSpule{}

/** SECTION  vZylinderspule*/
class vZylinderspule extends vSpuleOhneKern{}
/** !SECTION  vZylinderspule*/

/** SECTION  vRingspule*/
class vRingspule extends vSpuleOhneKern{}
/** !SECTION  vRingspule*/

/** SECTION  vMehrlagigeSpule*/
class vMehrlagigeSpule extends vSpuleOhneKern{}

/** !SECTION  vMehrlagigeSpule*/
/** SECTION  vEinlagigeSpule*/
class vEinlagigeSpule extends vSpuleOhneKern{}

/** !SECTION  vEinlagigeSpule*/
/** SECTION  vAbgeschirmteSpule*/
class vAbgeschirmteSpule extends vSpuleOhneKern{}

/** !SECTION  vAbgeschirmteSpule*/
/** !SECTION  vSpuleOhneKern*/

/** SECTION  vSpuleMitKern*/
class vSpuleMitKern extends vSpule{}

/** SECTION  vMagnetspule*/
class vMagnetspule extends vSpuleMitKern{}

/** !SECTION  vMagnetspule*/
/** !SECTION  vSpuleMItKern*/
/** !SECTION  vSpule*/
/** !SECTION  vInduktivitaet*/

/** SECTION vKlemmvorrichtung */
class vKlemmvorrichtung extends vBetriebsmittel{}

/** SECTION  vKlemme*/
class vKlemme extends vKlemmvorrichtung{}

/** SECTION  vKlemmleiste*/
class vKlemmleiste extends vKlemme{}

/** !SECTION  vKlemmleiste*/
/** !SECTION  vKlemme*/
/** !SECTION  vKlemmvorrichtung*/

/** SECTION  vMessgeraete*/
class vMessgeraete extends vBetriebsmittel{}

/** SECTION  vZeitmesser*/
class vZeitmesser extends vMessgeraete{}

/** !SECTION  vZeitmesser*/
/** SECTION  vStrommesser*/
class vStrommesser extends vMessgeraete
{
  constructor ( data, point )
  {
    super( data, point );
  }
  fshape ()
  {
    this.Symbol.select( "#shape" )
      .append( "ellipse" )
      .attr( "cx", 45 )
      .attr( "cy", 45 )
      .attr( "rx", 45 )
      .attr( "ry", 45 )
      .attr( "fill", "none" )
      .attr( "stroke", "rgb(240,240,240" )
      .attr( "pointer-events", "all" );
    this.Symbol.select( "#shape" )
      .append( "text" )
      .attr( "x", 45 )
      .attr( "y", 60 )
      .attr( "fill", "white" )
      .attr( "stroke", "rgb(240,240,240" )
      .attr( "font-family", "Helvetica" )
      .attr( "font-size", "50px" )
      .attr( "text-anchor", "middle" )
      .text( "A" );
    this.Symbol.select( "#shape" )
      .attr( "transform", () =>
      {
        return `translate(${ this.point.x },${ this.point.y })`;
      } );
  }
}
/** !SECTION  vStrommesser*/
/** SECTION  vSpannungsmesser*/
class vSpannungsmesser extends vMessgeraete{
  constructor(data,point) {
    super(data,point);
  }
   fshape ()
  {
    this.Symbol.select( "#shape" )
      .append( "ellipse" )
      .attr( "cx", 45 )
      .attr( "cy", 45 )
      .attr( "rx", 45 )
      .attr( "ry", 45 )
      .attr( "fill", "none" )
      .attr( "stroke", "rgb(240,240,240" )
      .attr( "pointer-events", "all" );
    this.Symbol.select( "#shape" )
      .append( "text" )
      .attr( "x", 45 )
      .attr( "y", 60 )
      .attr( "fill", "white" )
      .attr( "stroke", "rgb(240,240,240" )
      .attr( "font-family", "Helvetica" )
      .attr( "font-size", "50px" )
      .attr( "text-anchor", "middle" )
      .text( "V" );
    this.Symbol.select( "#shape" )
      .attr( "transform", () =>
      {
        return `translate(${ this.point.x },${ this.point.y })`;
      } );
  }

}

/** !SECTION  vSpannungsmesser*/
/** SECTION  vPhasenwinkelmesser*/
class vPhasenwinkelmesser extends vMessgeraete{}

/** !SECTION  vPhasenwinkelmesser*/
/** SECTION  vMagnetischeGroessenmesser*/
class vMagnetischeGroessenmesser extends vMessgeraete{}

/** !SECTION  vMagnetischeGroessenmesser*/
/** SECTION  vLeistungsmesser*/
class vLeistungsmesser extends vMessgeraete{}

/** !SECTION  vLeistungsmesser*/
/** SECTION  vImpedanzmesser*/
class vImpedanzmesser extends vMessgeraete{}

/** !SECTION  vImpedanzmesser*/
/** SECTION  vFrequenzmesser*/
class vFrequenzmesser extends vMessgeraete{}

/** !SECTION  vFrequenzmesser*/
/** SECTION  vEnergiemesser*/
class vEnergiemesser extends vMessgeraete{}

/** !SECTION  vEnergiemesser*/
/** !SECTION  vMessgeraete*/

/** SECTION  vSteckvorrichtungen*/
class vSteckvorrichtungen extends vBetriebsmittel{}

/** !SECTION  vSteckvorrichtungen*/
/** SECTION  vUebertragungswege*/
class vUebertragungswege extends vBetriebsmittel{}

/** SECTION  vAntenne*/
class vAntenne extends vUebertragungswege{}

/** !SECTION  vAntenne*/
/** SECTION  vDraehte*/
class vDraehte extends vUebertragungswege{}

/** !SECTION  vDraehte*/
/** SECTION  vDraht*/
class vDraht extends vDraehte
{
  constructor ( data, point )
  {
    super( data, point );
    this.shape = `M 0 0 L 100 0`;
  }

  fshape ()
  {
    this.Symbol.select( "#shape" )
      .append( "path" )
      .attr( "d", this.shape )
      .attr( "stroke", "rgb(240,240,240" )
      .attr( "transform", () =>
      {
        return `translate(${ this.point.x },${ this.point.y })`;
      } );
  }
}
/** !SECTION  vDraht*/
/** SECTION  vKabel*/
class vKabel extends vUebertragungswege{
  constructor(data,point) {
    super(data,point);
    this.shape = `M 0 0 L 200 0`;
  }
   fshape ()
  {
    this.Symbol.select( "#shape" )
      .append( "path" )
      .attr( "d", this.shape )
      .attr( "stroke", "rgb(240,240,240" )
      .attr( "stroke-width", "6" )
      .attr( "transform", () =>
      { return `translate(${ this.point.x },${ this.point.y })`; } );
  }

}

/** SECTION  vStarkstromkabel*/
class vStarkstromkabel extends vKabel{}

/** !SECTION  vStarkstromkabel*/
/** SECTION  vHochfrequenzkabel*/
class vHochfrequenzkabel extends vKabel{}

/** !SECTION  vHochfrequenzkabel*/
/** SECTION  vFernmeldekabel*/
class vFernmeldekabel extends vKabel{}

/** !SECTION  vFernmeldekabel*/
/** !SECTION  vKabel */

/** SECTION  vLeitung*/
class vLeitung extends vUebertragungswege
{
  constructor ( data, point )
  {
    super( data, point );

    this.shape = `M 0 0 L 200 0 `;
  }

  fshape ()
  {
    this.Symbol.select( "#shape" )
      .append( "path" )
      .attr( "d", this.shape )
      .attr( "stroke", "rgb(240,240,240" )
      .attr( "stroke-width", "3" )
      .attr( "transform", () =>
      { return `translate(${ this.point.x },${ this.point.y })`; } );
  }
}

/** SECTION  vBlankeleitung*/
class vBlankeleitung extends vLeitung{}

/** SECTION  vErder*/
class vErder extends vBlankeleitung
{
  constructor ( data, point )
  {
    super( data, point );

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

  fshape ()
  {
    this.Symbol.select( "#shape" )
      .append( "path" )
      .attr( "d", this.shape )
      .attr( "stroke", "rgb(240,240,240" )
      .attr( "transform", () =>
      {
        return `translate(${ this.point.x },${ this.point.y })`;
      } );
  }
}
/** !SECTION  vErder*/
/** !SECTION  vBlankeleitung*/

/** SECTION  vIsolierteleitung*/
class vIsolierteleitung extends vLeitung{}

/** !SECTION  vIsolierteleitung*/
/** !SECTION  vIsolierteleitung*/
/** !SECTION  vLeitung*/

/** SECTION Verschiedenes */
class vVerschiedenes extends vBetriebsmittel{}

/** SECTION Verbraucher */

class vVerbraucher extends vVerschiedenes
{
  constructor ( data, point )
  {
    super( data, point );
  }
  fshape ()
  {
    this.Symbol.select( "#shape" )
      .append( "path" )
      .attr( "d", this.Form1 )
      .attr( "fill", "none" )
      .attr( "stroke", "rgb(240,240,240" )
      .attr( "stroke-linejoin", "round" )
      .attr( "stroke-miterlimit", "10" )
      .attr( "pointer-events", "all" )
      .attr( "transform", () =>
      {
        return `translate(${ this.point.x },${ this.point.y })`;
      } );
  }
}
/** !SECTION Verbraucher */

/** SECTION Glühlampe */
class vGluehlampe extends vVerschiedenes
{
  constructor ( data, point )
  {
    super( data, point );
  }
  fshape ()
  {
    this.Symbol.select( "#shape" )
      .append( "rect" )
      .attr( "x", 0 )
      .attr( "y", 0 )
      .attr( "width", 60 )
      .attr( "height", 50 )
      .attr( "fill", "none" )
      .attr( "stroke", "none" )
      .attr( "pointer-events", "all" );

    this.Symbol.select( "#shape" )
      .append( "ellipse" )
      .attr( "cx", 30 )
      .attr( "cy", 25 )
      .attr( "rx", 25 )
      .attr( "ry", 25 )
      .attr( "fill", "none" )
      .attr( "stroke", "rgb(240, 240, 240" )
      .attr( "pointer-events", "all" );

    this.Symbol.select( "#shape" )
      .append( "path" )
      .attr( "d", "M 12.2 7.2 L 47.8 42.8 M 47.8 7.2 L 12.2 42.8 M 0 25 L 5 25 M 55 25 L 60 25" )
      .attr( "fill", "none" )
      .attr( "stroke", "rgb(240, 240, 240" )
      .attr( "stroke-miterlimit", 10 )
      .attr( "pointer-events", "all" );

    this.Symbol.select( "#shape" ).attr( "transform", () =>
    {
      return `translate(${ this.point.x }, ${ this.point.y })`;
    } );
  }
}
/** !SECTION Glühlampe */

/** !SECTION Verschiedenes */

/** SECTION  vWiderstaende*/
class vWiderstaende extends vBetriebsmittel
{
  constructor ( data, point )
  {
    super( data, point );
    this.counter = 0;
    this.firstNode = undefined;
    this.selectedNode = undefined;
  }

  nextID ()
  {
    return ++this.counter;
  }

  addNode ( point )
  {
    let ID = nextID();
    let group = this.Symbol;
  }
}

/** SECTION  vWiderstand*/
class vWiderstand extends vWiderstaende
{
  constructor ( data, point )
  {
    super( data, point );
  }
  fshape ()
  {
    this.Symbol.select( "#shape" )
      .append( "rect" )
      .attr( "x", 0 )
      .attr( "y", 0 )
      .attr( "width", 100 )
      .attr( "height", 20 )
      .attr( "fill", "none" )
      .attr( "stroke", "none" )
      .attr( "pointer-events", "all" )
      .attr( "transform", () =>
      {
        return `translate(${ this.point.x },${ this.point.y })`;
      } );
    this.Symbol.select( "#shape" )
      .append( "rect" )
      .attr( "x", 18 )
      .attr( "y", 0 )
      .attr( "width", 64 )
      .attr( "height", 20 )
      .attr( "fill", "none" )
      .attr( "stroke", "rgb(42,42,42)" )
      .attr( "pointer-events", "all" )
      .attr( "transform", () =>
      {
        return `translate(${ this.point.x },${ this.point.y })`;
      } );
    this.Symbol.select( "#shape" )
      .append( "path" )
      .attr( "d", "M 0 10 L 18 10 M 82 10 L 100 10" )
      .attr( "fill", "none" )
      .attr( "stroke", "rgb(42, 42, 42)" )
      .attr( "stroke-miterlimit", 10 )
      .attr( "pointer-events", "all" )
      .attr( "transform", () =>
      {
        return `translate(${ this.point.x },${ this.point.y })`;
      } );
  }
}
/** !SECTION  vWiderstand*/
/** !SECTION  vWiderstaende*/
/** !SECTION vBetriebsmittel */

export
{
  vVerschiedenes,
  vVerbraucher,
  vGluehlampe,
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
  vTransformator,
};
