// import Componente from "../../componente.mjs";
import { localstart } from "../../module/localstart.mjs";

export let meta = {
  name: "A23",
  beschreibung: `Die Widerstände der Schaltung haben folgende Werte:
R1=5.2ohm; R2=6.9ohm; R3=3.4ohm. Der Strom I ist 2A groß. Das Potential des Punktes C ist gleich Null,
Wie groß sind die Potentiale an den Punkten A, B und D?`,
  felder: [
    {
      name: "R1",
      label: "R1",
      type: "unit",
      value: "5.2",
      unit: "ohm",
      description: "R1",
      required: true,
    },
    {
      name: "R2",
      label: "R2",
      type: "unit",
      value: "6.9",
      unit: "ohm",
      description: "R2",
      required: true,
    },
    {
      name: "R3",
      label: "R3",
      type: "unit",
      value: "3.4",
      unit: "ohm",
      description: "R3",
      required: true,
    },
    {
      name: "I",
      label: "I",
      type: "unit",
      value: "2",
      unit: "A",
      description: "Stromstärke",
      required: true,
    },
    {
      name: "φC",
      label: "Potential C",
      type: "unit",
      value: "0",
      unit: "V",
      description: "Potential C",
      required: true,
    },
  ],
};

import { matrix } from "mathjs";

export default async function aufgabeFunc(input) {
  function parseValue(val) {
    if (typeof val === "number") return val;
    if (typeof val === "string") return parseFloat(val.replace(",", "."));
    return 0;
  }

  const R1 = parseValue(input.R1);
  const R2 = parseValue(input.R2);
  const R3 = parseValue(input.R3);
  const I = parseValue(input.I);

  // Unbekannte: [φA, φB, φC, φD]
  // Gleichungen:
  // 1) φA - φB = R1*I
  // 2) φB - φC = R2*I
  // 3) φC - φD = R3*I
  // 4) φC = 0

  const A = matrix([
    [1, -1, 0, 0], // φA - φB = R1*I
    [0, 1, -1, 0], // φB - φC = R2*I
    [0, 0, 1, -1], // φC - φD = R3*I
    [0, 0, 1, 0], // φC = 0
  ]);
  const b = matrix([[R1 * I], [R2 * I], [R3 * I], [0]]);

  // Löse das Gleichungssystem
  const math = await import("mathjs");
  const x = math.lusolve(A, b);

  const φA = x.get([0, 0]);
  const φB = x.get([1, 0]);
  const φC = x.get([2, 0]);
  const φD = x.get([3, 0]);

  return {
    meta,
    parameter: [
      {
        Kennzeichnung: ["Potentiale (Matrixlösung)"],
        Parameter: { R1, R2, R3, I, φC },
        Berechnung: {
          φA: φA.toFixed(2) + "V",
          φB: φB.toFixed(2) + "V",
          φD: φD.toFixed(2) + "V",
        },
      },
    ],
  };
}

localstart(import.meta.url, meta, aufgabeFunc);
