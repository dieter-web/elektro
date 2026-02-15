import Componente from "../../componente.mjs";
import { Elektro } from "../../mathjs/elektro.mjs";
import { Planemetrie } from "../../mathjs/geometrie.mjs";
import { ladeWerkstoff_wert } from "../../module/utils.mjs";
import { localstart } from "../../module/localstart.mjs";
export let meta = {
  name: "A17",
  beschreibung: `Ein Drehspulspannungsmesser hat einen Meßbereich von 300mV. Das rechteckige Spulenrähmchen
der Drehspule hat die Seitenlängen 2cm und 1cm und ist mit 200 Windungen Kupferdraht von 0.003mm Durchmesser
einlagig bewickelt. Wie groß ist der Strom, der durch das Meßgerät bei Endausschlag fließt?`,
  felder: [
    {
      name: "Material",
      label: "Material",
      type: "string",
      value: "Cu",
      unit: "",
      description: "Material der Drehspule",
      required: true,
    },
    {
      name: "d",
      label: "Durchmesser",
      type: "unit",
      value: "0.003",
      unit: "mm",
      description: "Durchmesser des Drehspulendrahtes",
      required: true,
    },
    {
      name: "N",
      label: "Windungen",
      type: "numeric",
      value: "200",
      unit: "",
      description: "Anzahl der Windungen der Drehspule",
      required: true,
    },
    {
      name: "U",
      label: "Meßbereich",
      type: "unit",
      value: "300",
      unit: "mV",
      description: "Meßbereich des Drehspulspannungsmesser",
      required: true,
    },
    {
      name: "a",
      label: "Länge",
      type: "unit",
      value: "2",
      unit: "cm",
      description: "Seitenlänge des Spulenrähmchen",
      required: true,
    },
    {
      name: "b",
      label: "Höhe",
      type: "unit",
      value: "1",
      unit: "cm",
      description: "Höhe des Spulenrähmchen",
      required: true,
    },
  ],
};
export default async function aufgabeFunc(input) {
  const ρ = await ladeWerkstoff_wert(input.Material, "ρ");

  const P = new Componente([
    input,
    { Art: "P", Id: 1 },
    { ρ: ρ },
    "Componente",
  ]);

  const PK = new Planemetrie(["l", "KAd"]);
  const EK = new Elektro("IρAlU");

  P.parameter["l"] = PK.berechne({ N: input.N, a: input.a, b: input.b }, "l");
  P.parameter["A"] = PK.berechne({ d: input.d }, "KAd");
  P.berechnung["I"] = EK.berechne(
    { U: input.U, A: P.parameter["A"], ρ: ρ, l: P.parameter["l"] },
    "IρAlU",
  );

  return {
    meta,
    parameter: [
      {
        Kennzeichnung: P.kennzeichnung,
        Parameter: P.parameter,
        Eigenschaften: P.eigenschaften,
        Berechnung: { I: P.berechnung["I"] },
      },
    ],
  };
}

localstart(import.meta.url, meta, aufgabeFunc);
