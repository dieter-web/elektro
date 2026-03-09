import Componente from "../../componente.mjs";
import { Elektro } from "../../mathjs/elektro.mjs";
import { localstart } from "../../module/localstart.mjs";
export let meta = {
  name: "A33",
  chart: false,
  beschreibung: `
	Drei Widerstände R1, R2, R3 sind parallelgeschaltet. R1=250ohm, R2=420ohm, R3=495ohm.
	Wie groß ist die Spannung an den Widerständen, wenn der Gesamtstrom 1.85A beträgt?
	`,
  felder: [
    {
      name: "R1",
      label: "R1",
      type: "unit",
      value: "250",
      unit: "ohm",
      description: "R1",
      required: true,
    },
    {
      name: "R2",
      label: "R2",
      type: "unit",
      value: "420",
      unit: "ohm",
      description: "R2",
      required: true,
    },
    {
      name: "R3",
      label: "R3",
      type: "unit",
      value: "495",
      unit: "ohm",
      description: "R3",
      required: true,
    },
    {
      name: "Ig",
      label: "Ig",
      type: "unit",
      value: "1.85",
      unit: "A",
      description: "Gesamtstrom",
      required: true,
    },
  ],
};
export default async function aufgabeFunc(input) {
  const A1 = new Componente([input, { Art: "A", Id: 1 }, {}, "Componente"]);

  const EK = new Elektro(["R2G", "UIR"]);

  let a = [input.R1, input.R2, input.R3].filter((R) => R != null);
  A1.parameter["G"] = a.map((R) => EK.berechne({ R: R }, "R2G"));

  const { Rgesamt } = EK.berechneLeitwertSumme(a);

  A1.berechnung["U"] = EK.berechne({ I: input.Ig, R: Rgesamt }, "UIR");

  return {
    meta,
    parameter: [
      {
        Kennzeichnung: A1.kennzeichnung,
        Parameter: A1.parameter,
        Eigenschaften: A1.eigenschaften,
        Berechnung: {
          U: A1.berechnung["U"],
        },
      },
    ],
  };
}

localstart(import.meta.url, meta, aufgabeFunc);
