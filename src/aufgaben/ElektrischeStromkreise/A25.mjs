//import * as math from 'math.js'
import Componente from "../../componente.mjs";
import { Elektro } from "../../mathjs/elektro.mjs";
import { parseValue } from "../../module/utils.mjs";
import { localstart } from "../../module/localstart.mjs";

export let meta = {
  name: "A25",
  chart: false,
  beschreibung: `
	An der Reihenschaltung der Widerstände R1=120ohm, R2=75ohm, R3=85ohm und R4=60ohm
	liegt eine Gesamtspannung von 36V.
	Wie groß ist der Strom durch diese Reihenschaltung, und wie groß ist
	die Spannung am Widerstand R3?
	`,
  felder: [
    {
      name: "R1",
      label: "Widerstand",
      type: "unit",
      value: "120",
      unit: "ohm",
      description: "Widerstand 1",
      required: true,
    },
    {
      name: "R2",
      label: "Widerstand",
      type: "unit",
      value: "75",
      unit: "ohm",
      description: "Widerstand 2",
      required: true,
    },
    {
      name: "R3",
      label: "Widerstand",
      type: "unit",
      value: "85",
      unit: "ohm",
      description: "Widerstand 3",
      required: true,
    },
    {
      name: "R4",
      label: "Widerstand",
      type: "unit",
      value: "60",
      unit: "ohm",
      description: "Widerstand 4",
      required: true,
    },
    {
      name: "U",
      label: "Gesamtspannung",
      type: "unit",
      value: "36",
      unit: "V",
      description: "Gesamtspannung",
      required: true,
    },
  ],
};

export default async function aufgabeFunc(input) {
  const A = new Componente([input, { Art: "A", Id: 1 }, {}, "Componente"]);

  const EK = new Elektro([]);

  // Werte korrekt parsen
  const arrayR = [input.R1, input.R2, input.R3, input.R4].map(parseValue);
  // let U = 0;
  if (
    Array.isArray(input.U) &&
    input.U.length > 0 &&
    input.U[0].voltage !== undefined
  ) {
    // U = parseValue(input.U[0].voltage);
  } else if (typeof input.U === "string" || typeof input.U === "number") {
    // U = parseValue(input.U);
  }
  const arrayU = Array.isArray(input.U)
    ? input.U.map((u) => ({
        position: u.position,
        voltage: parseValue(u.voltage),
      }))
    : [{ position: 0, voltage: parseValue(input.U) }];

  const { currents, voltages } = EK.calculateSeriesWithSources({
    arrayR,
    arrayU,
  });

  A.eigenschaften["currents"] = currents.map((i) => i);
  A.eigenschaften["voltages"] = voltages.map((v) => v);

  // Muss noch mit math.js berechnet werden
  A.berechnung["U3"] = voltages[2].value - voltages[3].value;
  A.berechnung["I"] = A.eigenschaften["currents"][1];

  return {
    meta,
    parameter: [
      {
        Kennzeichnung: A.kennzeichnung,
        Parameter: A.parameter,
        Eigenschaften: A.eigenschaften,
        Berechnung: {
          I: A.berechnung["I"],
          U3: A.berechnung["U3"],
        },
      },
    ],
  };
}

localstart(import.meta.url, meta, aufgabeFunc);
