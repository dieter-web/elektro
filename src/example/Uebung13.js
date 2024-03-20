require( "use-strict" );

/**
 * @description
 * Ein Strommesser hat einen Widerstand von 2.5 ohm.
 * Bei Endausschlag liegt an seinen Klemmen eine
 * Spannung von 0.625 V.
 * Wie groß ist der Meßbereich ?
 * @author Dieter Krause
 * @date 25/07/2023
 * @param {*} input
 */
async function Uebung13 ( input )
{
  const path = require( "path" );
  const dbJson = require( path.resolve( "controllers/dbJson" ) );

  const { makeDirectory } = require( path.resolve( "src/js/utility.js" ) );
  const { Elektro } = require( path.resolve( "src/mathjs/Kernel.js" ) );
  const { Strommesser } = require( path.resolve( "src/components/Betriebsmittel.js" ) )

  const P1 = new Strommesser( { undefined } );

  const EK = new Elektro();

  const datadir = "src/json/example/Uebung13";

  makeDirectory( datadir ).then(
    function ()
    {

      P1.Kennzeichnung = {
        Art: "P",
        Zählnummer: 1,
      };

      P1.Parameter = {
        R: input.R,
        U: input.U
      }

      EK.parameter( { R: P1.Parameter.R, U: P1.Parameter.U } );
      P1.Berechnung.Ism = EK.IUR().to( "mA" );

      dbJson.writeJSONItem( path.resolve( `${ datadir }/data.json` ), P1 );
    },
    function ()
    {
      console.error( `${ datadir }` );
    }
  );
}
// let input = {
//   R: "2.5 ohm",
//   U: "0.625 V",
// };
// Uebung13( input );
exports.func = Uebung13;
