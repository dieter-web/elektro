// TODO: Ungenau, weil etwas nicht stimmt ??

import Componente from "../../componente.mjs";
import { Elektro } from "../../mathjs/elektro.mjs";
import { Arithmetik } from "../../mathjs/arithmetik.mjs";
import { localstart } from "../../module/localstart.mjs";

export let meta = {
  name: "A38",
  chart: false,
  beschreibung: `
	Die Widerstände der Kettenschaltung nach Bild2.23 haben folgende Werte:
	R1=30ohm, R2=70ohm, R3=20ohm, R4=160ohm, R5=40ohm, R6=80ohm, R7=120ohm.
	Die Spannung U beträgt 24V.
	Wieviel Prozent beträgt die Spannung U7, wenn U=100% gesetzt wird
	Außerdem ist der Prozentbetrag vom Strom I7 zu bestimmen, wenn man I1=100% setzt.
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
      value: "70",
      unit: "ohm",
      description: "R2",
      required: true,
    },
    {
      name: "R3",
      label: "R3",
      type: "unit",
      value: "20",
      unit: "ohm",
      description: "R3",
      required: true,
    },
    {
      name: "R4",
      label: "R4",
      type: "unit",
      value: "160",
      unit: "ohm",
      description: "R4",
      required: true,
    },
    {
      name: "R5",
      label: "R5",
      type: "unit",
      value: "40",
      unit: "ohm",
      description: "R5",
      required: true,
    },
    {
      name: "R6",
      label: "R6",
      type: "unit",
      value: "80",
      unit: "ohm",
      description: "R6",
      required: true,
    },
    {
      name: "R7",
      label: "R7",
      type: "unit",
      value: "120",
      unit: "ohm",
      description: "R7",
      required: true,
    },
    {
      name: "U",
      label: "U",
      type: "unit",
      value: "24",
      unit: "V",
      description: "Gesamtspannung",
      required: true,
    },
  ],
};
export default async function aufgabeFunc(input) {
  const A1 = new Componente([input, { Art: "A", Id: 1 }, {}, "Componente"]);

  const EK = new Elektro(["RgR1R2", "U2UR1R2", "IUR"]);
  const AK = new Arithmetik(["add", "Prozentsatz"]);

  // 1. Bestimmung von Rges

  A1.parameter["R67"] = AK.berechne({ a: input.R6, b: input.R7 }, "add");
  A1.parameter["REF"] = EK.berechne(
    { R1: A1.parameter["R67"], R2: input.R4 },
    "RgR1R2",
  );
  A1.parameter["RCD__"] = AK.berechne(
    { a: A1.parameter["REF"], b: input.R3 },
    "add",
  );
  A1.parameter["RCD_"] = AK.berechne(
    { a: A1.parameter["RCD__"], b: input.R5 },
    "add",
  );
  A1.parameter["RCD"] = EK.berechne(
    { R1: A1.parameter["RCD_"], R2: input.R2 },
    "RgR1R2",
  );
  A1.parameter["Rges"] = AK.berechne(
    { a: A1.parameter["RCD"], b: input.R1 },
    "add",
  );

  // 2. Berechnung der Spannungsverhältnisse
  // U2UR1R2
  A1.parameter["U2"] = EK.berechne(
    { U: input.U, R2: A1.parameter["RCD"], R1: input.R1 },
    "U2UR1R2",
  );

  A1.parameter["U4"] = EK.berechne(
    {
      U: A1.parameter["U2"],
      R2: A1.parameter["REF"],
      R1: AK.berechne({ a: input.R3, b: input.R5 }, "add"),
    },
    "U2UR1R2",
  );

  A1.parameter["U7"] = EK.berechne(
    {
      U: A1.parameter["U4"],
      R2: input.R7,
      R1: input.R6,
    },
    "U2UR1R2",
  );

  // U7 in Prozent von U ausdrücken
  A1.berechnung["U7p"] = AK.berechne(
    { P: A1.parameter["U7"], G: input.U },
    "Prozentsatz",
  );

  //3. Berechnung der Stromverhältnisse
  A1.parameter["I7"] = EK.berechne(
    { U: A1.parameter["U7"], R: input.R7 },
    "IUR",
  );
  A1.parameter["Ig"] = EK.berechne(
    { U: input.U, R: A1.parameter["Rges"] },
    "IUR",
  );

  A1.berechnung["I7p"] = AK.berechne(
    { P: A1.parameter["I7"], G: A1.parameter["Ig"] },
    "Prozentsatz",
  );

  return {
    meta,
    parameter: [
      {
        Kennzeichnung: A1.kennzeichnung,
        Parameter: A1.parameter,
        Eigenschaften: A1.eigenschaften,
        Berechnung: {
          U7p: A1.berechnung["U7p"],
          I7p: A1.berechnung["I7p"],
        },
      },
    ],
  };
}
localstart(import.meta.url, meta, aufgabeFunc);
