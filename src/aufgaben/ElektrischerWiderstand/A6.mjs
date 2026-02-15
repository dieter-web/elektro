import Componente from "../../componente.mjs";
import { Elektro } from "../../mathjs/elektro.mjs";
import { ladeWerkstoff_wert } from "../../module/utils.mjs";
import { localstart } from "../../module/localstart.mjs";

export let meta = {
  name: "A6",
  beschreibung: `Auf einer Spule sind 870m Cu-Draht gewickelt. Wie groß ist die Stromdichte im Wickeldraht,
	wenn an die Spule eine Spannung von 24V angelegt wird? Angabe in A/mm²
	`,
  felder: [
    {
      name: "Material",
      label: "Material",
      type: "string",
      value: "Cu",
      unit: "",
      description: "Material des Spulendrahtes",
      required: true,
    },
    {
      name: "l",
      label: "Länge",
      type: "number",
      value: "870",
      unit: "m",
      description: "Länge des Spulendrahtes",
      required: true,
    },
    {
      name: "U",
      label: "Spannung an der Spule",
      type: "number",
      value: "24",
      unit: "V",
      description: "Angelegte Gleichspannung an die Spule",
      required: true,
    },
  ],
};

export default async function aufgabeFunc(input) {
  const ρ = await ladeWerkstoff_wert(input.Material, "ρ");

  const L = new Componente([
    input,
    { Art: "L", Id: 1 },
    { ρ: ρ },
    "Componente",
  ]);

  const EK = new Elektro(["SUρl"]);

  L.berechnung["S"] = EK.berechne({ ρ: ρ, l: input.l, U: input.U }, "SUρl").to(
    "A/mm^2",
  );

  return {
    meta,
    parameter: [
      {
        Kennzeichnung: L.kennzeichnung,
        Parameter: L.parameter,
        Eigenschaften: L.eigenschaften,
        Berechnung: { S: L.berechnung["S"] },
      },
    ],
  };
}

localstart(import.meta.url, meta, aufgabeFunc);
