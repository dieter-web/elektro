import Componente from "../../componente.mjs";
import { Elektro } from "../../mathjs/elektro.mjs";
import { Planemetrie } from "../../mathjs/geometrie.mjs";
import { ladeWerkstoff_wert } from "../../module/utils.mjs";
import { localstart } from "../../module/localstart.mjs";

export let meta = {
  name: "A9",
  beschreibung: `
		Es ist der Widerstand des Wolframdrahts einer Glühlampe bei 20°C und bei 2250°C (Betriebstemperatur der Lampe) zu bestimmen.
		Der Draht hat einen Durchmesser von 0.0245 mm und ist 36.5 cm lang.
	`,
  felder: [
    {
      name: "Material",
      label: "Material",
      type: "string",
      value: "W",
      unit: "",
      description: "Material des Glühlampendrahtes",
      required: true,
    },
    {
      name: "δ1",
      label: "Ausgangstemperatur",
      type: "unit",
      value: "20",
      unit: "celsius",
      description: "Normaltemperatur des Wolframdrahts",
      required: true,
    },
    {
      name: "δ2",
      label: "Betriebstemperatur",
      type: "unit",
      value: "2250",
      unit: "celsius",
      description: "Betriebstemperatur des Wolframdrahts",
      required: true,
    },
    {
      name: "d",
      label: "Durchmesser",
      type: "unit",
      value: "0.0245",
      unit: "mm",
      description: "Durchmesser des Wolframdrahts",
      required: true,
    },
    {
      name: "l",
      label: "Länge",
      type: "unit",
      value: "36.5",
      unit: "cm",
      description: "Länge des Wolframdrahts",
      required: true,
    },
  ],
};

export default async function aufgabeFunc(input) {
  const ρ = await ladeWerkstoff_wert(input.Material, "ρ");
  const α20 = await ladeWerkstoff_wert(input.Material, "α20");
  const β20 = await ladeWerkstoff_wert(input.Material, "β20");

  const W = new Componente([
    input,
    { Art: "W", Id: 1 },
    { α20: α20, β20: β20, ρ: ρ },
    "Componente",
  ]);

  const PK = new Planemetrie(["KAd"]);
  const EK = new Elektro(["RρlA", "R20", "RR1δ1δ2α20β20"]);

  W.berechnung["A"] = PK.berechne({ d: input.d }, "KAd");
  W.berechnung["R20"] = EK.berechne(
    { ρ: ρ, l: input.l, A: W.berechnung["A"] },
    "RρlA",
  );
  W.berechnung["R2250"] = EK.berechne(
    { β20: β20, α20: α20, δ2: input.δ2, δ1: input.δ1, R1: W.berechnung["R20"] },
    "RR1δ1δ2α20β20",
  );

  return {
    meta,
    parameter: [
      {
        Kennzeichnung: W.kennzeichnung,
        Parameter: W.parameter,
        Eigenschaften: W.eigenschaften,
        Berechnung: { R20: W.berechnung["R20"], R2250: W.berechnung["R2250"] },
      },
    ],
  };
}

localstart(import.meta.url, meta, aufgabeFunc);
