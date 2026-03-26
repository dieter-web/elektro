// Modul: A48.mjs
// Autor: Dieter
// Erstellt : 2026-3-21

import Componente from '../../componente.mjs';
import { localstart } from '../../module/localstart.mjs';
import { spawnSync } from 'child_process';

export let meta = {
  name: 'A48',
  chart: false,
  beschreibung: `
Wie lange dauert es, bis 2l Leitungswasser von 14°C durch einen Tauchsider von 1kW Leistung zum Sieden gebracht werden, wenn angenommen wird, daß kein Wärmeverlust durch Wärmeabgabe über das Gefäß an die Umgebung auftritt?
  `,
  felder: [
    {
      name: 'm',
      label: 'm',
      type: 'unit',
      value: 2.0,
      unit: 'l',
      description: 'Leitungswasser',
      required: true,
    },
    {
      name: 'δ1',
      label: 'δ1',
      type: 'unit',
      value: 14.0,
      unit: 'celsius',
      description: 'Ausgangstemperatur',
      required: true,
    },
    {
      name: 'δ2',
      label: 'δ2',
      type: 'unit',
      value: 100.0,
      unit: 'celsius',
      descriptions: 'Siedetemperatur',
      required: true,
    },
    {
      name: 'wel',
      label: 'wel',
      type: 'unit',
      value: 1000.0,
      unit: 'W',
      descriptions: 'Leistung Tauchsieder',
      required: true,
    },
  ],
};

export default async function aufgabeFunc(input) {
  const A1 = new Componente([
    input,
    { Art: 'A', Id: '1' },
    {},
    'Wasser zum sieden bringen',
  ]);

  // Alle Werte in Number konvertieren

  const extractNumbers = (obj) =>
    Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, parseFloat(v)]));

  const vars = extractNumbers(input);
  console.log(vars);
  // { m: 2, δ1: 14, δ2: 100, wel: 1000 }

  const ergebnis = spawnSync(
    './mylib-ipc',
    ['energie.heatingTime', vars.m, vars.δ1, vars.δ2, vars.wel],
    { encoding: 'utf8' }
  );

  console.log('TEST spawnSync:', ergebnis);

  //  const raw = erg.stdout.trim();
  //  const cleaned = raw.replace(/[()]/g, '');
  // const [bt] = cleaned.split(',').map(Number);

  A1.berechnung['t'] = ergebnis.stdout.trim();
  console.log('Berechnung:', A1.berechnung['t']);

  return {
    meta,
    parameter: [
      {
        Kennzeichnung: A1.kennzeichnung,
        Parameter: {
          //Wth: bWth,
          //Wel: bWel,
        },
        Eigenschaften: A1.eigenschaften,
        Berechung: {
          t: A1.berechnung['t'],
        },
      },
    ],
  };
}

localstart(import.meta.url, meta, aufgabeFunc);
