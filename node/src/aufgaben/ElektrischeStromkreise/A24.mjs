import Componente from "../../componente.mjs";
import { Elektro } from "../../mathjs/elektro.mjs";
import { Arithmetik } from "../../mathjs/arithmetik.mjs";
import { parseValue } from "../../module/utils.mjs";
import { localstart } from "../../module/localstart.mjs";

export let meta = {
  name: "A24",
  chart: true,
  beschreibung: `
	In einem Grundstromkreis beträgt die Quellspannung 18V, wobei die Widerstänade Ri=3ohm und
	Ra=6ohm groß sind. Mit Hilfe der grafischen Darstellung sind die Klemmspannung und die
	Stromstärke zu bestimmen. Ua = f(I)
	`,
  felder: [
    {
      name: "U12",
      label: "Quellspannung",
      type: "unit",
      value: "18",
      unit: "V",
      description: "Quellspannung",
      required: true,
    },
    {
      name: "Ri",
      label: "Innenwiderstand",
      type: "unit",
      value: "3",
      unit: "ohm",
      description: "Innenwiderstand der Quellspannung",
      required: true,
    },
    {
      name: "Ra",
      label: "Arbeitswiderstand",
      type: "unit",
      value: "6",
      unit: "ohm",
      description: "Arbeitswiderstand des Grundstromkreises",
      required: true,
    },
  ],
};

export default async function aufgabeFunc(input) {
  const A = new Componente([input, { Art: "A", Id: 1 }, {}, "Componente"]);

  const AK = new Arithmetik(["add"]);
  const EK = new Elektro(["IUR", "Ik", "Uk"]);

  A.parameter["Rges"] = AK.berechne({ a: input.Ra, b: input.Ri }, "add");
  A.berechnung["I"] = EK.berechne(
    { U: input.U12, R: A.parameter["Rges"] },
    "IUR",
  );
  A.parameter["Ik"] = EK.berechne({ U12: input.U12, Ri: input.Ri }, "Ik");
  A.berechnung["Uk"] = EK.berechne(
    { U12: input.U12, I: A.berechnung["I"], Ri: input.Ri },
    "Uk",
  );

  // Kennlinien Ua = f(I) für Chart erzeugen
  A.chart["steps"] = 20;
  A.chart["Ua_f_I"] = [];

  // In numerische Werte umwandeln (nur Zahl)
  const data = {
    U12: parseValue(input.U12),
    Ri: parseValue(input.Ri),
    Ra: parseValue(input.Ra),
    Rges: A.parameter["Rges"].value,
    I: A.berechnung["I"].value,
    Ik: A.parameter["Ik"].value,
    Uk: A.berechnung["Uk"].value,
  };

  for (let i = 0; i < A.chart["steps"]; i++) {
    const I = parseFloat((data.Ik * i) / A.chart["steps"]).toFixed(4);
    const Ua = data.U12 - I * data.Ri;
    A.chart["Ua_f_I"].push([I, Ua]);
  }
  const yMax = data.U12;

  return {
    meta,
    parameter: [
      {
        Kennzeichnung: A.kennzeichnung,
        Parameter: A.parameter,
        Eigenschaften: A.eigenschaften,
        Berechnung: {
          I: A.berechnung["I"],
          Uk: A.berechnung["Uk"],
        },
      },
    ],
    chartData: {
      curves: [
        {
          label: "Ua = f(I)",
          color: "blue",
          points: A.chart["Ua_f_I"],
        },
      ],
      xAxis: {
        label: "I [A]",
        domain: [0, data.Ik],
      },
      yAxis: {
        label: "Ua [V]",
        domain: [0, yMax],
      },
      options: {
        width: 400,
        height: 300,
        margin: 60,
      },
    },
  };
}

localstart(import.meta.url, meta, aufgabeFunc);
