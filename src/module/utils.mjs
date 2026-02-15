import * as fs from "node:fs";
import { readFile } from "fs/promises";
import { existsSync } from "fs";
import assert from "node:assert";

import { create, all } from "mathjs";
const math = create(all);

import { fileURLToPath, pathToFileURL } from "url";

import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export function parseNum(v) {
  return Number(String(v).replace(/[^\d.-]/g, ""));
}

export function parseValue(val) {
  if (typeof val === "number") return val;
  if (typeof val === "string") return parseFloat(val.replace(",", "."));
  return 0;
}

// export function createYPoints() {}

export async function ladeWerkstoffe(pfad = "data/Leiterwerkstoffe.json") {
  //	if (!existsSync(pfad)) throw new Error(`Datei nicht gefunden: ${pfad}`);

  try {
    const inhalt = await readFile(pfad, "utf8");
    return JSON.parse(inhalt);
  } catch (err) {
    throw new Error(
      `Fehler beim Lesen oder Parsen von ${pfad}: ${err.message}`,
    );
  }
}

export async function ladeWerkstoff_wert(Material, wert = "ρ") {
  const pfad = path.join(__dirname, "../../data/Leiterwerkstoffe.json");

  if (!existsSync(pfad)) throw new Error(`Datei nicht gefunden: ${pfad}`);
  try {
    const inhalt = await readFile(pfad, "utf8");
    const jinhalt = JSON.parse(inhalt);
    const konstante = jinhalt?.[Material]?.werte?.[wert];

    assert.ok(
      konstante,
      `Material "${Material}" nicht gefunden oder Struktur ungültig`,
    );
    assert.ok(
      typeof konstante?.wert === "number",
      "wert ist keine gültige Zahl",
    );
    assert.ok(
      typeof (konstante?.einheit === "string",
      "einheit fehlt oder ist kein string"),
    );

    return math.unit(konstante.wert, konstante.einheit);
  } catch (err) {
    throw new Error(
      `Fehler beim Lesen oder Parsen von ${pfad}: ${err.message}`,
    );
  }
}

// Hilfsfunktion zum sicheren JSON Laden
export const loadJsonData = (filename) => {
  try {
    return JSON.parse(fs.readFileSync(path.join(JSON_DIR, filename), "utf8"));
  } catch (error) {
    console.error(`Error loading ${filename}:`, error);
    return {};
  }
};

// Besseres Pfad-Handling
export const JSON_DIR = path.join(process.cwd(), "data");

export async function loadTaskConfig(taskName) {
  // Suche nach taskName.mjs in allen Unterverzeichnissen von src/aufgaben
  const aufgabenRoot = path.resolve(process.cwd(), "src", "aufgaben");

  function findAllTaskFiles(dir) {
    let results = [];
    const list = fs.readdirSync(dir, { withFileTypes: true });
    for (const file of list) {
      const filePath = path.join(dir, file.name);
      if (file.isDirectory()) {
        results = results.concat(findAllTaskFiles(filePath));
      } else if (file.isFile() && file.name === `${taskName}.mjs`) {
        results.push(filePath);
      }
    }
    return results;
  }

  const matches = findAllTaskFiles(aufgabenRoot);

  if (matches.length > 0) {
    try {
      const moduleUrl = pathToFileURL(matches[0]).href;
      const taskModule = await import(moduleUrl);
      return {
        meta: taskModule.meta,
        handler: taskModule.default,
      };
    } catch (err) {
      throw new Error(
        `Fehler beim Laden von Aufgabe "${taskName}": ${err.message}`,
      );
    }
  }
  throw new Error(
    `Aufgabe "${taskName}" nicht gefunden in Unterverzeichnissen von ${aufgabenRoot}`,
  );
}
