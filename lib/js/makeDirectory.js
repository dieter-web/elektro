const {
  mkdir
} = require("node:fs/promises");
const {
  join
} = require("node:path");
async function makeDirectory(name) {
  return await mkdir(name, {
    recursive: true
  });
}
exports.makeDirectory = makeDirectory;