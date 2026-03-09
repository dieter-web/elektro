import Componente from "../../componente.mjs";
import { Planemetrie } from "../../mathjs/geometrie.mjs";
import { Rohrleitungstechnik } from "../../mathjs/rohrleitungstechnik.mjs";
import { ladeWerkstoff_wert } from "../../module/utils.mjs";
import { localstart } from "../../module/localstart.mjs";

export let meta = {
  name: "A3",
  beschreibung: `Wie lang ist ein Bleirohr, das einen Leitwert von 1285 S hat? Der Innendurchmesser d beträgt 2.5cm und der Außendurchmesser D 3cm. ρ=0.21(ohm mm^2)/m.
	               (wird über das Material eingelesen)`,
  felder: [
    {
      name: "Material",
      label: "Material",
      type: "string",
      value: "Pb",
      unit: "",
      description: "Rohrmaterial",
      require: true,
    },
    {
      name: "G",
      label: "G",
      type: "unit",
      value: "1285",
      unit: "S",
      description: "Leitwert des Rohrs",
      require: true,
    },
    {
      name: "d",
      label: "d",
      type: "unit",
      value: "2.5",
      unit: "cm",
      description: "Rohrinnendurchmesser",
      require: true,
    },
    {
      name: "D",
      label: "D",
      type: "unit",
      value: "3",
      unit: "cm",
      description: "Rohraussendurchmesser",
      require: true,
    },
  ],
};

export default async function aufgabeFunc(input) {
  const ρ = await ladeWerkstoff_wert(input.Material, "ρ");
  const Rohr = new Componente([
    input,
    { Art: "E", Id: 1 }, // Verschiedenes
    { ρ: ρ },
    "Componente",
  ]);

  const RK = new Rohrleitungstechnik(["lAρG"]);
  const PK = new Planemetrie(["KRADd"]);

  Rohr.parameter["A"] = PK.berechne({ d: input.d, D: input.D }, "KRADd");
  Rohr.berechnung["l"] = RK.berechne(
    { G: input.G, A: Rohr.parameter["A"], ρ: ρ },
    "lAρG",
  ).to("m");

  return {
    meta,
    parameter: [
      {
        Kennzeichnung: Rohr.kennzeichnung,
        Parameter: Rohr.parameter,
        Eigenschaften: Rohr.eigenschaften,
        Berechnung: { l: Rohr.berechnung["l"] },
      },
    ],
  };
}

localstart(import.meta.url, meta, aufgabeFunc);
