import Componente from "../../componente.mjs";
import { Elektro } from "../../mathjs/elektro.mjs";
import { Planemetrie } from "../../mathjs/geometrie.mjs";
import { Arithmetik } from "../../mathjs/arithmetik.mjs";
import { ladeWerkstoff_wert } from "../../module/utils.mjs";
import { localstart } from "../../module/localstart.mjs";

export let meta = {
  name: "A14",
  beschreibung: `Eine Kupferleitung (Litze), die aus mehreren verdrillten, dünnen Einzeldrähten besteht, ist 8m lang
und hat einen Widerstand von 1.58ohm. Der Durchmesser eines Einzeldrahtes beträgt 0.08mm. Aus wieviel Drähten besteht
die Litze?`,
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
      name: "l",
      label: "Länge",
      type: "unit",
      value: "8",
      unit: "m",
      description: "Länge der Leitung",
      required: true,
    },
    {
      name: "R",
      label: "Widerstand",
      type: "unit",
      value: "1.58",
      unit: "ohm",
      description: "Widerstand der Leitung",
      required: true,
    },
    {
      name: "d",
      label: "Durchmesser",
      type: "unit",
      value: "0.08",
      unit: "mm",
      description: "Durchmesser eines Einzeldrahtes der Leitung",
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

  const PK = new Planemetrie(["KAd"]);
  const EK = new Elektro("AρlR");
  const AK = new Arithmetik("div");

  W.parameter["Ae"] = PK.berechne({ d: input.d }, "KAd");
  W.parameter["Ages"] = EK.berechne({ ρ: ρ, l: input.l, R: input.R }, "AρlR");
  W.berechnung["N"] = AK.berechne(
    { a: W.parameter["Ages"], b: W.parameter["Ae"] },
    "div",
  );

  return {
    meta,
    parameter: [
      {
        Kennzeichnung: W.kennzeichnung,
        Parameter: W.parameter,
        Eigenschaften: W.eigenschaften,
        Berechnung: { N: W.berechnung["N"] },
      },
    ],
  };
}

localstart(import.meta.url, meta, aufgabeFunc);
