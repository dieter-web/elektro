import Componente from "../../componente.mjs";
import { Elektro } from "../../mathjs/elektro.mjs";
import { ladeWerkstoff_wert } from "../../module/utils.mjs";
import { localstart } from "../../module/localstart.mjs";

export let meta = {
  name: "A19",
  beschreibung: `Die Primärwicklung eines Transformators aus Kupferdraht hat bei 20celsius einen
Gleichstromwiderstand von 560ohm. Nach dreistündigem Betrieb beträgt der Widerstand 604ohm.
Wie hoch ist dann die Temperatur der Wicklung?`,
  felder: [
    {
      name: "Material",
      label: "Material",
      type: "string",
      value: "Cu",
      unit: "",
      description: "Material des Drahtes",
      required: true,
    },
    {
      name: "δ20",
      label: "Vergleichstemperatur (20celsius)",
      type: "unit",
      value: "20",
      unit: "celsius",
      description: "Drahttemperatur",
      required: true,
    },
    {
      name: "Rδ",
      label: "Gleichstromwiderstand",
      type: "unit",
      value: "560",
      unit: "ohm",
      description: "Gleichstromwiderstand bei δ20",
      required: true,
    },
    {
      name: "R20",
      label: "Betriebstemperatur",
      type: "unit",
      value: "604",
      unit: "ohm",
      description: "Temperatur nach 3 stündigen Betrieb",
      required: true,
    },
    {
      name: "t",
      label: "Betriebsdauer",
      type: "unit",
      value: "3",
      unit: " hour",
      description: "Betriebsdauer",
      required: true,
    },
  ],
};
export default async function aufgabeFunc(input) {
  const α20 = await ladeWerkstoff_wert(input.Material, "α20");
  const T = new Componente([
    input,
    { Art: "T", Id: 1 },
    { α20: α20 },
    "Componente",
  ]);

  const EK = new Elektro(["δ"]);

  T.berechnung["δ2"] = EK.berechne(
    { Rδ: input.Rδ, R20: input.R20, α20: α20, δ20: input.δ20 },
    "δ",
  );

  return {
    meta,
    parameter: [
      {
        Kennzeichnung: T.kennzeichnung,
        Parameter: T.parameter,
        Eigenschaften: T.eigenschaften,
        Berechnung: { δ2: T.berechnung["δ2"] },
      },
    ],
  };
}

localstart(import.meta.url, meta, aufgabeFunc);
