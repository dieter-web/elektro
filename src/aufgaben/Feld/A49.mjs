// Modul: A49.mjs
// Autor: Dieter
// Erstellt: 2025-12-04

import Componente from '../../componente.mjs';
import { localstart } from '../../module/localstart.mjs';

export let meta = {
  name: 'A49',
  table: true,
  chart: false,
  svgD3: true,
  editor: false,
  beschreibung: `
  Die Leitungsmaste von Hochspannungsfreileitungen werden  geerdet. Bei bestimmten Störfällen (Erdschluss) im Netz fließt vom Mast aus ein
  elektrischer Strom durch das Erdreich zum Nachbarmast oder einem weiter entfernt liegenden Netzpunkt. In der Praxis interessiert das
  Strömungsfeld der Erde in ummittelbarer Nähe des Mastes. Die Verbindung zur Erde wird durch Rohr- oder Banderder hergestellt, die ein
  sehr kompliziertes Strömungsfeld erzeugen. Zur Vereinfachung sei angenommen, daß eine metallische Halbkugel mit dem Radius R in die Erde
  eingelassen ist. Eine konzentrische Halbkugelschale mit sehr großem Radius bildet die Gegenelektrode.:
  `,
  felder: [
    {
      name: 'R',
      label: 'R',
      type: 'unit',
      value: '50',
      unit: 'cm',
      description: 'Halbkugelerder',
      required: true,
    },
  ],
};

export default async function aufgabeFunc(input) {
  const A1 = new Componente([
    input,
    { Art: 'A', Id: '1' },
    {},
    'Leitungsmasten',
  ]);

  // Inhalt für svgD3 erzeugen

  return {
    meta,
    parameter: [
      {
        Kennzeichnung: A1.kennzeichnung,
        Parameter: A1.parameter,
        Eigenschaften: A1.eigenschaften,
        Berechnung: {},
      },
    ],
    svgD3Data: {
      grafik: [
        {
          label: 'Strömungsfeld',
          art: 'Diagramm',
          src: './../../svgD3Grafik/A49g.mjs',
        },
      ],
      //     plugins: ['mirror'],
      options: {
        width: 400,
        height: 300,
        margin: 60,
      },
    },
  };
}

localstart(import.meta.url, meta, aufgabeFunc);
