import Componente from "../../componente.mjs";
import { Elektro } from "../../mathjs/elektro.mjs";
import { Planemetrie } from "../../mathjs/geometrie.mjs";
import { ladeWerkstoff_wert } from "../../module/utils.mjs";
import { localstart } from "../../module/localstart.mjs";

export let meta = {
  name: "A11",
  beschreibung: `Welchen Widerstand hat eine 0.9mm diche und 3km lange Kupferleitung von rundem Querschnitt,
	die im Erdreich verlegt ist? Die Umgebungstemperatur beträgt -2celsius
	`,
  felder: [
    {
      name: "Material",
      label: "Material",
      type: "string",
      value: "Cu",
      unit: "",
      description: "Material der Leitung",
      required: true,
    },
    {
      name: "d",
      label: "d",
      type: "unit",
      value: "0.9",
      unit: "mm",
      description: "Durchmesser der Leitung",
      required: true,
    },
    {
      name: "l",
      label: "l",
      type: "unit",
      value: "3",
      unit: "km",
      description: "Länge der Leitung",
      required: true,
    },
    {
      name: "δ",
      label: "δ",
      type: "unit",
      value: "-2",
      unit: "celsius",
      description: "Umgebungstemperatur der Leitung",
      required: true,
    },
    {
      name: "δ20",
      label: "δ20",
      type: "unit",
      value: "20",
      unit: "celsius",
      description: "Temperatur von 20 celsius",
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

  W.parameter["A"] = PK.berechne({ d: input.d }, "KAd");
  W.parameter["R20"] = EK.berechne(
    { l: input.l, A: W.parameter["A"], ρ: W.parameter.ρ },
    "RρlA",
  );

  // Widerstand bei Umgebungstemperatur berechnen
  W.berechnung["R2"] = EK.berechne(
    { R20: W.parameter["R20"], α20: α20, δ: input.δ, δ20: input.δ20 },
    "Rδ",
  );

  return {
    meta,
    parameter: [
      {
        Kennzeichnung: W.kennzeichnung,
        Parameter: W.parameter,
        Eigenschaften: W.eigenschaften,
        Berechnung: { R2: W.berechnung["R2"] },
      },
    ],
  };
}

localstart(import.meta.url, meta, aufgabeFunc);
