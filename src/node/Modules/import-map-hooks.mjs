// import-map-hooks.js
import fs from "node:fs/promises";

const { imports } = JSON.parse(await fs.readFile("src/node/Modules/import-map.json"));

export async function resolve(specifier, context, nextResolve) {
  if (Object.hasOwn(imports, specifier)) {
    return nextResolve(imports[specifier], context);
  }

  return nextResolve(specifier, context);
}

resolve("name");
