import Componente from "../../componente.mjs";
import { Elektro } from "../../mathjs/elektro.mjs";
import { Arithmetik } from "../../mathjs/arithmetik.mjs";
import { localstart } from "../../module/localstart.mjs";
export let meta = {
  name: "A36",
  chart: false,
  beschreibung: `
	Zwei parallelgeschaltete Widerstände haben die Werte R1=580kohm und R2=920kohm. Der Strom I2
	beträgt 6mA. Wie groß ist der Gesamtstrom?
	`,
  felder: [
    {
      name: "R1",
      label: "R1",
      type: "unit",
      value: "580",
      unit: "kohm",
      description: "Widerstand 1",
      required: true,
    },
    {
      name: "R2",
      label: "R2",
      type: "unit",
      value: "920",
      unit: "kohm",
      description: "Widerstand 2",
      required: true,
    },
    {
      name: "I2",
      label: "I2",
      type: "unit",
      value: "6",
      unit: "mA",
      description: "I durch R2",
      required: true,
    },
  ],
};
export default async function aufgabeFunc(input) {
  const A1 = new Componente([input, { Art: "A", Id: 1 }, {}, "Componente"]);

  const EK = new Elektro(["I1I2R1R2"]);
  const AK = new Arithmetik(["add"]);

  A1.parameter["I1"] = EK.berechne(
    { I2: input.I2, R1: input.R1, R2: input.R2 },
    "I1I2R1R2",
  );

  A1.berechnung["Ig"] = AK.berechne(
    { a: A1.parameter["I1"], b: input.I2 },
    "add",
  );

  return {
    meta,
    parameter: [
      {
        Kennzeichnung: A1.kennzeichnung,
        Parameter: A1.parameter,
        Eigenschaften: A1.eigenschaften,
        Berechnung: {
          Ig: A1.berechnung["Ig"],
        },
      },
    ],
  };
}

localstart(import.meta.url, meta, aufgabeFunc);
