import Componente from "../../componente.mjs";
import { Elektro } from "../../mathjs/elektro.mjs";
import { Arithmetik } from "../../mathjs/arithmetik.mjs";
import { localstart } from "../../module/localstart.mjs";
export let meta = {
  name: "A35",
  chart: false,
  beschreibung: `
	Von drei parallelgeschalteten Widerständen sind R1=820ohm und R2=645ohm groß.Die Spannung
	beträgt 48V. Der Gesamtstrom beträgt 200mA. Wie groß ist Ra?
	`,
  felder: [
    {
      name: "R1",
      label: "R1",
      type: "unit",
      value: "820",
      unit: "ohm",
      description: "R1",
      required: true,
    },
    {
      name: "R2",
      label: "R2",
      type: "unit",
      value: "645",
      unit: "ohm",
      description: "R2",
      required: true,
    },
    {
      name: "Ug",
      label: "Ug",
      type: "unit",
      value: "48",
      unit: "V",
      description: "Gesamtspannung",
      required: true,
    },
    {
      name: "Ig",
      label: "Ig",
      type: "unit",
      value: "200",
      unit: "mA",
      description: "Gesamtstrom",
      required: true,
    },
  ],
};
export default async function aufgabeFunc(input) {
  const A1 = new Componente([input, { Art: "A", Id: 1 }, {}, "Componente"]);

  const EK = new Elektro(["IUR", "RUI"]);
  const AK = new Arithmetik(["sub", "add", "div"]);

  new Array("R1", "R2").reduce((acc, key) => {
    acc[`I${key.slice(1)}`] = EK.berechne(
      { U: input.Ug, R: input[key] },
      "IUR",
    );
    return acc;
  }, A1.parameter);

  /* 2.Variante
	new Array('R1','R2').forEach(key => {
		A1.parameter[`I${key.slice(1)}`] = EK.berechne({ U: input.Ug, R: input[key] }, 'IUR')
	})
	*/

  A1.berechnung["Ra"] = AK.berechne(
    {
      a: input.Ug,
      b: AK.berechne(
        {
          a: input.Ig,
          b: AK.berechne(
            {
              a: A1.parameter["I1"],
              b: A1.parameter["I2"],
            },
            "add",
          ),
        },
        "sub",
      ),
    },
    "div",
  );

  //	A1.parameter['I12'] = AK.berechne({ a: A1.parameter['I1'], b: A1.parameter['I2'] }, 'add')
  //	A1.parameter['I_Ra'] = AK.berechne({ a: input.Ig, b: A1.parameter['I12'] }, 'sub')
  //	A1.berechnung['Ra'] = AK.berechne({ a: input.Ug, b: A1.parameter['I_Ra'] }, 'div')

  return {
    meta,
    parameter: [
      {
        Kennzeichnung: A1.kennzeichnung,
        Parameter: A1.parameter,
        Eigenschaften: A1.eigenschaften,
        Berechnung: {
          Ra: A1.berechnung["Ra"],
        },
      },
    ],
  };
}

localstart(import.meta.url, meta, aufgabeFunc);
