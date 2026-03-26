/* 1. Variante
import { fileURLToPath } from "url";
import path from "path";
import { exec } from "node:child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const haskPath = path.resolve(__dirname, "../ghc");

export function parseNum(v) {
  return Number(String(v).replace(/[^\d.-]/g, ""));
}

export async function hask(nam, par) {
  const args = par.map((k) => parseNum(k)).join(" ");
  const cmd = `${haskPath}/${nam} ${args}`;
  try {
    const out = await execAsync(cmd);
    const result = out.stdout
      .trim()
      .replace(/[()]/g, "")
      .split(",")
      .map((a) => Number(a));

    if (isNaN(result)) return result;
  } catch (err) {
    console.error("Fehler bei der Berechnung:", err);
    return null;
  }
}

export async function transform(nam, felder) {
  const parameter = felder.map((k) => parseNum(k.value));
  return await hask(nam, parameter);
}
*/

// 2. Variante
// module/haskell.mjs
import { execFile } from 'child_process';
import { promisify } from 'util';

const execFileAsync = promisify(execFile);

/**
 * Startet ein Haskell-Executable über stack exec und liefert JSON zurück.
 * @param {string} modulName - z.B. "A46", "Resistor", ...
 * @param {Array} felder - Array von Feldern mit .value
 */
export async function transform(modulName, felder) {
  // Werte aus den Feldern extrahieren
  const values = felder.map((f) => f.value);

  // Argumentliste für stack exec
  const args = ['exec', 'elektro-exe', modulName, ...values.map(String)];

  try {
    const { stdout } = await execFileAsync('stack', args);
    return JSON.parse(stdout);
  } catch (err) {
    throw new Error(
      `Fehler beim Haskell-Aufruf (${modulName}): ${err.message}`
    );
  }
}

export function rpc(method, params = {}, id = 1) {
  return new Promise((resolve, reject) => {
    const client = net.createConnection(SOCK_PATH);

    client.on('connect', () => {
      const req = JSON.stringify({
        jsonrpc: '2.0',
        id,
        method,
        params,
      });
      client.write(req + '\n');
    });

    client.on('data', (data) => {
      const res = JSON.parse(data.toString());
      if (res.error) reject(res.error);
      else resolve(res.result);
      client.end();
    });
    client.on('error', reject);
  });
}
