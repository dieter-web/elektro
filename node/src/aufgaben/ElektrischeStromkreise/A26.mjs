import Componente from "../../componente.mjs";
import { parseValue } from "../../module/utils.mjs";
import { localstart } from "../../module/localstart.mjs";

export let meta = {
  name: "A26",
  chart: true,
  beschreibung: `
	Eine Spannungsquelle mit einer Quellspannung von 12 V hat einen Innenwiderstand von 5 ohm.
	An sie angeschlossen ist ein Stellwiderstand, der zwischen 0 ohm und 45 ohm stufenlos einstellbar ist.
	Zu berechnen sind der Strom und die Klemmenspannung als Funktion des Belastungswiderstandes I=f(Ra) und
	Ua = f(Ra)`,
  felder: [
    {
      name: "U12",
      label: "Quellspannung",
      type: "unit",
      value: "12",
      unit: "V",
      description: "Quellspannung",
      required: true,
    },
    {
      name: "Ri",
      label: "Innenwiderstand",
      type: "unit",
      value: "5",
      unit: "ohm",
      description: "Innenwiderstand der Quellspannung",
      required: true,
    },
    {
      name: "Ra",
      label: "Stellwiderstand",
      type: "unit",
      value: "45",
      unit: "ohm",
      description: "Stellwiderstand von 0 bis 45 ohm",
      required: true,
    },
  ],
};

export default async function aufgabeFunc(input) {
  const A = new Componente([input, { Art: "A", Id: 1 }, {}, "Componente"]);

  const Uq = parseValue(input.U12); // Quellspannung in V
  const Ri = parseValue(input.Ri); // Innenwiderstand in Ohm

  A.parameter["Ra_min"] = 0;
  A.parameter["Ra_max"] = parseValue(input.Ra);
  A.parameter["steps"] = 20;

  A.berechnung["I_f_Ra"] = [];
  A.berechnung["Ua_f_Ra"] = [];

  let results = [];

  for (let i = 0; i <= A.parameter["steps"]; i++) {
    // Ra als Zahl sicherstellen
    const Ra = parseFloat(
      (
        A.parameter["Ra_min"] +
        ((A.parameter["Ra_max"] - A.parameter["Ra_min"]) * i) /
          A.parameter["steps"]
      ).toFixed(4),
    );
    const I = Uq / (Ri + Ra);
    const Ua = I * Ra;
    A.berechnung["I_f_Ra"].push([Ra, I]);
    A.berechnung["Ua_f_Ra"].push([Ra, Ua]);

    results.push({ Ra, I, Ua });
  }

  // Korrekte Referenz auf berechnete Arrays
  const maxI = Math.max(...A.berechnung["I_f_Ra"].map((p) => p[1]));
  const maxUa = Math.max(...A.berechnung["Ua_f_Ra"].map((p) => p[1]));
  const yMax = Math.max(maxI, maxUa, Uq);

  return {
    meta,
    parameter: results.map((r) => ({
      Kennzeichnung: A.kennzeichnung,
      Parameter: {
        Ra: r.Ra,
      },
      Eigenschaften: {},
      Berechnung: {
        I: r.I,
        Ua: r.Ua,
      },
    })),
    chartData: {
      curves: [
        { label: "I(Ra)", color: "blue", points: A.berechnung["I_f_Ra"] },
        { label: "Ua(Ra)", color: "red", points: A.berechnung["Ua_f_Ra"] },
      ],
      xAxis: {
        label: "Ra [Ohm]",
        domain: [A.parameter["Ra_min"], A.parameter["Ra_max"]],
      },
      yAxis: { label: "I [A] / Ua [V]", domain: [0, yMax] },
      options: {},
    },
  };
}

localstart(import.meta.url, meta, aufgabeFunc);
