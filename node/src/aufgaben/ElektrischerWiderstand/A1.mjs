// import path from 'path';
import Componente from "../../componente.mjs";
import { Elektro } from "../../mathjs/elektro.mjs";
import { localstart } from "../../module/localstart.mjs";

export let meta = {
  name: "A1",
  verzeichnis: "ElektrischerWiderstand",
  beschreibung: `Wie groß ist die Spannung, die an einem Widerstand liegt, dessen Leitwert 3*E-2 S beträgt und der von einem Strom der Stärke 600 mA durchflossen wird?`,
  felder: [
    {
      name: "G",
      label: "Leitwert",
      type: "unit",
      unit: "S",
      value: "3E-2",
      description: "Leitwert des Widerstands",
      required: true,
    },
    {
      name: "I",
      label: "Stromstärke",
      type: "unit",
      unit: "mA",
      value: "600",
      description: "Stromstärke, die den Widerstand durchfließt",
      required: true,
    },
  ],
};

export default async function aufgabeFunc(input) {
  const EK = new Elektro(["UIG"]);

  const R1 = new Componente([
    input, // Eigenschaften
    { Art: "R", Id: 1 }, // Kennzeichnung
    {}, // Parameter
    "Widerstand", // Typ
  ]);

  R1.berechnung["U"] = EK.berechne({ G: input.G, I: input.I }, "UIG");

  return {
    meta,
    parameter: [
      {
        Kennzeichnung: R1.kennzeichnung,
        Parameter: R1.parameter,
        Eigenschaften: R1.eigenschaften,
        Berechnung: { U: R1.berechnung["U"] },
      },
    ],
  };
}

localstart(import.meta.url, meta, aufgabeFunc);
