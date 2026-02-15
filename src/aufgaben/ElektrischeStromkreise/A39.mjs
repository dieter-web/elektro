import Componente from "../../componente.mjs";
import { localstart } from "../../module/localstart.mjs";
import { Elektro } from "../../mathjs/elektro.mjs";
import { parseNum } from "../../module/utils.mjs";
import { exec } from "node:child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const resistorPath = path.resolve(__dirname, "../../ghc/resistor");

export let meta = {
  name: "A39",
  chart: false,
  beschreibung: `
	In der Schaltung nach Bild 2.21  haben die Widerstände folgende Werte:
	R1=1641kohm, R2=1561kohm, R3=140ohm, R4=196.5ohm, R5 165ohm, R6=85ohm, R7=933.5ohm,
	R8= 700ohm. U=230V. Gesucht ist die Größe des Stroms I56.
	`,
  felder: [
    {
      name: "R1",
      label: "R1",
      type: "unit",
      value: "1641",
      unit: "ohm",
      description: "R1",
      required: true,
    },
    {
      name: "R2",
      label: "R2",
      type: "unit",
      value: "1561",
      unit: "ohm",
      description: "R2",
      required: true,
    },
    {
      name: "R3",
      label: "R3",
      type: "unit",
      value: "140",
      unit: "ohm",
      description: "R3",
      required: true,
    },
    {
      name: "R4",
      label: "R4",
      type: "unit",
      value: "196.5",
      unit: "ohm",
      description: "R4",
      required: true,
    },
    {
      name: "R5",
      label: "R5",
      type: "unit",
      value: "165",
      unit: "ohm",
      description: "R5",
      required: true,
    },
    {
      name: "R6",
      label: "R6",
      type: "unit",
      value: "85",
      unit: "ohm",
      description: "R6",
      required: true,
    },
    {
      name: "R7",
      label: "R7",
      type: "unit",
      value: "933.5",
      unit: "ohm",
      description: "R7",
      required: true,
    },
    {
      name: "R8",
      label: "R8",
      type: "unit",
      value: "700",
      unit: "ohm",
      description: "R8",
      required: true,
    },
    {
      name: "U",
      label: "U",
      type: "unit",
      value: "220",
      unit: "V",
      description: "",
      required: true,
    },
  ],
};
export default async function aufgabeFunc(input) {
  const A1 = new Componente([input, { Art: "A", Id: 1 }, {}, "Componente"]);

  const EK = new Elektro(["I1I2R1R2"]);

  // Werte abtrennen
  const keys = ["R1", "R2", "R3", "R4", "R5", "R6", "R7", "R8", "U"];
  const [numR1, numR2, numR3, numR4, numR5, numR6, numR7, numR8, numU] =
    keys.map((k) => parseNum(input[k]));
  const numR5R6 = numR5 + numR6;

  async function hask() {
    try {
      const [out1, out2, out3] = await Promise.all([
        execAsync(`${resistorPath} ${numR1} ${numR2}`),
        execAsync(`${resistorPath} ${numR7} ${numR8}`),
        execAsync(`${resistorPath} ${numR4} ${numR5R6}`),
      ]);

      const R1pR2 = Number(out1.stdout.trim());
      const R7pR8 = Number(out2.stdout.trim());
      const R4pR5R6 = Number(out3.stdout.trim());

      return [R1pR2, R7pR8, R4pR5R6];
    } catch (err) {
      console.error("Fehler bei der Berechnung:", err);
    }
  }

  const Rs = await hask();
  if (!Rs) throw new Error("Berechnung fehlgeschlagen");

  A1.parameter["R5R6"] = EK.Num2Unit(numR5R6, "ohm");

  // Das ist keine Addition im herkömmlichen Sinne, (Stringverarbeitung!)
  A1.parameter["Rg"] =
    Number(Rs[0]) + Number(numR3) + Number(Rs[2]) + Number(Rs[1]);
  A1.parameter["Ig"] = EK.Num2Unit(numU / A1.parameter["Rg"], "A");

  // Berechnung I56
  const unitIg = A1.parameter["Ig"];
  const R456 = Number(numR4) + Number(numR5) + Number(numR6);
  const unitR456 = EK.Num2Unit(R456, "ohm");

  A1.berechnung["I56"] = EK.berechne(
    { I2: unitIg, R1: EK.Num2Unit(numR4, "ohm"), R2: unitR456 },
    "I1I2R1R2",
  );

  return {
    meta,
    parameter: [
      {
        Kennzeichnung: A1.kennzeichnung,
        Parameter: A1.parameter,
        Eigenschaften: A1.eigenschaften,
        Berechnung: {
          I56: A1.berechnung["I56"],
        },
      },
    ],
  };
}
localstart(import.meta.url, meta, aufgabeFunc);
