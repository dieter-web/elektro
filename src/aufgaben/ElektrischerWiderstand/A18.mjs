import Componente from "../../componente.mjs";
import { Elektro } from "../../mathjs/elektro.mjs";
import { Planemetrie } from "../../mathjs/geometrie.mjs";
import { ladeWerkstoff_wert } from "../../module/utils.mjs";
import { localstart } from "../../module/localstart.mjs";

export let meta = {
  name: "A18",
  beschreibung: `Ein Bleimantelkabel hat einen Außendurchmesser von 42mm. Der Bleimantel ist 4mm dick.
Der Widerstand des Bleimantel zwischen den Kabelenden beträgt 80mohm. Wie lang ist das Kabel?`,
  felder: [
    {
      name: "Material",
      label: "Material",
      type: "string",
      value: "Pb",
      unit: "",
      description: "Mantelmaterial des Kabels",
      required: true,
    },
    {
      name: "D",
      label: "Außendurchmesser",
      type: "unit",
      value: "42",
      unit: "mm",
      description: "Bleimantel Außendurchmesser",
      required: true,
    },
    {
      name: "s", // Verwendung der Arithmetik
      label: "Dicke",
      type: "unit",
      value: "4",
      unit: "mm",
      description: "Bleimantel Dicke",
      required: true,
    },
    {
      name: "R",
      label: "Widerstand",
      type: "unit",
      value: "80",
      unit: "mohm",
      description: "Widerstand des Bleimantels",
      required: true,
    },
  ],
};
export default async function aufgabeFunc(input) {
  const ρ = await ladeWerkstoff_wert(input.Material, "ρ");

  const W = new Componente([input, { Art: "W", Id: 1 }, { ρ }, "Componente"]);

  const PK = new Planemetrie(["KAd", "KRd", "KA"]);
  const EK = new Elektro(["lρra"]);

  W.parameter["Aa"] = PK.berechne({ d: input.D }, "KAd");
  W.parameter["d"] = PK.berechne({ D: input.D, s: input.s }, "KRd");
  W.parameter["Ai"] = PK.berechne({ d: W.parameter["d"] }, "KAd");
  W.parameter["A"] = PK.berechne(
    { Aa: W.parameter["Aa"], Ai: W.parameter["Ai"] },
    "KA",
  );
  W.berechnung["l"] = EK.berechne(
    { R: input.R, A: W.parameter["A"], ρ: ρ },
    "lρra",
  );

  return {
    meta,
    parameter: [
      {
        Kennzeichnung: W.kennzeichnung,
        Parameter: W.parameter,
        Eigenschaften: W.eigenschaften,
        Berechnung: { l: W.berechnung["l"] },
      },
    ],
  };
}

localstart(import.meta.url, meta, aufgabeFunc);
