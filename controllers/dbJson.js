// require('use-strict')
const fs = require("fs");
const _ = require("lodash");

function opencreateJSONFile(name) {
  return fs.open(name, "a+", (err, fd) => {
    if (err) throw err;
    return fd;
  });
}

// TODO: richtig ?
// function opencreateJSONFile (name) {
//   return new Promise((resolve, reject) => {
//     fs.open(name, 'a+', (err, fd) => {
//       if (err) {
//         reject(err)
//       } else {
//         resolve(fd)
//       }
//     })
//   })
// }

function deleteJSONFile(name) {
  fs.unlink(name, (err) => {
    if (err) throw err;
    console.log(`${name} was deleted`);
  });
}

function closeJSONFile(fd) {
  fs.close(fd, (err) => {
    if (err) throw err;
  });
}

function readJSONFile(file) {
  try {
    return JSON.parse(fs.readFileSync(file));
  } catch (err) {
    console.error(`${__dirname} ${__filename} ${err}`);
  }
}

function readJSONFileKey(file, key) {
  try {
    return readJSONFile(file)[key];
  } catch (err) {
    console.error(`${__dirname} ${__filename} ${err}`);
  }
}

function writeJSONItem(file, Item) {
  try {
    fs.writeFileSync(file, JSON.stringify(Item));
  } catch (err) {
    console.error(`${__dirname} ${__filename} ${err}`);
  }
}

function appendJSONItem(filename, Item) {
  try {
    let db = [];
    let data = readJSONFile(filename);
    if (data != undefined) {
      if (Array.isArray(data)) {
        db = data;
      } else {
        db = [data];
      }
    }
    db.push(Item);
    writeJSONItem(filename, db);
  } catch (err) {
    console.error(`${__dirname} ${__filename} ${err}`);
  }
}

function delJSONItem(filename, deldata) {
  try {
    const data = fs.readFileSync(filename, "utf-8");
    let db = JSON.parse(data);
    db.find((value, index, obj) => {
      if (_.isEqual(value, deldata)) {
        obj[index] = {};
      }
    });
    fs.writeFileSync(filename, JSON.stringify(db, null, 4), "utf-8");
  } catch (err) {
    console.error(`${__dirname} ${__filename} ${err}`);
  }
}

function write(filename, erg) {
  opencreateJSONFile(filename);
  appendJSONItem(filename, erg);
}

exports.write = write;
exports.opencreateJSONFile = opencreateJSONFile;
exports.writeJSONItem = writeJSONItem;
exports.readJSONFile = readJSONFile;
exports.appendJSONItem = appendJSONItem;
exports.delJSONItem = delJSONItem;
exports.readJSONFileKey = readJSONFileKey;
