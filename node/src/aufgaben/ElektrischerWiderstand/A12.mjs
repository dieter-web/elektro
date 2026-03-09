import { Elektro } from "../../mathjs/elektro.mjs";
import Componente from "../../componente.mjs";
import { ladeWerkstoff_wert } from "../../module/utils.mjs";
import { localstart } from "../../module/localstart.mjs";

export let meta = {
  name: "A12",
  beschreibung: `Wie groß ist die Temperaturkonstante δ0 für Gold-Chrom ())`,
  felder: [
    {
      name: "Material",
      label: "Material",
      type: "string",
      value: "AuCu",
      unit: "",
      description: "Berechnung der Temperaturkonstante",
      required: true,
    },
  ],
};

export default async function aufgabeFunc(input) {
  const α20 = await ladeWerkstoff_wert(input.Material, "α20");
  const δ20 = "20celsius";

  const M = new Componente([
    input,
    { Art: "M", Id: 1 },
    { α20: α20 },
    "Temperaturkonstante",
  ]);

  const EK = new Elektro(["δ0"]);

  M.berechnung["δ0"] = EK.berechne({ δ20: δ20, α20: α20 }, "δ0");

  return {
    meta,
    parameter: [
      {
        Kennzeichnung: M.kennzeichnung,
        Parameter: M.parameter,
        Eigenschaften: M.eigenschaften,
        Berechnung: { δ0: M.berechnung["δ0"] },
      },
    ],
  };
}

localstart(import.meta.url, meta, aufgabeFunc);
