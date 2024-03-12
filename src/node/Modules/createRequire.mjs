import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

// sibling-module.js is a CommonJS module.
const siblingModule = require("./sibling-module");
