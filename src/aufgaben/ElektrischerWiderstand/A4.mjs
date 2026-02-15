import Componente from "../../componente.mjs";
import { Elektro } from "../../mathjs/elektro.mjs";
import { Arithmetik } from "../../mathjs/arithmetik.mjs";

import { ladeWerkstoff_wert } from "../../module/utils.mjs";
import { localstart } from "../../module/localstart.mjs";

export let meta = {
  name: "A4",
  beschreibung: `
		Eine zweiadrige Aluminiumleitung verbindet ein Gleichstromnetz von 230V Netzspannung mit einem 800 m entfernt liegenden
		Verbraucher. Die Leitung wird mit einem Strom I = 11 A belastet. Wie groß muß der erforderliche Querschnitt sein,
		wenn der Spannungsverlust längs der Leitung maximal 5% der Netzspannung betragen darf?
	`,
  felder: [
    {
      name: "Material",
      label: "Material",
      type: "string",
      value: "Al",
      unit: "",
      description: "Material der Leitung",
      require: true,
    },
    {
      name: "U",
      label: "U",
      type: "unit",
      value: "230",
      unit: "V",
      description: "Spannung des Gleichstromnetzes",
      require: true,
    },
    {
      name: "l",
      label: "l",
      type: "unit",
      value: "800",
      unit: "m",
      description: "Abstand des Verbrauchers von der Spannungsquelle",
      require: true,
    },
    {
      name: "n",
      label: "n",
      type: "numeric",
      value: 2,
      unit: "",
      description: "Anzahl der Adern der Leitung",
      require: true,
    },
    {
      name: "I",
      label: "I",
      type: "unit",
      value: "11",
      unit: "A",
      description: "Strombelastung der Leitung",
      require: true,
    },
    {
      name: "G",
      label: "G",
      type: "number",
      value: 5,
      unit: "",
      description: "Prozentualer Spannungsverlust",
      require: true,
    },
  ],
};

export default async function aufgabeFunc(input) {
  const ρ = await ladeWerkstoff_wert(input.Material, "ρ");
  const W = new Componente([
    input,
    { Art: "W", Id: 1 },
    { ρ: ρ },
    "Componente",
  ]);

  const AK = new Arithmetik(["mul", "Prozentwert"]);
  const EK = new Elektro(["RUI", "AρlR"]);

  W.parameter["l2"] = AK.berechne({ b: input.l, a: input.n }, "mul");
  W.parameter["Up"] = AK.berechne({ G: input.U, p: input.G }, "Prozentwert");
  W.parameter["R"] = EK.berechne({ U: W.parameter["Up"], I: input.I }, "RUI");
  W.berechnung["A"] = EK.berechne(
    { l: W.parameter["l2"], R: W.parameter["R"], ρ: ρ },
    "AρlR",
  );

  return {
    meta,
    parameter: [
      {
        Kennzeichnung: W.kennzeichnung,
        Parameter: W.parameter,
        Eigenschaften: W.eigenschaften,
        Berechnung: { A: W.berechnung["A"] },
      },
    ],
  };
}

localstart(import.meta.url, meta, aufgabeFunc);
