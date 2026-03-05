// Modul: <A43.mjs>
// Autor: Dieter
// Erstellt: 2025-11-09

import Componente from '../../componente.mjs';
import { localstart } from '../../module/localstart.mjs';
// import { Elektro } from '../../mathjs/elektro.mjs';
import { transform } from '../../module/haskell.mjs';

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

  // TODO: in meta.felder stehen nicht die aktuell eingegebenen Werte, wenn sie in der
  //       Eingabemaske geändert werden.
  const erg = await transform('a43', meta.felder);

  return {
    meta,
    parameter: [
      {
        Kennzeichnung: A1.kennzeichnung,
        Parameter: A1.parameter,
        Eigenschaften: A1.eigenschaften,
        Berechnung: {
          l2: erg.l2,
          l3: erg.l3,
        },
      },
    ],
  };
}

localstart(import.meta.url, meta, aufgabeFunc);
