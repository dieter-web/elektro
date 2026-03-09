import Componente from "../../componente.mjs";
import { Elektro } from "../../mathjs/elektro.mjs";
import { Planemetrie } from "../../mathjs/geometrie.mjs";
import { ladeWerkstoff_wert } from "../../module/utils.mjs";
import { localstart } from "../../module/localstart.mjs";

export let meta = {
  name: "A8",
  beschreibung: `
		Welche Widerstandswerte hat ein Aluminiumdraht von 300m Länge und 0.2mm Durchmesser bei 20celsius, bei 75celsius
		und bei -8celsius?
	`,
  felder: [
    {
      name: "Material",
      label: "Material",
      type: "string",
      value: "Al",
      unit: "",
      description: "Material des Drahtes",
      required: true,
    },
    {
      name: "δ20",
      label: "δ20",
      type: "unit",
      value: "20",
      unit: "celsius",
      description: "Temperatur 1",
      required: true,
    },
    {
      name: "δ75",
      label: "δ75",
      type: "unit",
      value: "75",
      unit: "celsius",
      description: "Temperatur 2",
      required: true,
    },
    {
      name: "δ8",
      label: "δ8",
      type: "unit",
      value: "-8",
      unit: "celsius",
      description: "Temperatur 3",
      required: true,
    },
    {
      name: "l",
      label: "Länge",
      type: "unit",
      value: "300",
      unit: "m",
      description: "Länge des Drahtes",
      required: true,
    },
    {
      name: "d",
      label: "Durchmesser",
      type: "unit",
      value: "0.2",
      unit: "mm",
      description: "Drahtdruchmesser",
      required: true,
    },
  ],
};

export default async function aufgabeFunc(input) {
  const ρ = await ladeWerkstoff_wert(input.Material, "ρ");
  const α20 = await ladeWerkstoff_wert(input.Material, "α20");

  const W = new Componente([
    input,
    { Art: "W", Id: 1 },
    { ρ: ρ, α20: α20 },
    "Componente",
  ]);

  const PK = new Planemetrie(["KAd"]);
  const EK = new Elektro(["RρlA", "Rδ"]);

  W.berechnung["A"] = PK.berechne({ d: input.d }, "KAd");
  W.parameter["R20"] = EK.berechne(
    { ρ: ρ, l: input.l, A: W.berechnung["A"] },
    "RρlA",
  );
  W.berechnung["R1"] = EK.berechne(
    { R20: W.parameter["R20"], α20: α20, δ20: input.δ20, δ: input.δ20 },
    "Rδ",
  );
  W.berechnung["R2"] = EK.berechne(
    { R20: W.parameter["R20"], α20: α20, δ20: input.δ20, δ: input.δ75 },
    "Rδ",
  );
  W.berechnung["R3"] = EK.berechne(
    { R20: W.parameter["R20"], α20: α20, δ20: input.δ20, δ: input.δ8 },
    "Rδ",
  );

  return {
    meta,
    parameter: [
      {
        Kennzeichnung: W.kennzeichnung,
        Parameter: W.parameter,
        Eigenschaften: W.eigenschaften,
        Berechnung: {
          R1: W.berechnung["R1"],
          R2: W.berechnung["R2"],
          R3: W.berechnung["R3"],
        },
      },
    ],
  };
}

localstart(import.meta.url, meta, aufgabeFunc);
