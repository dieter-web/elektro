// Modul: A47.mjs
// Autor: Dieter
// Erstellt: 2025-11-30

import Componente from "../../componente.mjs";
// import { Elektro } from "../../mathjs/kernel.mjs";
import { localstart } from "../../module/localstart.mjs";

export let meta = {
  name: "A47",
  chart: false,
  beschreibung: `
  An einer Eigenbedarfsanlage eines Betriebes (100-kW-Generatorsatz) sind folgende Verbraucher angeschlossen:
  50 Glühlampen je 500 W
  10 Elektromotoren je 3.5 kW mit einem Wirkungsgrad von 0.8
  1 Glühofen, der in 16h 1340 MJ Wärme erzeugt, und mehrere Kleingeräte mit einer Gesamtleistung von 5,5 kW.
  Der Gleichzeitigkeitsfaktor von Glühlampen, Motoren und Kleingeräten ist G = 0.7; der Belastungsfaktor der Motoren ist B = 0.8.
  Das Produkt aus G und B nennt man Auslastungsfaktor A. Was kostet eine kwh, wenn bei jährlich 300 Arbeitstagen mit 16 Arbeitsstunden je Tag
  für die Erzeugung der Elektroenergie ein Kostenaufwand von 268962,88 € entstand?
  `,
  felder: [
    {
      name: "",
      label: "",
      type: "",
      value: "",
      unit: "",
      description: "",
      required: true,
    },
  ],
};

export default async function aufgabeFunc(input) {
  const A1 = new Componente([
    input,
    { Art: "A", Id: "1" },
    {},
    "Eigenbedarfsanlage",
  ]);

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
  };
}

localstart(import.meta.url, meta, aufgabeFunc);
