import Componente from "../../componente.mjs";
//import { parseValue } from '../../module/utils.mjs'
import { Arithmetik } from "../../mathjs/arithmetik.mjs";
import { localstart } from "../../module/localstart.mjs";

export let meta = {
  name: "A28",
  chart: false,
  beschreibung: `
	Durch die Reihenschaltung von R1=8600ohm, R2=12400ohm und R3=10800ohm fließst ein Strom von
	12 mA.
	Wie groß sind die Spannungen an den Widerständen und die Gesamtspannung an der Reihenschaltung?
	`,
  felder: [
    {
      name: "R1",
      label: "R1",
      type: "unit",
      value: "8600",
      unit: "ohm",
      description: "Bestandteil der Reihenschaltung A1",
      required: true,
    },
    {
      name: "R2",
      label: "R2",
      type: "unit",
      value: "12400",
      unit: "ohm",
      description: "Bestandteil der Reihenschaltung A1",
      required: true,
    },
    {
      name: "R3",
      label: "R3",
      type: "unit",
      value: "10800",
      unit: "ohm",
      description: "Bestandteil der Reihenschaltung A1",
      required: true,
    },
    {
      name: "Ig",
      label: "Ig",
      type: "unit",
      value: "12",
      unit: "mA",
      description: "Gesamtstrom durch die Reihenschaltung A1",
      required: true,
    },
  ],
};
export default async function aufgabeFunc(input) {
  const A = new Componente([input, { Art: "A", Id: 1 }, {}, "Reihenschaltung"]);

  const AK = new Arithmetik(["mul", "add"]);

  A.berechnung["U1"] = AK.berechne({ a: input.Ig, b: input.R1 }, "mul");
  A.berechnung["U2"] = AK.berechne({ a: input.Ig, b: input.R2 }, "mul");
  A.berechnung["U3"] = AK.berechne({ a: input.Ig, b: input.R3 }, "mul");
  let U_1 = AK.berechne(
    { a: A.berechnung["U1"], b: A.berechnung["U2"] },
    "add",
  );
  A.berechnung["Ug"] = AK.berechne({ a: U_1, b: A.berechnung["U3"] }, "add");

  // Rechenweg als Leitwertmatrix-Ansatz dokumentieren
  A.berechnung["Rechenweg"] = `
Knotenleitwertmatrix (MNA) für Reihenschaltung:

G = [[g1+g2, -g2, 0], [-g2, g2+g3, -g3], [0, -g3, g3]]
mit g1=1/R1, g2=1/R2, g3=1/R3

Für Stromquelle I an Knoten 0:
U1 = I * R1
U2 = I * R2
U3 = I * R3
Ug = U1 + U2 + U3
Alle Spannungen ergeben sich direkt aus den Knotenspannungen:
U1 = V0 - V1, U2 = V1 - V2, U3 = V2 - V3 (V0=0, V3=0)
`;
  return {
    meta,
    parameter: [
      {
        Kennzeichnung: A.kennzeichnung,
        Parameter: A.parameter,
        Eigenschaften: A.eigenschaften,
        Berechnung: {
          U1: A.berechnung.U1,
          U2: A.berechnung.U2,
          U3: A.berechnung.U3,
          Ug: A.berechnung.Ug,
        },
      },
    ],
  };
}

localstart(import.meta.url, meta, aufgabeFunc);
