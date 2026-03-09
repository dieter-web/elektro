// Modul: <A41.mjsFILENAME>
// Autor: Dieter
// Erstellt: 2025-10-26<DATUM>

import Componente from "../../componente.mjs";
import { Elektro } from "../../mathjs/elektro.mjs";
import { Arithmetik } from "../../mathjs/arithmetik.mjs";
import { localstart } from "../../module/localstart.mjs";

export let meta = {
  name: "A41",
  chart: false,
  beschreibung: `
    An einem zunächst unbelasteten Spannungsteilerwiderstand von 20kohm liegt entsprechend Bild eine Spannung von 220V.
    Welche Spannung herrscht am Teilwiderstand 15kohm? Welche Spannung zeigt ein Meßinstrument an, das an den Teilwiderstand
    angeschlossen wird? Das Gerät hat einen Meßbereich von 250V, und bei Endausschlag fließt ein Strom von 25mA durch das 
    Instrument.
  `,
  felder: [
    {
      name: "Rg",
      label: "Rg",
      type: "unit",
      value: "20",
      unit: "kohm",
      description: "Spannungsteilerwiderstand",
      required: true,
    },
    {
      name: "U",
      label: "U",
      type: "unit",
      value: "220",
      unit: "V",
      description: "Spannung",
      required: true,
    },
    {
      name: "Rb",
      label: "Rb",
      type: "unit",
      value: "15",
      unit: "kohm",
      description: "Teilwiderstand",
      required: true,
    },
    {
      name: "Pmb",
      label: "Pmb",
      type: "unit",
      value: "250",
      unit: "V",
      description: "Meßinstrument Meßbereich",
      required: true,
    },
    {
      name: "Pie",
      label: "Pie",
      type: "unit",
      value: "25",
      unit: "mA",
      description: "Meßinstrument Strom bei Endausschlag",
      required: true,
    },
  ],
};

export default async function aufgabeFunc(input) {
  const A1 = new Componente([
    input,
    { Art: "A", Id: "1" },
    {},
    "Spannungsteilerwiderstand",
  ]);

  const EK = new Elektro(["UbURbRg", "RUI", "RgR1R2", "U_loaded", "ICombined"]);
  const AK = new Arithmetik(["sub"]);

  // TEST ICombined
  // let ICTest = EK.berechne({Q:'12A*s',t:'12s',U:'12V',R:'1kohm'}, 'ICombined')

  // R_top
  A1.parameter["Rt"] = AK.berechne({ a: input.Rg, b: input.Rb }, "sub");

  // Unbelastete Spannung am Teilwiderstand
  A1.berechnung["Ub"] = EK.berechne(
    { U: input.U, Rb: input.Rb, Rg: input.Rg },
    "UbURbRg",
  );

  // Innenwiderstand des Messgerätes
  A1.parameter["Rm"] = EK.berechne({ U: input.U, I: input.Pie }, "RUI");

  // Effektiver unterer R bei Parallelschaltung Rb || Rm
  A1.parameter["Rp"] = EK.berechne(
    { R1: input.Rb, R2: A1.parameter["Rm"] },
    "RgR1R2",
  );

  // Spannung am unteren Bündel bei Belastung
  A1.berechnung["U2"] = EK.berechne(
    { U: input.U, Rp: A1.parameter["Rp"], Rt: A1.parameter["Rt"] },
    "U_loaded",
  );

  return {
    meta,
    parameter: [
      {
        Kennzeichnung: A1.kennzeichnung,
        Parameter: A1.parameter,
        Eigenschaften: A1.eigenschaften,

        Berechnung: {
          Ub: A1.berechnung["Ub"],
          U2: A1.berechnung["U2"],
        },
      },
    ],
  };
}

localstart(import.meta.url, meta, aufgabeFunc);
