require( "use-strict" );

/** TODO: Das Ergebnis stimmt mit der Vorlage nicht überein ? */
/**
 * @description
 * Zwischen zwei Metallplatten mit einer Fläche von je 0.8m x 1.25m befindet sich eine 1mm dicke,
 * gleich große Glasplatte.
 * Wie groß ist der Widerstand zwischen den Metallplatten, wenn für Glas roh = 10^12ohmcm beträgt?
 * @author Dieter Krause
 * @date 26/07/2023
 * @param {*} input
 */
function Uebung14 ( input )
{
  const path = require( "path" );
  const dbJson = require( path.resolve( "controllers/dbJson.js" ) );

  const { makeDirectory, readMaterialParameter } = require( path.resolve( "src/js/utility.js" ) );


  const { Elektro, Planemetrie } = require( path.resolve( "src/mathjs/Kernel.js" ) );

  const { Platte } = require( path.resolve( "src/components/Bauelemente.js" ) );

  const Platte1 = new Platte( {
    Material: input.Material,
    l: input.l,
    b: input.b,
    d: input.d
  } );

  const Platte2 = new Platte( {
    l: input.l,
    b: input.b
  } )

  const Platte3 = new Platte( {
    l: input.l,
    b: input.b
  } )

  const PK = new Planemetrie();
  const EK = new Elektro();

  const datadir = "src/json/example/Uebung14";

  makeDirectory( datadir ).then(
    function ()
    {
      Platte1.Kennzeichnung = {
        Art: "Glasplatte",
        Zählnummer: 1
      };
      Platte2.Kennzeichnung = {
        Art: "Metallplatte",
        Zählnummer: 1
      };
      Platte3.Kennzeichnung = {
        Art: "Metallplatte",
        Zählnummer: 2
      };

      Platte1.Parameter = {
        ρgl: readMaterialParameter( Platte1.Eigenschaften.Material, "ρ" ),
      }

      PK.parameter( { g: Platte1.Eigenschaften.l, h: Platte1.Eigenschaften.b } );
      Platte1.Berechnung.Ap = PK.RAgh().to( "m^2" );

      EK.parameter( {
        ρ: Platte1.Parameter.ρgl,
        l: Platte1.Eigenschaften.d,
        A: Platte1.Berechnung.Ap.toString(),
      } );
      Platte1.Berechnung.R = EK.RρlA().to( "Mohm" );

      dbJson.writeJSONItem( path.resolve( `${ datadir }/data.json` ), Platte1 );
      dbJson.appendJSONItem( path.resolve( `${ datadir }/data.json` ), Platte2 );
      dbJson.appendJSONItem( path.resolve( `${ datadir }/data.json` ), Platte3 );
    },
    function ()
    {
      console.error( `${ datadir }` );
    }
  );
}

// let input = {
//   Material: 'Glas',
//   l: '0.8 m',
//   b: '1.25 m',
//   d: '1 mm'
// }
// Uebung14( input )

exports.func = Uebung14;
