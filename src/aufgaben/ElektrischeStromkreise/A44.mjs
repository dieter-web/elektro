// Modul: A44.mjs
// Autor: Dieter
// Erstellt: 2025-11-15

import Componente from '../../componente.mjs';
import { Elektro } from '../../mathjs/elektro.mjs';
import { Arithmetik } from '../../mathjs/arithmetik.mjs';
import { localstart } from '../../module/localstart.mjs';
import { transform } from '../../module/haskell.mjs';

export let meta = {
  name: 'A44',
  chart: false,
  beschreibung: `
  In der Schaltung nach Bild haben die Widerstände folgende Werte: R1=20kohm, R2=50kohm,
  R3=30kohm, R4=15kohm, R5=25kohm. Die Spannung U beträgt 20V.
  Wie groß ist der Itrom I3?
  `,
  felder: [
    {
      name: 'R1',
      label: 'R1',
      type: 'unit',
      value: '20',
      unit: 'kohm',
      description: 'R1',
      required: true,
    },
    {
      name: 'R2',
      label: 'R2',
      type: 'unit',
      value: '50',
      unit: 'kohm',
      description: 'R2',
      required: true,
    },
    {
      name: 'R3',
      label: 'R3',
      type: 'unit',
      value: '30',
      unit: 'kohm',
      description: 'R3',
      required: true,
    },
    {
      name: 'R4',
      label: 'R4',
      type: 'unit',
      value: '15',
      unit: 'kohm',
      description: 'R4',
      required: true,
    },
    {
      name: 'R5',
      label: 'R5',
      type: 'unit',
      value: '25',
      unit: 'kohm',
      description: 'R5',
      required: true,
    },
    {
      name: 'U',
      label: 'U',
      type: 'unit',
      value: '20',
      unit: 'V',
      description: 'U',
      required: true,
    },
  ],
};

export default async function aufgabeFunc(input) {
  const A1 = new Componente([
    input,
    { Art: 'A', Id: '1' },
    {},
    'Brückenschaltung',
  ]);

  const erg = await transform('a44', meta.felder);

  // Es werden nur die ersten drei meta.felder benutzt
/*
  const erg = await transform(
    'dreiecksterntransformation',
    meta.felder.slice(0, 3)
  );
*/

  const units = meta.felder.slice(0, 3).map((f) => f.unit);

  // Weiterrechnen mit Einheiten

  const AK = new Arithmetik(['add', 'sub']);
  const EK = new Elektro(['IUR', 'UIR']);
  const [R1p, R2p, R3p] = erg.map((val, i) => EK.Num2Unit(val, units[i])); //  math.unit(val, units[i]))

  const R24 = AK.berechne({ a: input.R4, b: R2p }, 'add');
  A1.parameter['R24'] = R24;
  const R15 = AK.berechne({ a: input.R5, b: R1p }, 'add');
  A1.parameter['R24'] = R15;
  const SR24R15 = AK.berechne({ a: R24, b: R15 }, 'add');
  A1.parameter['SR24R15'] = SR24R15;

  // const Rg = erg[0] + ( numR24 * numR15 / (numR24 + numR15))
  const Rp = EK.RgesParallelschaltung([R24, R15]);
  A1.parameter['Rp'] = Rp;
  const Rg = AK.berechne({ a: R3p, b: Rp }, 'add');
  A1.parameter['Rg'] = Rg;

  // Gesamtstrom I
  const Ig = EK.berechne({ U: input.U, R: Rg }, 'IUR');
  A1.parameter['Ig'] = Ig;

  // Anwendung der Stromteilerregel
  const I4 = EK.stromverzweigung(Ig, R15, SR24R15);
  A1.parameter['I4'] = I4;
  const I5 = EK.stromverzweigung(Ig, R24, SR24R15);
  A1.parameter['I5'] = I5;

  // Spannungen U4 und R5 berechnen
  const U4 = EK.berechne({ I: I4, R: input.R4 }, 'UIR');
  A1.parameter['U4'] = U4;
  const U5 = EK.berechne({ I: I5, R: input.R5 }, 'UIR');
  A1.parameter['U5'] = U5;

  // Die Spannungsdifferenz ist die Spannung, die am Widerstand R3 liegt
  const diffU4U5 = AK.berechne({ a: U4, b: U5 }, 'sub');
  A1.parameter['diffU4U5'] = diffU4U5;

  const I3 = EK.berechne({ U: diffU4U5, R: input.R3 }, 'IUR');
  //  A1.berechnung['I3'] = I3

  return {
    meta,
    parameter: [
      {
        Kennzeichnung: A1.kennzeichnung,
        Parameter: A1.parameter,
        Eigenschaften: A1.eigenschaften,
        Berechnung: {
          i : erg.i,
          i4 : erg.i4,
          i5 : erg.i5,
          u4 : erg.u4,
          u5 : erg.u5,
          i3 : erg.i3
        },
      },
    ],
  };
}

localstart(import.meta.url, meta, aufgabeFunc);
