import Componente from "../../componente.mjs";
import { Elektro } from "../../mathjs/elektro.mjs";
import { localstart } from "../../module/localstart.mjs";

export let meta = {
  name: "A21",
  beschreibung: `Ein temperaturabhängiger Widerstand hat bei 20celsius einen Widerstand von 40kohm.
Wie groß ist sein Temperaturkoeffizient, wenn bei 25.5celsius der Widerstand 41kohm beträgt?`,
  felder: [
    {
      name: "δ20",
      label: "Temperatur",
      type: "unit",
      value: "20",
      unit: "celsius",
      description: "Temperatur",
      required: true,
    },
    {
      name: "R20",
      label: "Widerstand",
      type: "unit",
      value: "40",
      unit: "kohm",
      description: "Widerstand bei δ20",
      required: true,
    },
    {
      name: "δ",
      label: "Temperatur",
      type: "unit",
      value: "25.5",
      unit: "celsius",
      description: "Temperatur",
      required: true,
    },
    {
      name: "Rδ",
      label: "Widerstand bei δ1",
      type: "unit",
      value: "41",
      unit: "kohm",
      description: "Widerstand bei δ1",
      required: true,
    },
  ],
};
export default async function aufgabeFunc(input) {
  const konstante = new Componente([
    input,
    { Art: "α20", Id: 1 },
    {},
    "Konstante",
  ]);

  const EK = new Elektro(["α20"]);

  konstante.berechnung["α20"] = EK.berechne(
    { Rδ: input.Rδ, R20: input.R20, δ: input.δ, δ20: input.δ20 },
    "α20",
  );

  return {
    meta,
    parameter: [
      {
        Kennzeichnung: konstante.kennzeichnung,
        Parameter: konstante.parameter,
        Eigenschaften: konstante.eigenschaften,
        Berechnung: { α20: konstante.berechnung["α20"] },
      },
    ],
  };
}

localstart(import.meta.url, meta, aufgabeFunc);
