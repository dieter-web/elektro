import Componente from "../../componente.mjs";
import { Elektro } from "../../mathjs/elektro.mjs";
import { localstart } from "../../module/localstart.mjs";

export let meta = {
  name: "A30",
  chart: false,
  beschreibung: `
	Wie groß ist die Spannung U2, wenn der Widerstand R durch den Schleifer im Verhältnis
	R1:R2 = 1.5: 3.5 aufgeteilt wird und U = 60V beträgt?
	`,
  felder: [
    {
      name: "U",
      label: "U",
      type: "unit",
      value: "60",
      unit: "V",
      description: "Gesamtspannung",
      required: true,
    },
    {
      name: "V1",
      label: "V1",
      type: "numeric",
      value: "1.5",
      unit: "",
      description: "Verhältnis R1",
      required: true,
    },
    {
      name: "V2",
      label: "V2",
      type: "numeric",
      value: "3.5",
      unit: "",
      description: "Verhältnis R2",
      required: true,
    },
  ],
};
export default async function aufgabeFunc(input) {
  const A1 = new Componente([input, { Art: "A", Id: 1 }, {}, "Componente"]);

  const EK = new Elektro(["U2UR1R2"]);

  A1.berechnung["U2"] = EK.berechne(
    { U: input.U, R1: input.V1, R2: input.V2 },
    "U2UR1R2",
  );

  return {
    meta,
    parameter: [
      {
        Kennzeichnung: A1.kennzeichnung,
        Parameter: A1.parameter,
        Eigenschaften: A1.eigenschaften,
        Berechnung: {
          U2: A1.berechnung["U2"],
        },
      },
    ],
  };
}
localstart(import.meta.url, meta, aufgabeFunc);
