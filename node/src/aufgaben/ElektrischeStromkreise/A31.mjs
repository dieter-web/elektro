import Componente from "../../componente.mjs";
import { Elektro } from "../../mathjs/elektro.mjs";
import { localstart } from "../../module/localstart.mjs";

export let meta = {
  name: "A31",
  chart: false,
  beschreibung: `
	Ein Spannungsteiler nach Bild besteht aus einem kalibrierten Widerstandsdraht von 80cm Länge,
	U=220V, U1=40V,
	Wie lang ist das Drahtstück, an dem U2 abgegriffen wird?
	`,
  felder: [
    {
      name: "L",
      label: "L",
      type: "unit",
      value: "80",
      unit: "cm",
      description: "kalibrierter Widerstandsdraht",
      required: true,
    },
    {
      name: "U",
      label: "U",
      type: "unit",
      value: "220",
      unit: "V",
      description: "Gesamtspannung",
      required: true,
    },
    {
      name: "U1",
      label: "U1",
      type: "unit",
      value: "40",
      unit: "V",
      description: "abgegriffene Spannung",
      required: true,
    },
  ],
};
export default async function aufgabeFunc(input) {
  const A1 = new Componente([input, { Art: "A", Id: 1 }, {}, "Componente"]);

  const EK = new Elektro(["lU2UL"]);

  A1.berechnung["l1"] = EK.berechne(
    { L: input.L, U: input.U, U1: input.U1 },
    "lU2UL",
  );

  return {
    meta,
    parameter: [
      {
        Kennzeichnung: A1.kennzeichnung,
        Parameter: A1.parameter,
        Eigenschaften: A1.eigenschaften,
        Berechnung: {
          l1: A1.berechnung["l1"],
        },
      },
    ],
  };
}

localstart(import.meta.url, meta, aufgabeFunc);
