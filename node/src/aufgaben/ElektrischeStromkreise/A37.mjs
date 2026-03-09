import Componente from "../../componente.mjs";
import { Elektro } from "../../mathjs/elektro.mjs";
import { Arithmetik } from "../../mathjs/arithmetik.mjs";
import { localstart } from "../../module/localstart.mjs";
export let meta = {
  name: "A37",
  chart: false,
  beschreibung: `
	Gegeben ist eine Schaltung (Bild 2.20). Die Widerstände haben folgende Werte: R1=30ohm,
	R2=13ohm, R3=7ohm, R4=90ohm, R5=45ohm, R6=30ohm. Die Spannung U beträgt 13.5V.
	Wie groß sind die Ströme in den einzelnen Widerständen?
	`,
  felder: [
    {
      name: "R1",
      label: "R1",
      type: "unit",
      value: "30",
      unit: "ohm",
      description: "R1",
      required: true,
    },
    {
      name: "R2",
      label: "R2",
      type: "unit",
      value: "13",
      unit: "ohm",
      description: "R2",
      required: true,
    },
    {
      name: "R3",
      label: "R3",
      type: "unit",
      value: "7",
      unit: "ohm",
      description: "R3",
      required: true,
    },
    {
      name: "R4",
      label: "R4",
      type: "unit",
      value: "90",
      unit: "ohm",
      description: "R4",
      required: true,
    },
    {
      name: "R5",
      label: "R5",
      type: "unit",
      value: "45",
      unit: "ohm",
      description: "R5",
      required: true,
    },
    {
      name: "R6",
      label: "R6",
      type: "unit",
      value: "30",
      unit: "ohm",
      description: "R6",
      required: true,
    },
    {
      name: "U",
      label: "U",
      type: "unit",
      value: "13.5",
      unit: "V",
      description: "Gesamtspannung",
      required: true,
    },
  ],
};
export default async function aufgabeFunc(input) {
  const A1 = new Componente([input, { Art: "A", Id: 1 }, {}, "Componente"]);

  const EK = new Elektro(["IUR", "I1IgR1R2", "U2UR1R2"]);
  const AK = new Arithmetik(["sub"]);

  const { R1, R2, R3, R4, R5, R6 } = input;

  A1.parameter["R2R3"] = EK.RgesReihenschaltung([R2, R3]);
  A1.parameter["Rp1"] = EK.RgesParallelschaltung([A1.parameter["R2R3"], R1]);
  A1.parameter["Rp2"] = EK.RgesParallelschaltung([R4, R5, R6]);
  A1.parameter["Rges"] = EK.RgesReihenschaltung([
    A1.parameter["Rp1"],
    A1.parameter["Rp2"],
  ]);
  A1.parameter["I"] = EK.berechne(
    { U: input.U, R: A1.parameter["Rges"] },
    "IUR",
  );

  // I1 nach Stromteilerregel
  A1.berechnung["IR1"] = EK.berechne(
    { I: A1.parameter["I"], R1: input.R1, R2: A1.parameter["R2R3"] },
    "I1IgR1R2",
  );
  A1.berechnung["IR2"] = AK.berechne(
    { a: A1.parameter["I"], b: A1.berechnung["IR1"] },
    "sub",
  );

  // U2 nach Spannungsteilerregel
  A1.parameter["U2"] = EK.berechne(
    { U: input.U, R2: A1.parameter["Rp2"], R1: A1.parameter["Rp1"] },
    "U2UR1R2",
  );

  // Ohmsche Gesetz
  A1.berechnung["IR4"] = EK.berechne(
    { U: A1.parameter["U2"], R: input.R4 },
    "IUR",
  );
  A1.berechnung["IR5"] = EK.berechne(
    { U: A1.parameter["U2"], R: input.R5 },
    "IUR",
  );
  A1.berechnung["IR6"] = EK.berechne(
    { U: A1.parameter["U2"], R: input.R6 },
    "IUR",
  );

  return {
    meta,
    parameter: [
      {
        Kennzeichnung: A1.kennzeichnung,
        Parameter: A1.parameter,
        Eigenschaften: A1.eigenschaften,
        Berechnung: {
          ...Array("IR1", "IR2", "IR4", "IR5", "IR6").reduce((acc, key) => {
            acc[key] = A1.berechnung[key];
            return acc;
          }, {}),
        },
      },
    ],
  };
}

localstart(import.meta.url, meta, aufgabeFunc);
