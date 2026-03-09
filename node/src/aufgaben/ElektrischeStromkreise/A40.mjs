// Modul: <A40.mjsFILENAME>
// Autor: Dieter
// Erstellt: 2025-10-23<DATUM>

import Componente from "../../componente.mjs";
import { Elektro } from "../../mathjs/elektro.mjs";
import { Arithmetik } from "../../mathjs/arithmetik.mjs";
import { localstart } from "../../module/localstart.mjs";

export let meta = {
  name: "A40",
  chart: false,
  beschreibung: `
  Ein Spannungsteilerwiderstand nach Bild hat einen Gesamtwiderstand R=1000ohm. Die Spannung
  U beträgt 24V. Wie groß sind die Ströme Ia und I2 bei den Schleiferstellungen v=0, 0.5, 1, wenn
  der Belastungswiderstand Ra zum einen 10kohm und zum anderen 100ohm beträgt?
  `,
  felder: [
    {
      name: "R",
      label: "R",
      type: "unit",
      value: "1000",
      unit: "ohm",
      description: "Gesamtwiderstand des Potentiometers",
      required: true,
    },
    {
      name: "U",
      label: "U",
      type: "unit",
      value: "24",
      unit: "V",
      description: "Eingangsspannung",
      required: true,
    },
    {
      name: "Ra_values",
      label: "Ra_values",
      type: "unit",
      value: [10000, 100],
      unit: "ohm",
      description: "Belastungswiderstände",
      required: true,
    },
    {
      name: "v_values",
      label: "v_values",
      type: "",
      value: [0, 0.5, 1],
      unit: "",
      description: "",
      required: true,
    },
  ],
};

export default async function aufgabeFunc(input) {
  const A1 = new Componente([
    {}, // input Werte müssen angepasst werden
    { Art: "A", Id: "1" },
    {},
    "Spannungsteiler",
  ]);

  const EK = new Elektro(["R1v", "R2v", "RgR1R2", "RgR1R2", "IUR"]);
  const AK = new Arithmetik(["add", "mul"]);

  const U = input.U;
  const R = input.R;

  const Ra_values = input.Ra_values.split(",").map((s) => {
    const match = s.match(/([\d.]+)\s*(\w*)/); // Zahl + optionale Einheit
    const value = match?.[1];
    const unit = match?.[2] || "ohm"; // Standard: 'ohm' ergänzen
    return `${value} ${unit}`;
  });

  const v_values = input.v_values.split(",").map((s) => {
    return parseFloat(s);
  });

  function calculateCurrents(pU, pR, pRa, pv) {
    const R1 = EK.berechne({ R: pR, v: pv }, "R1v");
    const R2 = EK.berechne({ R: pR, v: pv }, "R2v");
    const R2_parallel = EK.berechne({ R1: R2, R2: pRa }, "RgR1R2");
    const R_total = AK.berechne({ a: R1, b: R2_parallel }, "add");
    const bIa = EK.berechne({ U: pU, R: R_total }, "IUR");
    const bUa = AK.berechne({ a: pv, b: pU }, "mul");
    const bI2 = EK.berechne({ U: bUa, R: pRa }, "IUR");

    return {
      pv,
      Ra: pRa,
      R1: R1,
      R2: R2,
      R2_parallel: R2_parallel,
      R_total: R_total,
      Ua: bUa,
      Ia: bIa,
      I2: bI2,
    };
  }

  const results = [];

  Ra_values.map((Ra) => {
    v_values.map((v) => {
      results.push(calculateCurrents(U, R, Ra, v));
    });
  });

  // const results_length = results.length;

  return {
    meta,
    parameter: results.map((r) => ({
      Kennzeichnung: A1.kennzeichnung,
      Parameter: {
        v: r.pv,
        Ra: r.Ra,
        R1: r.R1,
        R2: r.R2,
        R2_parallel: r.R2_parallel,
        Ua: r.Ua,
      },
      Eigenschaften: {
        R_total: r.R_total,
      },
      Berechnung: {
        Ia: r.Ia,
        I2: r.I2,
      },
    })),
  };
}

localstart(import.meta.url, meta, aufgabeFunc);
