import Componente from "../../componente.mjs";
import { Elektro } from "../../mathjs/elektro.mjs";
import { Arithmetik } from "../../mathjs/arithmetik.mjs";
import { Planemetrie } from "../../mathjs/geometrie.mjs";
import { ladeWerkstoff_wert } from "../../module/utils.mjs";
import { localstart } from "../../module/localstart.mjs";

export let meta = {
  name: "A5",
  beschreibung: `
	Auf einem Spulenkörper mit einer mittleren Windungslänge lm = 4.35cm sind 680 Windungen
	Aluminiumdraht von 0.4 mm Durchmesser gewickel. Wie groß ist der Leitwert der Spule?
	`,
  felder: [
    {
      name: "Material",
      label: "Material",
      type: "string",
      value: "Al",
      unit: "",
      description: "Material der Spule",
      require: true,
    },
    {
      name: "lm",
      label: "lm",
      type: "unit",
      value: "4.35",
      unit: "cm",
      description: "Windungslänge der Spule",
      require: true,
    },
    {
      name: "n",
      label: "n",
      type: "number",
      value: "680",
      unit: "",
      description: "Anzahl der Windungen der Spule",
      require: true,
    },
    {
      name: "d",
      label: "d",
      type: "unit",
      value: "0.4",
      unit: "mm",
      description: "Durchmesser des Spulendrahtes",
      require: true,
    },
  ],
};

export default async function aufgabeFunc(input) {
  const ρ = await ladeWerkstoff_wert(input.Material, "ρ");

  const L = new Componente([
    input,
    { Art: "L", Id: 1 },
    { ρ: ρ },
    "Componente",
  ]);

  const PK = new Planemetrie(["KAd"]);
  const AK = new Arithmetik(["mul"]);
  const EK = new Elektro("GAρl");

  L.parameter["l"] = AK.berechne({ a: input.lm, b: input.n }, "mul");
  L.parameter["A"] = PK.berechne({ d: input.d }, "KAd");
  L.berechnung["G"] = EK.berechne(
    { l: L.parameter["l"], A: L.parameter["A"], ρ: ρ },
    "GAρl",
  );

  return {
    meta,
    parameter: [
      {
        Kennzeichnung: L.kennzeichnung,
        Parameter: L.parameter,
        Eigenschaften: L.eigenschaften,
        Berechnung: { G: L.berechnung["G"] },
      },
    ],
  };
}

localstart(import.meta.url, meta, aufgabeFunc);
