// Modul: <A45.mjs>
// Autor: Dieter
// Erstellt: 2025-11-20

import Componente from '../../componente.mjs';
import { localstart } from '../../module/localstart.mjs';
import { spawnSync } from 'child_process';

//import { transform } from '../../module/haskell.mjs';

export let meta = {
  name: 'A45',
  chart: false,
  beschreibung: `
  Für die Schaltung nach Bild sind gegeben: U1=75V, U2=90V, Ri1=2.1ohm, Ri2=2.8ohm, R3=140ohm, R4=120ohm.
  Wie groß sind I1, I2, I3 und I4?
  `,
  felder: [
    {
      name: 'U1',
      label: 'U1',
      type: 'unit',
      value: '75',
      unit: 'V',
      description: 'Gleichspannungsquelle U1',
      required: true,
    },
    {
      name: 'U2',
      label: 'U2',
      type: 'unit',
      value: '90',
      unit: 'V',
      description: 'Gleichspannungsquelle U2',
      required: true,
    },
    {
      name: 'Ri1',
      label: 'Ri1',
      type: 'unit',
      value: '2.1',
      unit: 'ohm',
      description: 'Innenwiderstand von U1',
      required: true,
    },
    {
      name: 'Ri2',
      label: 'Ri2',
      type: 'unit',
      value: '2.8',
      unit: 'ohm',
      description: 'Innenwiderstand von U2',
      required: true,
    },
    {
      name: 'R3',
      label: 'R3',
      type: 'unit',
      value: '140',
      unit: 'ohm',
      description: 'Widerstand',
      required: true,
    },
    {
      name: 'R4',
      label: 'R4',
      type: 'unit',
      value: '120',
      unit: 'ohm',
      description: 'Widerstand',
      required: true,
    },
  ],
};

export default async function aufgabeFunc(input) {
  const A1 = new Componente([
    input,
    { Art: 'A', Id: '1' },
    {},
    'aktives Netzwerk',
  ]);

  const erg = await transform('a45', meta.felder);

  return {
    meta,
    parameter: [
      {
        Parameter: A1.parameter,
        Eigenschaften: A1.eigenschaften,
        Berechnung: {
          I1: erg.i1,
          I2: erg.i2,
          I3: erg.i3,
          I4: erg.i4,
        },
      },
    ],
  };
}

localstart(import.meta.url, meta, aufgabeFunc);
