const net = require("node:net");
const client = net.createConnection({ port: 8000 }, () => {
  // 'connect' listener.
  console.log("connect to server!");
  client.write("World!\r\n");
});

client.on("data", (data) => {
  console.log(data.toString());
  client.end();
});

client.on("end", () => {
  console.log("disconnected from server");
});
