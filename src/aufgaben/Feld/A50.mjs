// Modul: A50.mjs
// Autor: Dieter
// Erstellt: 2025-12-14

import Componente from '../../componente.mjs';
import { Elektro } from '../../mathjs/elektro.mjs';
import { localstart } from '../../module/localstart.mjs';
import { ladeWerkstoff_wert } from '../../module/utils.mjs';

export let meta = {
  name: '',
  chart: false,
  beschreibung: `
  Der Widerstand eines Kontaktstücks mit der Form eines geraden Kreiskegelstumpfs soll berechnet werden. 
  `,
  felder: [
    {
      name: 'h',
      label: 'h',
      type: 'unit',
      value: '2',
      unit: 'mm',
      description: 'Höhe',
      required: true,
    },
    {
      name: 'r1',
      label: 'r1',
      type: 'unit',
      value: '2',
      unit: 'mm',
      description: 'unterer Radius',
      required: true,
    },
    {
      name: 'r2',
      label: 'r2',
      type: 'unit',
      value: '1',
      unit: 'mm',
      description: 'oberer Radius',
      required: true,
    },
    {
      name: 'Material',
      label: 'Material',
      type: 'string',
      value: 'Cu',
      unit: '',
      description: 'Material des Kreiskegelstumpfs',
      required: true,
    },
  ],
};

export default async function aufgabeFunc(input) {
  const A1 = new Componente([input, { Art: 'A', Id: '1' }, {}, 'Kontaktstück']);
  const ρ = await ladeWerkstoff_wert(input.Material, 'ρ');

  const EK = new Elektro(['Rρhr1r2']);

  A1.berechnung['R'] = EK.berechne(
    { ρ: ρ, h: input.h, r1: input.r1, r2: input.r2 },
    'Rρhr1r2'
  );

  return {
    meta,
    parameter: [
      {
        Kennzeichnung: A1.kennzeichnung,
        Parameter: A1.parameter,
        Eigenschaften: A1.eigenschaften,
        Berechnung: { R: A1.berechnung['R'] },
      },
    ],
  };
}

localstart(import.meta.url, meta, aufgabeFunc);
