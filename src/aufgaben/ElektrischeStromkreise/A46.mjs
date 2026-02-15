// Modul: <A46.mjsFILENAME>
// Autor: Dieter
// Erstellt: 2025-11-26<DATUM>

import Componente from '../../componente.mjs';
import { Elektro } from '../../mathjs/elektro.mjs';
import { localstart } from '../../module/localstart.mjs';
import { transform } from '../../module/haskell.mjs';
// import { promisify } from 'util';
// import { execFile } from 'child_process';

// const execFileAsync = promisify(execFile);

export let meta = {
  name: 'A46',
  chart: false,
  beschreibung: `
    Für das im Bild 2.43 angegebene Netzwerk sind die Ströme I2 und I3 zu berechnen. 
    Es ist gegeben: U1=10V, U2=5V, U3=8V, Ri1=3ohm, Ri2=5ohm, Ri3=4ohm, R4=6ohm, R5=7ohm, R6=8ohm
  `,
  felder: [
    {
      name: 'U1',
      label: 'U1',
      type: 'unit',
      value: '10',
      unit: 'V',
      description: 'Netzwerk Spannungsquelle 1',
      required: true,
    },
    {
      name: 'U2',
      label: 'U2',
      type: 'unit',
      value: '5',
      unit: 'V',
      description: 'Netzwerk Spannungsquelle 2',
      required: true,
    },
    {
      name: 'U3',
      label: 'U3',
      type: 'unit',
      value: '8',
      unit: 'V',
      description: 'Netzwerk Spannungsquelle 3',
      required: true,
    },
    {
      name: 'Ri1',
      label: 'Ri1',
      type: 'unit',
      value: '3',
      unit: 'ohm',
      description: 'Netzwerk Spannungsquelle 1 Innenwiderstand',
      required: true,
    },
    {
      name: 'Ri2',
      label: 'Ri2',
      type: 'unit',
      value: '5',
      unit: 'ohm',
      description: 'Netzwerk Spannungsquelle 2 Innenwiderstand',
      required: true,
    },
    {
      name: 'Ri3',
      label: 'Ri3',
      type: 'unit',
      value: '4',
      unit: 'ohm',
      description: 'Netzwerk Spannungsquelle 3 Innenwiderstand',
      required: true,
    },
    {
      name: 'R4',
      label: 'R4',
      type: 'unit',
      value: '6',
      unit: 'ohm',
      description: 'Widerstand 4',
      required: true,
    },
    {
      name: 'R5',
      label: 'R5',
      type: 'unit',
      value: '7',
      unit: 'ohm',
      description: 'Widerstand 5',
      required: true,
    },
    {
      name: 'R6',
      label: 'R6',
      type: 'unit',
      value: '8',
      unit: 'ohm',
      description: 'Widerstand 6',
      required: true,
    },
  ],
};

export default async function aufgabeFunc(input) {
  const A1 = new Componente([input, { Art: 'A', Id: '1' }, {}, 'Netzwerk']);

  /*
   * (1) Knotenpunkt A  I4 - I1 - I2 = 0
   * (2) Knotenpunkt B  I3 - I4 + I5 = 0
   * (3) Masche 1       U1 - I1Ri1 + I2Ri2 - U2  = 0
   * (4) Masche 2       U2 - I2Ri2 - I4R4 - I5R5 = 0
   * (5) Masche 3       U3 - I3Ri3 - I3R6 + I5R5 = 0
   *
   *       I4      - I2 - I1 = 0
   *  I5 - I4 + I3           = 0
   *
   */

  const erg = await transform('a46', meta.felder);

  // Ermittlung der Einheiten des Ergebnisses
  const EK = new Elektro(['IUR']);
  const me = EK.bestimmeEinheit({ U: '1V', R: '1ohm' }, 'IUR');
  console.log(me);

  return {
    meta,
    parameter: [
      {
        Kennzeichnung: A1.kennzeichnung,
        Parameter: A1.parameter,
        Eigenschaften: A1.eigenschaften,
        Berechnung: {
          // I2: erg[1],
          // I5: erg[4],
          I2: erg.i2 + 'A',
          I3: erg.i3 + 'A',
        },
      },
    ],
  };
}

localstart(import.meta.url, meta, aufgabeFunc);
