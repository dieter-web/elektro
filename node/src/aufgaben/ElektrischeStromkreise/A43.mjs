// Modul: <A43.mjs>
// Autor: Dieter
// Erstellt: 2025-11-09

import Componente from '../../componente.mjs';
import { localstart } from '../../module/localstart.mjs';
// import { Elektro } from '../../mathjs/elektro.mjs';
import { transform } from '../../module/haskell.mjs';

import { spawnSync } from 'child_process';

export let meta = {
  name: 'A43',
  chart: false,
  beschreibung: `
  Eine Schleifdrahtbrücke nach Bild hat einen Schleifendraht von 2m Länge.
  Wie groß sind beim Abgleich die Längen l2 und l3, wenn mit einem Widerstand R1 = 520 ohm ein
  Widerstand Rx = 730 ohm gemessen wird?
  `,
  felder: [
    {
      name: 'l',
      label: 'l',
      type: 'unit',
      value: '2',
      unit: 'm',
      description: 'Schleifendraht',
      required: true,
    },
    {
      name: 'R1',
      label: 'R1',
      type: 'unit',
      value: '520',
      unit: 'ohm',
      description: 'Einstellwiderstand',
      required: true,
    },
    {
      name: 'Rx',
      label: 'Rx',
      type: 'unit',
      value: '730',
      unit: 'ohm',
      description: 'Rx',
      required: true,
    },
  ],
};

export default async function aufgabeFunc(input) {
  const A1 = new Componente([
    input,
    { Art: 'A', Id: '1' },
    {},
    'Schleifendrahtbrücke',
  ]);

  let l = meta.felder[0].value;
  let R1 = meta.felder[1].value;
  let Rx = meta.felder[2].value;

  const erg = spawnSync(
    './mylib-ipc',
    //['elektro.wheatston', '2', '520', '730'], // TODO: Felder eintragen
    ['elektro.wheatston', l, R1, Rx],
    { encoding: 'utf8' }
  );

  // console.log('stdout:', erg.stdout);

  const raw = erg.stdout.trim();
  const cleaned = raw.replace(/[()]/g, '');
  const [el2, el3] = cleaned.split(',').map(Number);

  return {
    meta,
    parameter: [
      {
        Kennzeichnung: A1.kennzeichnung,
        Parameter: A1.parameter,
        Eigenschaften: A1.eigenschaften,
        Berechnung: {
          l2: el2,
          l3: el3,
        },
      },
    ],
  };
}

localstart(import.meta.url, meta, aufgabeFunc);
