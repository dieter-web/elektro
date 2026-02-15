import Componente from "../../componente.mjs";
import { Elektro } from "../../mathjs/elektro.mjs";
import { ladeWerkstoff_wert } from "../../module/utils.mjs";
import { localstart } from "../../module/localstart.mjs";

export let meta = {
  name: "A13",
  beschreibung: `Eine zweidrähtige Aluminiumfreileitung von 17km Länge hat einen Querschnitt von 25mm².
	Wie groß ist ihr Widerstand?`,
  felder: [
    {
      name: "Material",
      label: "Material",
      type: "string",
      value: "Al",
      unit: "",
      description: "Material der Freileitung",
      required: true,
    },
    {
      name: "l",
      label: "Länge",
      type: "unit",
      value: "17",
      unit: "km",
      description: "Länge der Freileitung",
      required: true,
    },
    {
      name: "A",
      label: "Querschnitt",
      type: "unit",
      value: "25",
      unit: "mm^2",
      description: "Querschnitt der Freileitung",
      required: true,
    },
    {
      name: "n",
      label: "Anzahl",
      type: "numeric",
      value: "2",
      unit: "",
      description: "Anzahl der Drähte der Leitung",
      required: true,
    },
  ],
};
export default async function aufgabeFunc(input) {
  const ρ = await ladeWerkstoff_wert(input.Material, "ρ");
  const W = new Componente([
    input,
    { Art: "W", Id: 1 },
    { ρ: ρ },
    "Componente",
  ]);

  const EK = new Elektro(["RρnlA"]);

  W.berechnung["R"] = EK.berechne(
    { ρ: ρ, l: input.l, A: input.A, n: input.n },
    "RρnlA",
  );

  return {
    meta,
    parameter: [
      {
        Kennzeichnung: W.kennzeichnung,
        Parameter: W.parameter,
        Eigenschaften: W.eigenschaften,
        Berechnung: { R: W.berechnung["R"] },
      },
    ],
  };
}

localstart(import.meta.url, meta, aufgabeFunc);
