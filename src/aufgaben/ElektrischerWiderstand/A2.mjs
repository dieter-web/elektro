import Componente from "../../componente.mjs";
import { Elektro } from "../../mathjs/elektro.mjs";
import { Planemetrie } from "../../mathjs/geometrie.mjs";

import { localstart } from "../../module/localstart.mjs";

export let meta = {
  name: "A2",
  beschreibung:
    "Wie groß ist der spezifische Widerstand eines 3km langen Drahtes mit 0.9mm Durchmesser, der einen Widerstand von 84,5ohm hat ?",
  felder: [
    {
      name: "l",
      label: "Länge",
      type: "unit",
      value: "3", // Neu, den Aufgabenwert eintragen
      unit: "km",
      description: "Drahtlänge",
      require: true,
    },
    {
      name: "d",
      label: "Durchmesser",
      type: "unit",
      value: "0.9", // Neu, den Aufgabenwert eintragen
      unit: "mm",
      description: "Drahtdurchmesser",
      require: true,
    },
    {
      name: "R",
      label: "R1",
      type: "unit",
      value: "84.5", // Neu, den Aufgabenwert eintragen
      unit: "ohm",
      description: "Drahtwiderstand",
      require: true,
    },
  ],
};

export default async function aufgabeFunc(input) {
  const EK = new Elektro(["ρRAl"]);
  const PK = new Planemetrie(["KAd"]);

  const W1 = new Componente([input, { Art: "W", Id: 1 }, {}, "Componente"]);

  W1.parameter["A"] = PK.berechne({ d: input.d }, "KAd");
  W1.berechnung["ρ"] = EK.berechne(
    { R: input.R, A: W1.parameter["A"], l: input.l },
    "ρRAl",
  ).to("(ohm mm^2)/m");

  return {
    meta,
    parameter: [
      {
        Kennzeichnung: W1.kennzeichnung,
        Parameter: W1.parameter,
        Eigenschaften: W1.eigenschaften,
        Berechnung: { ρ: W1.berechnung["ρ"] },
      },
    ],
  };
}

localstart(import.meta.url, meta, aufgabeFunc);
