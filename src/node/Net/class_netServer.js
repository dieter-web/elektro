const net = require("node:net");

const server = net
  .createServer((socket) => {
    socket.end("goodbye\n");
  })
  .on("error", (err) => {
    // Handle errors here.
    throw err;
  });

// Grab an arbitrary unused port.
server.listen(() => {
  console.log("opened server on", server.address());
});

server.close(() => {
  console.log("close server on", server.address());
});
