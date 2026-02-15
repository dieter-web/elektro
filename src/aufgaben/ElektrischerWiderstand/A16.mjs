import Componente from "../../componente.mjs";
import { Elektro } from "../../mathjs/elektro.mjs";
import { Planemetrie } from "../../mathjs/geometrie.mjs";
import { ladeWerkstoff_wert } from "../../module/utils.mjs";
import { localstart } from "../../module/localstart.mjs";

export let meta = {
  name: "A16",
  beschreibung: `Zwischen zwei Metallplatten mit einer Fläche von je 0.8m x 1.25m befindet sich eine 1mm dicke,
gleich große Glasplatte. Wie groß ist der Widerstand zwischen den Metallplatten?`,
  felder: [
    {
      name: "Material",
      label: "Material",
      type: "string",
      value: "G",
      unit: "",
      description: "Glasplatte zwischen den Metallplatten",
      required: true,
    },
    {
      name: "g",
      label: "Länge",
      type: "unit",
      value: "1.25",
      unit: "m",
      description: "Länge der Metallplatte",
      required: true,
    },
    {
      name: "h",
      label: "Höhe",
      type: "unit",
      value: "0.8",
      unit: "m",
      description: "Höhe der Metallplatte",
      required: true,
    },
    {
      name: "l",
      label: "Dicke",
      type: "unit",
      value: "1",
      unit: "mm",
      description: "Dicke der Glasplatte",
      required: true,
    },
  ],
};
export default async function aufgabeFunc(input) {
  const ρ = await ladeWerkstoff_wert(input.Material, "ρ");

  const Glasplatte = new Componente([
    input,
    { Art: "Glasplatte", Id: 1 },
    { ρ: ρ },
    "Componente",
  ]);

  const PK = new Planemetrie(["RAgh"]);
  const EK = new Elektro(["RρlA"]);

  Glasplatte.parameter["A"] = PK.berechne({ g: input.g, h: input.h }, "RAgh");
  Glasplatte.berechnung["R"] = EK.berechne(
    { ρ: ρ, l: input.l, A: Glasplatte.parameter["A"] },
    "RρlA",
  );

  return {
    meta,
    parameter: [
      {
        Kennzeichnung: Glasplatte.kennzeichnung,
        Parameter: Glasplatte.parameter,
        Eigenschaften: Glasplatte.eigenschaften,
        Berechnung: { R: Glasplatte.berechnung["R"] },
      },
    ],
  };
}

localstart(import.meta.url, meta, aufgabeFunc);
