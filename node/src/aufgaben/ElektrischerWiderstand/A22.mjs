import Componente from "../../componente.mjs";
import { Elektro } from "../../mathjs/elektro.mjs";
import { Arithmetik } from "../../mathjs/arithmetik.mjs";
import { ladeWerkstoff_wert } from "../../module/utils.mjs";
import { localstart } from "../../module/localstart.mjs";

export let meta = {
  name: "A22",
  beschreibung: `
	An die Kupferadern eines zweiadrigen, zwischen den Orten A und B im Erdreich 
	verlegten Kabels wird in A eine Spannung von 24V gelegt. 
	Am Ort B werden die Adern kurzgeschlossen. Die Stromdichte ist bei einer
    Temperatur von 20 celsius 50mA/mm² groß. Wie lang ist das Kabel?

	Bei einer späteren Messung am gleichen Kabel ist infolge Temperaturänderung 
	die Stromdichte um 10% gestiegen.Welche Temperatur hat das Kabel bei dieser Messung?
`,
  felder: [
    {
      name: "Material",
      label: "Material",
      type: "string",
      value: "Cu",
      unit: "",
      description: "Material der Kabeladern",
      required: true,
    },
    {
      name: "U",
      label: "Gleichspannung",
      type: "unit",
      value: "24",
      unit: "V",
      description: "Spannung welche am Kabel anliegt",
      required: true,
    },
    {
      name: "S",
      label: "Stromdichte",
      type: "unit",
      value: "50",
      unit: "mA/mm^2",
      description: "Stromdichte bei δ20",
      required: true,
    },
    {
      name: "p",
      label: "Prozentsatz",
      type: "numeric",
      value: "10",
      unit: "",
      description: "Prozentsatz von S",
      required: true,
    },
    {
      name: "δ20",
      label: "Temperatur",
      type: "unit",
      value: "20",
      unit: "celsius",
      description: "Temperatur",
      required: true,
    },
    {
      name: "n",
      label: "Aderanzahl",
      type: "numeric",
      value: "2",
      unit: "",
      description: "Anzahl der Adern der Kabels",
      required: true,
    },
  ],
};
// Ergebnis stimmt nicht
export default async function aufgabeFunc(input) {
  const κ = await ladeWerkstoff_wert(input.Material, "κ");
  const α20 = await ladeWerkstoff_wert(input.Material, "α20"); // richtig ??? Ergebnis stimmt nicht !
  const W = new Componente([
    input,
    { Art: "W", Id: 1 },
    { κ: κ },
    "Componente",
  ]);

  const EK = new Elektro(["lκus", "lnκus", "κlsu", "Δδ"]);
  const AK = new Arithmetik(["Prozentwert", "sub"]);

  W.berechnung["Drahtlänge"] = EK.berechne(
    { U: input.U, κ: κ, S: input.S },
    "lκus",
  );
  W.berechnung["Kabellänge"] = EK.berechne(
    { U: input.U, κ: κ, S: input.S, n: input.n },
    "lnκus",
  );
  W.parameter["S1"] = AK.berechne({ p: input.p, G: input.S }, "Prozentwert");
  W.parameter["κ1"] = EK.berechne(
    { l: W.berechnung["Drahtlänge"], S: W.parameter["S1"], U: input.U },
    "κlsu",
  );
  W.parameter["Δδ"] = EK.berechne(
    { κ: κ, κ1: W.parameter["κ1"], α20: α20 },
    "Δδ",
  );
  W.berechnung["Kabeltemperatur"] = AK.berechne(
    { a: input.δ20, b: W.parameter["Δδ"] },
    "sub",
  );

  return {
    meta,
    parameter: [
      {
        Kennzeichnung: W.kennzeichnung,
        Parameter: W.parameter,
        Eigenschaften: W.eigenschaften,
        Berechnung: {
          Drahtlänge: W.berechnung["Drahtlänge"],
          Kabellänge: W.berechnung["Kabellänge"],
          Kabeltemperatur: W.berechnung["Kabeltemperatur"],
        },
      },
    ],
  };
}

localstart(import.meta.url, meta, aufgabeFunc);
