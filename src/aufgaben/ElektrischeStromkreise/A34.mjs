import Componente from "../../componente.mjs";
import { Arithmetik } from "../../mathjs/arithmetik.mjs";
import { localstart } from "../../module/localstart.mjs";
export let meta = {
  name: "A34",
  chart: false,
  beschreibung: `
	Der Gesamtwiderstand zweier parallelgeschalteter Widerstände beträgt 2.8Mohm.
	Wie groß sind die beiden Widerstände, wenn der eine 1.4mal so groß ist wie der andere?
	`,
  felder: [
    {
      name: "Rges",
      label: "Rges",
      type: "unit",
      value: "2.8",
      unit: "Mohm",
      description: "Gesamtwiderstand",
      required: true,
    },
    {
      name: "k",
      label: "k",
      type: "numeric",
      value: "1.4",
      unit: "",
      description: "Verhältnis R1 = k * R2",
      required: true,
    },
  ],
};
export default async function aufgabeFunc(input) {
  const A1 = new Componente([input, { Art: "A", Id: 1 }, {}, "Componente"]);

  const AK = new Arithmetik(["mul", "add", "div"]);

  A1.parameter["T1"] = AK.berechne({ a: 1, b: input.k }, "add");

  A1.parameter["factor"] = AK.berechne(
    { a: A1.parameter["T1"], b: input.k },
    "div",
  );

  A1.berechnung["_R2"] = AK.berechne(
    { a: A1.parameter["factor"], b: input.Rges },
    "mul",
  );
  A1.berechnung["_R1"] = AK.berechne(
    { a: input.k, b: A1.berechnung["_R2"] },
    "mul",
  );

  return {
    meta,
    parameter: [
      {
        Kennzeichnung: A1.kennzeichnung,
        Parameter: A1.parameter,
        Eigenschaften: A1.eigenschaften,
        Berechnung: {
          R1: A1.berechnung["_R1"],
          R2: A1.berechnung["_R2"],
        },
      },
    ],
  };
}
localstart(import.meta.url, meta, aufgabeFunc);
