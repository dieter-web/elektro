import Componente from "../../componente.mjs";
import { Arithmetik } from "../../mathjs/arithmetik.mjs";
import { localstart } from "../../module/localstart.mjs";

export let meta = {
  name: "A27",
  chart: false,
  beschreibung: `
	Ein Widerstandszweig von 16kohm Gesamtwiderstand soll durch einen Reihenwiderstand um 3.75%
	vergrößert werden. Wie groß muß der Reihenwiderstand sein? 
	`,
  felder: [
    {
      name: "R_ges",
      label: "Gesamtwiderstand",
      type: "unit",
      value: 16000,
      unit: "ohm",
      description: "Gesamtwiderstand des Zweigs",
      required: true,
    },
    {
      name: "prozent",
      label: "Prozentuale Erhöhung",
      type: "number",
      value: 3.75,
      unit: "",
      description: "Prozentuale Erhöhung des Widerstands",
      required: true,
    },
  ],
};
export default async function aufgabeFunc(input) {
  const A1 = new Componente([input, { Art: "A", Id: 1 }, {}, "Componente"]);

  const AK = new Arithmetik(["Grundwertp", "sub"]);

  A1.parameter["R_neu"] = AK.berechne(
    { G: input.R_ges, p: input.prozent },
    "Grundwertp",
  );
  A1.berechnung["R_reihe"] = AK.berechne(
    { a: A1.parameter["R_neu"], b: input.R_ges },
    "sub",
  );

  /*
	// Matrixlösung (MNA):
	// Knoten 1: vor R_ges, Knoten 2: Masse

	// G = [[1/R_ges + 1/R_reihe, -1/R_ges], [-1/R_ges, 1/R_ges]]
	
	// Für U=1V an Knoten 1 gegen Masse
	const math = await import('mathjs');
	const G = math.matrix([
		[1/R_ges + 1/A.parameter['R_neu'] - R_ges, -1/R_ges],
		[-1/R_ges, 1/R_ges]
	]);

	A.parameter['I'] = math.matrix([[1],[0]]); // 1V an Knoten 1, Masse an Knoten 2
	const phi = math.lusolve(G, I);

	const phi1 = phi.get([0,0]);
	const phi2 = phi.get([1,0]);
	const I_total = (phi1 - phi2) / R_ges;
*/

  return {
    meta,
    parameter: [
      {
        Kennzeichnung: A1.kennzeichnung,
        Parameter: A1.parameter,
        Eigenschaften: A1.eigenschaften,
        Berechnung: {
          R_reihe: A1.berechnung["R_reihe"],
        },
      },
    ],
  };
}

localstart(import.meta.url, meta, aufgabeFunc);
