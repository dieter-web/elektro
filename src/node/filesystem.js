const fs = require("node:fs");

fs.readFile("./filesystem.js", (err, data) => {
  if (err) throw err;
  console.log(data);
});

const pathsToCheck = ["./../Kernel", "./../js"];

for (let i = 0; i < pathsToCheck.length; i++) {
  fs.stat(pathsToCheck[i], (err, stats) => {
    console.log(stats.isDirectory());
    console.log(stats);
  });
}

const dir = fs.opendir("./../Kernel", (err, stats) => {
  if (err) throw err;
  console.log(stats);
});

// for (const dirent of dir) console.log(dirent);
