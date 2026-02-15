// Modul: A42.mjs
// Autor: Dieter
// Erstellt: 2025-10-26

import Componente from "../../componente.mjs";
import { Elektro } from "../../mathjs/elektro.mjs";
import { Arithmetik } from "../../mathjs/arithmetik.mjs";
import { localstart } from "../../module/localstart.mjs";
import { parseNum } from "../../module/utils.mjs";

export let meta = {
  name: "A42",
  chart: false,
  beschreibung: `
  Der Belastungswiderstand Ra eines Spannungsteilers is 18ohm groß, wobei der Gesamtwiderstand des Spannungsteilers ohne
  Ra einen Wert von 100ohm hat. Die Gesamtspannung beträgt 100V, und der Belastungsstrom Ia hat eine Größe von 700mA.
  Wie groß ist der Teilwiderstand R2 des Spannungsteilers (Bild), und auf wieviel Prozent ist der Strom I2 durch diesen
  Widerstand gegenüber dem unbelasteten Spannungsteiler abgesunken?
  `,
  felder: [
    {
      name: "Ra",
      label: "Ra",
      type: "unit",
      value: "18",
      unit: "ohm",
      description: "Belastungswiderstand",
      required: true,
    },
    {
      name: "Rg",
      label: "Rg",
      type: "unit",
      value: "100",
      unit: "ohm",
      description: "Gesamtwiderstand",
      required: true,
    },
    {
      name: "U",
      label: "U",
      type: "unit",
      value: "100",
      unit: "V",
      description: "Gesamtspannung",
      required: true,
    },
    {
      name: "Ia",
      label: "Ia",
      type: "unit",
      value: "0.700",
      unit: "A",
      description: "Belastungsstrom",
      required: true,
    },
  ],
};

export default async function aufgabeFunc(input) {
  const A1 = new Componente([
    input,
    { Art: "A", Id: "1" },
    {},
    "Spannungsteiler",
  ]);

  // input in Zahlen umwandeln
  const numRa = parseNum(input.Ra);
  const numRg = parseNum(input.Rg);
  const numU = parseNum(input.U);
  const numIa = parseNum(input.Ia);

  // TODO: Maßeinheiten ?
  async function R2() {
    const A = 1;
    const b = () => {
      const v1 = numIa * numRg;
      const v2 = numU - v1;
      return v2 / numIa;
    };
    const negRg = numRg * -1;
    // const C = negRg * numRa;
    const p = b() / A;
    const q = (negRg * numRa) / A;
    const halfP = p / 2;
    const neghalfP = halfP * -1;
    const D = Math.pow(halfP, 2) - q;
    const sqrtD = Math.sqrt(D);
    const x1 = neghalfP - sqrtD;
    const x2 = neghalfP + sqrtD;

    let result;

    if (D == 0) {
      result = x1; // Doppelte reelle Lösung
    } else if (D > 0) {
      result = x1 > x2 ? x1 : x2;
      //x1 > x2 ? (R2 = x1) : (R2 = x2);
      // return {x1,x2} // Zwei reelle Lösungen
    } else {
      // return {x1, x2} // Zwei komplexe Lösungen
      result = { x1, x2 };
    }
    return `${result} ohm`; // Sollte mit der Maßeinheit von Rg übereinstimmen.
  }

  // Berechne R2
  A1.berechnung["R2"] = await R2();

  const AK = new Arithmetik(["Prozentsatz"]);
  const EK = new Elektro(["I2", "IUR"]);

  // Berechne I2
  // I2 = IaRa/R2
  A1.berechnung["I2"] = EK.berechne(
    { Ia: input.Ia, Ra: input.Ra, R2: A1.berechnung["R2"] },
    "I2",
  );

  // Berechne Prozentsatz
  A1.parameter["I2max"] = EK.berechne({ U: input.U, R: input.Rg }, "IUR");
  A1.berechnung["Iprozentsatz"] =
    AK.berechne(
      { P: A1.berechnung["I2"], G: A1.parameter["I2max"] },
      "Prozentsatz",
    ) + "%";

  return {
    meta,
    parameter: [
      {
        Kennzeichnung: A1.kennzeichnung,
        Parameter: A1.parameter,
        Eigenschaften: A1.eigenschaften,
        Berechnung: {
          R2: A1.berechnung["R2"],
          Ips: A1.berechnung["Iprozentsatz"],
        },
      },
    ],
  };
}

localstart(import.meta.url, meta, aufgabeFunc);
