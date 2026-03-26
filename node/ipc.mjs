import net from 'node:net';
import fs from 'fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// _dirname in ES modules nachbauen
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Absoluter Pfad zum Socket in haskell/
const SOCKET_PATH = path.join(__dirname, '..', 'haskell', 'elektro.sock');

//export
function call(method, params = {}) {
  return new Promise((resolve, reject) => {
    const client = net.createConnection(SOCKET_PATH);

    client.on('connect', () => {
      const req = JSON.stringify({ method, params });
      client.write(req + '\n');
    });

    client.on('data', (data) => {
      const json = JSON.parse(data.toString());
      resolve(json.result);
      client.end();
    });

    client.on('error', reject);
  });
}

export const hs_add = (x, y) => call('add', { x, y });
export const hs_mul = (x, y) => call('mul', { x, y });
