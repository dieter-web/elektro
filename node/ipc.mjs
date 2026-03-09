import net from "node:net";
import fs from "fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// __dirname in ES modules nachbauen
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// Absoluter Pfad zum Socket in haskell/
const SOCKET_PATH = path.join(__dirname,"..","haskell", "elektro.sock");

export function hs_add(x, y) {
  return new Promise((resolve, reject) => {
    const client = net.createConnection(SOCKET_PATH);

    client.on("connect", () => {
      const req = JSON.stringify({ x, y });
      client.write(req + "\n");
    });

    client.on("data", (data) => {
      resolve(Number(data.toString()));
      client.end();
    });

    client.on("error", (err) => {
	    reject(err);
    });
  });
}

