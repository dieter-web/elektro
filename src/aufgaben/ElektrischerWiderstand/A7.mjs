import Componente from "../../componente.mjs";
import { Elektro } from "../../mathjs/elektro.mjs";
import { Planemetrie } from "../../mathjs/geometrie.mjs";
import { localstart } from "../../module/localstart.mjs";

export let meta = {
  name: "A7",
  beschreibung: `
	Wie groß ist die spezifische Leitfähigkeit einer Elektrolytflüssigkeit in S/cm, in der sich zwei Elektroden 
	von 12.5cm x 20cm in einem Oberflächenabstand von 4mm befinden? Der Widerstand zwischen den Platten 
	beträgt 0.05ohm.
	`,
  felder: [
    {
      name: "l",
      label: "Länge der Elektrode",
      type: "unit",
      value: "20",
      unit: "cm",
      description: "Länge einer Elektrode",
      required: true,
    },
    {
      name: "b",
      label: "Breite der Elektrode",
      type: "unit",
      value: "12.5",
      unit: "cm",
      description: "Breite einer Elektrode",
      required: true,
    },
    {
      name: "a",
      label: "Abstand der Elektroden",
      type: "unit",
      value: "4",
      unit: "mm",
      description: "Abstand der zwei Elektroden",
      required: true,
    },
    {
      name: "R",
      label: "Widerstand zwischen den Platten",
      type: "unit",
      value: "0.05",
      unit: "ohm",
      description: "Widerstand zwischen den Platten im Elektrolyd",
      required: true,
    },
  ],
};

export default async function aufgabeFunc(input) {
  const P = new Componente([input, { Art: "P", Id: 1 }, {}, "Componente"]);

  const PK = new Planemetrie(["RAgh"]);
  const EK = new Elektro(["κlra"]);

  // Berechnung der Fläche
  P.berechnung["A"] = PK.berechne({ g: input.l, h: input.b }, "RAgh");

  // Berechnung der Leitfähigkeit
  P.berechnung["κ"] = EK.berechne(
    { l: input.a, R: input.R, A: P.berechnung["A"] },
    "κlra",
  ).to("S/cm");

  // Ergebnis-Objekt
  return {
    meta,
    parameter: [
      {
        Kennzeichnung: P.kennzeichnung,
        Parameter: P.parameter,
        Eigenschaften: P.eigenschaften,
        Berechnung: { κ: P.berechnung["κ"] }, // {κ: Unit}
      },
    ],
  };
}

localstart(import.meta.url, meta, aufgabeFunc);
