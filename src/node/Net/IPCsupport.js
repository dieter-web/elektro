const net = require("node:net");
const path = require("path");

net.createServer().listen(path.join("\\\\?\\pipe", process.cwd(), "myctl"));
