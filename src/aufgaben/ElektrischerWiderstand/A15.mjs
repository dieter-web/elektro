import Componente from "../../componente.mjs";
import { Elektro } from "../../mathjs/elektro.mjs";
import { localstart } from "../../module/localstart.mjs";

export let meta = {
  name: "A15",
  beschreibung: `Ein Strommesser hat einen Widerstand von 2.5ohm. Bei Endausschlag liegt an seinen Klemmen eine
Spannung von 0.625V. Wie groß ist der Meßbereich`,
  felder: [
    {
      name: "R",
      label: "Widerstand",
      type: "unit",
      value: "2.5",
      unit: "ohm",
      description: "Innenwiderstand",
      required: true,
    },
    {
      name: "U",
      label: "Endausschlag",
      type: "unit",
      value: "0.625",
      unit: "V",
      description: "Anliegende Spannung bei Endausschlag",
      required: true,
    },
  ],
};
export default async function aufgabeFunc(input) {
  const P = new Componente([input, { Art: "P", Id: 1 }, {}, "Componente"]);

  const EK = new Elektro(["IUR"]);
  P.berechnung["Messbereich"] = EK.berechne({ U: input.U, R: input.R }, "IUR");

  return {
    meta,
    parameter: [
      {
        Kennzeichnung: P.kennzeichnung,
        Parameter: P.parameter,
        Eigenschaften: P.eigenschaften,
        Berechnung: { Messbereich: P.berechnung["Messbereich"] },
      },
    ],
  };
}

localstart(import.meta.url, meta, aufgabeFunc);
