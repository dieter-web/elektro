import { create, all } from "mathjs";
const config = {
  epsilon: 1e-12,
  matrix: "Array",
  number: "number",
  precision: 64,
  predictable: false,
  randomSeed: null,
};
const math = create(all, config);
import { parseValue } from "../../module/utils.mjs";
import Componente from "../../componente.mjs";
import { localstart } from "../../module/localstart.mjs";

export let meta = {
  name: "A29",
  chart: false,
  beschreibung: `
	Die Widerstandswerte einer Reihenschaltung verhalten sich zueinander wie R1 : R2 : R3 = 2 : 4 : 6.
	Die Spannung am Widerstand R2 beträgt 18V.
	Wie groß ist die Gesamtspannung ?
	`,
  felder: [
    {
      name: "WV1",
      label: "WV1",
      type: "numeric",
      value: "2",
      unit: "",
      description: "Verhältnis für R1",
      required: true,
    },
    {
      name: "WV2",
      label: "WV2",
      type: "numeric",
      value: "4",
      unit: "",
      description: "Verhälnis für R2",
      required: true,
    },
    {
      name: "WV3",
      label: "WV3",
      type: "numeric",
      value: "6",
      unit: "",
      description: "Verhälnis für R3",
      required: true,
    },
    {
      name: "U_R2",
      label: "U_R2",
      type: "unit",
      value: "18",
      unit: "V",
      description: "Spannung am R2",
      required: true,
    },
  ],
};
export default async function aufgabeFunc(input) {
  const A1 = new Componente([input, { Art: "A", Id: 1 }, {}, "Componente"]);

  const WV1 = parseValue(input.WV1);
  const WV2 = parseValue(input.WV2);
  const WV3 = parseValue(input.WV3);

  // Gesamtsumme der Verhältnisse
  A1.parameter["sum"] = WV1 + WV2 + WV3; //12 // input.WV1 + input.WV2 + input.WV3

  // Verhältnis von R2 zu Gesamtsumme
  A1.parameter["ratioR2"] = math.fraction(input.WV2, A1.parameter["sum"]);

  // Gesamtspannung berechnen: U_ges = U_R2 / (4/12)
  A1.berechnung["U_ges"] = math.divide(
    math.unit(input.U_R2).value,
    A1.parameter["ratioR2"],
  );

  return {
    meta,
    parameter: [
      {
        Kennzeichnung: A1.kennzeichnung,
        Parameter: A1.parameter,
        Berechnung: {
          U_ges: `${A1.berechnung["U_ges"].toString()} V`,
        },
      },
    ],
  };
}

localstart(import.meta.url, meta, aufgabeFunc);
