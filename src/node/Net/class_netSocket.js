const net = require("node:net");

net.connect({
  port: 5000,
  onread: {
    // Reuses a 4kiB Buffer for every read from the socket.
    buffer: Buffer.alloc(4 * 1024),
    callback: function (nread, buf) {
      // Received data is available in 'buf' from 0 to 'nread'
      console.log(buf.toString("utf8", 0, nread));
    },
  },
});
