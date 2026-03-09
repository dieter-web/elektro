// Modul: A48.mjs
// Autor: Dieter
// Erstellt: 2025-12-03

import Componente from '../../componente.mjs';
import { Elektro } from '../../mathjs/elektro.mjs';
import { localstart } from '../../module/localstart.mjs';

export let meta = {
  name: 'A48',
  table: true,
  chart: true,
  svgD3: false,
  editor: false,
  beschreibung: `
    Ein kreisförmiges Metallblech mit einem Radius R=80mm ist auf einer Seite galvanisch mit einer
    Metallschicht überzogen worden. Die Ausmessung der Schicht hat eine quadratische Abhängigkeit der
    Schichtdicke d vom Abstand r ergeben:
     d = d_m * (1 - (r/R)²)
    Die Stromstärke betrug I = 5.027A. Unter Beachtung der Tatsache, daß die Schichtdicke der Stromdichte
    proportional ist, soll die Stromdichteverteilung über dem Blech berechnet werden.
  `,
  felder: [
    {
      name: 'R',
      label: 'R',
      type: 'unit',
      value: '80',
      unit: 'mm',
      description: 'Radius kreisförmiges Metallblech',
      required: true,
    },
    {
      name: 'I',
      label: 'I',
      type: 'unit',
      value: '5.027',
      unit: 'A',
      description: 'Stromstärke',
      required: true,
    },
  ],
};

export default async function aufgabeFunc(input) {
  const A1 = new Componente([input, { Art: 'A', Id: '1' }, {}, 'Metallblech']);

  const EK = new Elektro(['SIR']);
  A1.berechnung['Sm'] = EK.berechne({ I: input.I, R: input.R }, 'SIR');

  // Kennlinie für Chart erzeugen
  A1.chart['steps'] = 80;
  A1.chart['I_f_r'] = [];

  for (let r = 1; r < A1.chart['steps']; r++) {
    const tmp = EK.berechne({ I: input.I, R: r }, 'SIR');
    const S = tmp.value;
    console.log(S, r);
    A1.chart['I_f_r'].push([r, S]);
  }

  return {
    meta,
    parameter: [
      {
        Kennzeichnung: A1.kennzeichnung,
        Parameter: A1.parameter,
        Eigenschaften: A1.eigenschaften,
        Berechnung: {
          Sm: A1.berechnung['Sm'],
        },
      },
    ],
    chartData: {
      curves: [
        {
          label: 'J(r)',
          color: 'blue',
          points: A1.chart['I_f_r'],
        },
      ],
      // TODO: Achsen zu grob !
      xAxis: { label: 'r', domain: [0, 80] },
      yAxis: { label: 'S', domain: [0.0, 3.5] },
      options: {
        width: 640,
        height: 480,
        margin: 100,
        grid: true,
        legend: true,
      },
    },
  };
}
localstart(import.meta.url, meta, aufgabeFunc);
