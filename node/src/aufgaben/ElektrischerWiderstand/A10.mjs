import Componente from "../../componente.mjs";
import { Elektro } from "../../mathjs/elektro.mjs";
import { Arithmetik } from "../../mathjs/arithmetik.mjs";
import { ladeWerkstoff_wert } from "../../module/utils.mjs";
import { localstart } from "../../module/localstart.mjs";

export let meta = {
  name: "A10",
  beschreibung: `
	Der ohmsche Widerstand einer Spule, die aus Kupferdraht gewickelt ist, beträgt bei 12celsius 45 ohm.
	Nach einer längeren Betriebsdauer ist der Spulenwiderstand um 28% seines Anfangswertes gestiegen.
	Wie groß ist die Betriebstemperatur?
	`,
  felder: [
    {
      name: "Material",
      label: "Material",
      type: "string",
      value: "Cu",
      unit: "",
      description: "Material des Drahtes der Spule",
      required: true,
    },
    {
      name: "δ12",
      label: "δ12",
      type: "unit",
      value: "12",
      unit: "celsius",
      description: "Drahttemperatur 1",
      required: true,
    },
    {
      name: "R12",
      label: "R12",
      type: "unit",
      value: "45",
      unit: "ohm",
      description: "Widerstand des Spulendrahtes bei 12 celsius",
      required: true,
    },
    {
      name: "p",
      label: "prozentuale Temperaturerhöhung",
      type: "numeric",
      value: "28", // %
      unit: "",
      description: "prozentuale Temperaturerhönung des Spulendrahtes",
      required: true,
    },
  ],
};

export default async function aufgabeFunc(input) {
  const ρ = await ladeWerkstoff_wert(input.Material, "ρ");
  const δ0 = await ladeWerkstoff_wert(input.Material, "δ0");

  const L = new Componente([
    input,
    { Art: "L", Id: 1 },
    { ρ: ρ, δ0: δ0 },
    "Componente",
  ]);

  const AK = new Arithmetik(["Prozentwert", "add"]);
  const EK = new Elektro(["δ2"]);

  L.berechnung["Prozentwert"] = AK.berechne(
    { G: input.R12, p: input.p },
    "Prozentwert",
  );
  L.berechnung["R2"] = AK.berechne(
    { a: input.R12, b: L.berechnung["Prozentwert"] },
    "add",
  );
  L.berechnung["δ2"] = EK.berechne(
    { δ0: δ0, R: input.R12, Rδ2: L.berechnung["R2"], δ1: input.δ12 },
    "δ2",
  );

  return {
    meta,
    parameter: [
      {
        Kennzeichnung: L.kennzeichnung,
        Parameter: L.parameter,
        Eigenschaften: L.eigenschaften,
        Berechnung: { δ2: L.berechnung["δ2"] },
      },
    ],
  };
}

localstart(import.meta.url, meta, aufgabeFunc);
