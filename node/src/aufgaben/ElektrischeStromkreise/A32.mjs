import Componente from "../../componente.mjs";
import { Elektro } from "../../mathjs/elektro.mjs";
import { Arithmetik } from "../../mathjs/arithmetik.mjs";
import { localstart } from "../../module/localstart.mjs";

export let meta = {
  name: "A32",
  chart: false,
  beschreibung: `
	Ein Drehspulmeßwerk mit einem Meßbereich von 0.5V und einem Meßwerkwiderstand von 250ohm soll
	zu Spannungsmessungen bis zu 2.5V benutzt werden. Wie groß mß der vorzuschaltende Widerstand
	sein?
	`,
  felder: [
    {
      name: "Umesswerk",
      label: "Umesswerk",
      type: "unit",
      value: "0.5",
      unit: "V",
      description: "Messbereich des Drehspulmesswerkes",
      required: true,
    },
    {
      name: "Rmesswerk",
      label: "Rmesswerk",
      type: "unit",
      value: "250",
      unit: "ohm",
      description: "Innenwiderstand des Messwerks",
      required: true,
    },
    {
      name: "Uges",
      label: "Uges",
      type: "unit",
      value: "2.5",
      unit: "V",
      description: "Gewünschter Messbereich",
      required: true,
    },
  ],
};
export default async function aufgabeFunc(input) {
  const P = new Componente([input, { Art: "P", Id: 1 }, {}, "Componente"]);

  const EK = new Elektro(["IUR", "RUI"]);
  const AK = new Arithmetik(["sub"]);

  P.parameter["I"] = EK.berechne(
    { U: input.Umesswerk, R: input.Rmesswerk },
    "IUR",
  );
  P.parameter["Uvorwiderstand"] = AK.berechne(
    { a: input.Uges, b: input.Umesswerk },
    "sub",
  );
  P.berechnung["Rvor"] = EK.berechne(
    { U: P.parameter["Uvorwiderstand"], I: P.parameter["I"] },
    "RUI",
  );

  return {
    meta,
    parameter: [
      {
        Kennzeichnung: P.kennzeichnung,
        Parameter: P.parameter,
        Eigenschaften: P.eigenschaften,
        Berechnung: {
          Rvor: P.berechnung["Rvor"],
        },
      },
    ],
  };
}
localstart(import.meta.url, meta, aufgabeFunc);
