import Componente from "../../componente.mjs";
import { Elektro } from "../../mathjs/elektro.mjs";
import { ladeWerkstoff_wert } from "../../module/utils.mjs";
import { localstart } from "../../module/localstart.mjs";

export let meta = {
  name: "A20",
  beschreibung: `An einer Magnetspule aus Kupferdraht liegt eine konstante Spannung.
Nach mehrstündigem Betrieb hat sich die Temperatur der Spule von 12celsius auf 60celsius erhöht.
Um wieviel Prozent ändert sich durch die Erwärmung der Strom in der Spule?`,
  felder: [
    {
      name: "Material",
      label: "Material",
      type: "string",
      value: "Cu",
      unit: "",
      description: "Drahtmaterial",
      required: true,
    },
    {
      name: "δ1",
      label: "Temperatur 1",
      type: "unit",
      value: "12",
      unit: "celsius",
      description: "Erste Temperatur der Spule",
      required: true,
    },
    {
      name: "δ2",
      label: "Temperatur 2",
      type: "unit",
      value: "60",
      unit: "celsius",
      description: "Zweite Temperatur der Spule",
      required: true,
    },
    {
      name: "δ20",
      label: "Vergleichstemperatur",
      type: "unit",
      value: "20",
      unit: "celsius",
      description: "Vergleichstemperatur (20celsius)",
      required: true,
    },
  ],
};
export default async function aufgabeFunc(input) {
  const α20 = await ladeWerkstoff_wert(input.Material, "α20");

  // Rpδ1δ2

  const L = new Componente([
    input,
    { Art: "L", Id: 1 },
    { α20: α20 },
    "Componente",
  ]);

  const EK = new Elektro(["Rpδ1δ2"]);

  L.berechnung["prozentuale Stromänderung"] = EK.berechne(
    { α20: α20, δ1: input.δ1, δ2: input.δ2, δ20: input.δ20 },
    "Rpδ1δ2",
  );

  return {
    meta,
    parameter: [
      {
        Kennzeichnung: L.kennzeichnung,
        Parameter: L.parameter,
        Eigenschaften: L.eigenschaften,
        Berechnung: {
          "prozentuale Stromänderung":
            L.berechnung["prozentuale Stromänderung"],
        },
      },
    ],
  };
}

localstart(import.meta.url, meta, aufgabeFunc);
